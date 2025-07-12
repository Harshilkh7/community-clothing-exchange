const express = require('express');
const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// ===== MULTER SETUP FOR IMAGE UPLOAD =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`; // Prevent filename collisions
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// ===== ROUTES =====

// @route   POST /items
// @desc    Add new item to listing (requires auth)
// @access  Private
router.post('/', authMiddleware, upload.array('images', 5), async (req, res) => {
  try {
    const {
      title, description, category,
      type, size, condition, tags
    } = req.body;

    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    const item = new Item({
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags?.split(',') || [],
      imageUrls,
      uploadedBy: req.user,
      isApproved: false, // Default false until admin approves
      available: true    // Item is available by default
    });

    await item.save();
    res.status(201).json({ msg: 'Item listed successfully', item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error while listing item' });
  }
});

// ✅ IMPORTANT: Place BEFORE `/:id` to avoid route conflict
// @route   GET /items/featured
// @desc    Get latest featured (available + approved) items
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const items = await Item.find({ available: true, isApproved: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .select('title category size condition imageUrls');

    res.json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching featured items' });
  }
});

// @route   GET /items/:id
// @desc    Get item details by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
      .populate('uploadedBy', 'name email');

    if (!item) return res.status(404).json({ msg: 'Item not found' });

    res.json({ item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching item details' });
  }
});

// @route   POST /items/:id/swap
// @desc    Redeem/swap item using points
// @access  Private
router.post('/:id/swap', authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    if (!item.available) {
      return res.status(400).json({ msg: 'Item is not available for swap' });
    }

    const user = await User.findById(req.user);
    const ITEM_COST = 20;

    if (user.points < ITEM_COST) {
      return res.status(400).json({ msg: 'Not enough points to redeem this item' });
    }

    // Deduct points and update item status
    user.points -= ITEM_COST;
    await user.save();

    item.available = false;
    await item.save();

    res.json({ msg: 'Swap successful', item, remainingPoints: user.points });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error processing swap' });
  }
});

// @route   GET /items
// @desc    Get all approved + available items for browsing
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({ isApproved: true, available: true })
      .sort({ createdAt: -1 })
      .populate('uploadedBy', 'name');

    res.json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to fetch items' });
  }
});

module.exports = router;
