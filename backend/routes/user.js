const express = require('express');
const User = require('../models/User');
const Item = require('../models/Item');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// @route   GET /users/me
// @desc    Get logged-in user's dashboard
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password'); // remove password field
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const items = await Item.find({ uploadedBy: user._id }).sort({ createdAt: -1 });

    res.json({
      user,
      uploadedItems: items
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error loading user dashboard' });
  }
});

module.exports = router;
