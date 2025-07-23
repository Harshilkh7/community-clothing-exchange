# ReWear - Community Clothing Exchange

**ReWear** is a web-based platform designed to promote sustainable fashion by enabling users to exchange unused clothing. Users can directly swap items with others or redeem items through a point-based system. The platform’s mission is to reduce textile waste and encourage the reuse of wearable garments.

## Features

### User Authentication
- Secure email/password signup and login.

### Landing Page
- Platform introduction and mission statement.
- Calls-to-action: **Start Swapping**, **Browse Items**, **List an Item**.
- Featured items carousel highlighting popular listings.

### User Dashboard
- Profile management and points balance overview.
- Manage uploaded items.
- Track ongoing and completed swaps.

### Item Detail Page
- Multiple image gallery.
- Full item description including category, type, size, condition, and tags.
- Information about the uploader.
- Actions: **Swap Request** or **Redeem via Points**.
- Item availability status.

### Add New Item Page
- Upload images and add item details.
- Submit items for listing.

### Admin Role
- Moderate item listings (approve/reject).
- Remove inappropriate or spam items.
- Lightweight admin panel for oversight.

## How ReWear Works

### 1. List Your Items  
Upload photos and details of clothing items you no longer wear. Set your preferences for swaps or point redemption.

### 2. Browse & Request  
Discover items from other users. Send swap requests or redeem items using your earned points.

### 3. Complete Exchange  
Coordinate with other users to finalize your swap. Earn points for successful exchanges and positive reviews.

## Tech Stack

- Frontend: React.js, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Other Tools: Babel

## Future Improvements
- Real-time chat for swap coordination.

- Ratings and reviews for users and items.

- Enhanced search and filter options.

- Mobile app version.

- Integration with donation centers for unclaimed items.

## 📽️ Video

[![Watch Demo on Google Drive](https://img.shields.io/badge/Watch%20Demo-Google%20Drive-blue?logo=google-drive)](https://drive.google.com/file/d/1JJ0FekBHfBrvwpEIEAShBl5lrG5wW2rd/view?usp=drive_link)

> Click the badge above to watch the demo hosted on Google Drive.


## Environment Variables

Create a `.env` file in the `Backend` directory and add the following variables:

MONGO_URI=mongodb://localhost:27017/rewear
JWT_SECRET=yourSecretKey123


