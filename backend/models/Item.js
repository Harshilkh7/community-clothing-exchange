const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  imageUrls: [String],
  available: { type: Boolean, default: true },
  isApproved: { type: Boolean, default: false }, // 🔒 Admin approval
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
