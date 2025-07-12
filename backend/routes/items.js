const express = require('express');
const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Setup local file storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// @route   POST /items
// @desc    Add new item
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
      uploadedBy: req.user
    });

    await item.save();
    res.status(201).json({ msg: 'Item listed successfully', item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error while listing item' });
  }
});

// @route   GET /items/:id
// @desc    Get single item details
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('uploadedBy', 'name email');
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    res.json({ item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching item details' });
  }
});

// @route   GET /items/featured
// @desc    Get latest featured items for landing page
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const items = await Item.find({ available: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .select('title category size condition imageUrls');

    res.json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching featured items' });
  }
});

module.exports = router;
