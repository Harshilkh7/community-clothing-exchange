const express = require('express');
const Item = require('../models/Item');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Real admin check using role field
const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error in admin check' });
  }
};

// @route GET /admin/pending-items
// @desc  Get all unapproved items
// @access Private/Admin
router.get('/pending-items', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const items = await Item.find({ isApproved: false });
    res.json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching pending items' });
  }
});

// @route POST /admin/items/:id/approve
// @desc  Approve an item
// @access Private/Admin
router.post('/items/:id/approve', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    if (!item) return res.status(404).json({ msg: 'Item not found' });
    res.json({ msg: 'Item approved', item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error approving item' });
  }
});

// @route DELETE /admin/items/:id/reject
// @desc  Reject (delete) an item
// @access Private/Admin
router.delete('/items/:id/reject', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });
    res.json({ msg: 'Item rejected and deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error rejecting item' });
  }
});

module.exports = router;
