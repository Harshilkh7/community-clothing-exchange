const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// Image files (must be physically in /uploads folder)
const images = [
  "dress1.avif", "dress2.avif", "dress3.avif", "dress4.webp", "dress5.webp", "dress6.webp",
  "kids1.webp", "kids2.webp", "kids3.webp", "kids4.webp", "kids5.avif", "kids6.avif",
  "kurti1.webp", "kurti2.webp", "kurti3.webp", "kurti4.webp", "kurti5.webp", "kurti6.webp",
  "lehnqa1.webp", "lehnqa2.jpg", "lehnqa3.jpg", "lehnqa4.webp", "lehnqa5.webp", "lehnqa6.webp",
  "menjeans.avif", "menjeans2.avif", "menjeans3.avif", "menjeans4.avif", "menjeans5.avif", "menjeans6.jpeg",
  "saree1.webp", "saree2.webp", "saree3.webp", "saree4.webp", "saree5.webp", "saree6.webp",
  "shirt1.avif", "shirt2.avif", "shirt3.jpg", "shirt4.jpg", "shirt5.avif", "shirt6.avif"
];

const categories = ['Men', 'Women', 'Kids'];
const types = ['Topwear', 'Bottomwear', 'Outerwear', 'Footwear'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const conditions = ['New', 'Like New', 'Good', 'Fair', 'Used'];
const tagsList = ['cotton', 'denim', 'wool', 'blue', 'red', 'summer', 'winter', 'casual', 'formal'];

// Helpers
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTags() {
  const count = Math.floor(Math.random() * 3) + 1;
  const shuffled = [...tagsList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Generate Users
function generateUsers(count = 20) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      name: `User ${i}`,
      email: `user${i}@rewear.com`,
      password: bcrypt.hashSync('password123', 10),
      role: 'user',
      points: Math.floor(Math.random() * 100) + 50
    });
  }

  // Admin
  users.unshift({
    name: 'Admin User',
    email: 'admin@rewear.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
    points: 200
  });

  return users;
}

// Generate Items
function generateItems(users, count = 100) {
  const items = [];
  for (let i = 1; i <= count; i++) {
    const uploader = getRandom(users);
    const image = getRandom(images);
    items.push({
      title: `Sample ${getRandom(types)}`,
      description: `Great quality ${getRandom(conditions).toLowerCase()} ${getRandom(types).toLowerCase()} item.`,
      category: getRandom(categories),
      type: getRandom(types),
      size: getRandom(sizes),
      condition: getRandom(conditions),
      tags: getRandomTags(),
      imageUrls: [`/uploads/${image}`],
      available: Math.random() < 0.9,
      isApproved: true,
      uploadedBy: uploader._id
    });
  }
  return items;
}

// Main Seed Function
async function seedData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await User.deleteMany();
    await Item.deleteMany();

    const rawUsers = generateUsers(20);
    const createdUsers = await User.insertMany(rawUsers);

    const rawItems = generateItems(createdUsers, 100);
    await Item.insertMany(rawItems);

    console.log(`✅ Seeded ${createdUsers.length} users and ${rawItems.length} items`);
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seedData();
