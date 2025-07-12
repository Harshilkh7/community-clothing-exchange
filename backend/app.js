const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/user');
const cors = require("cors"); // ✅ Import CORS
const adminRoutes = require('./routes/admin');
const morgan = require('morgan');

const path = require('path');
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
  origin: "http://localhost:5173", // <-- your frontend URL (Vite dev server or similar)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Serve static files (uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/auth', authRoutes);
app.use('/items', itemRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

module.exports = app;
