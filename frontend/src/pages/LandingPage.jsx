"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "Tops", icon: "ri-shirt-line", color: "bg-pink-100 text-pink-600" },
    { name: "Bottoms", icon: "ri-user-line", color: "bg-blue-100 text-blue-600" },
    { name: "Dresses", icon: "ri-user-3-line", color: "bg-purple-100 text-purple-600" },
    { name: "Outerwear", icon: "ri-coat-line", color: "bg-orange-100 text-orange-600" },
    { name: "Shoes", icon: "ri-footprint-line", color: "bg-green-100 text-green-600" },
    { name: "Accessories", icon: "ri-handbag-line", color: "bg-yellow-100 text-yellow-600" },
  ]

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "/placeholder.svg?height=200&width=200",
      condition: "Excellent",
      points: 150,
      user: "Sarah M.",
    },
    {
      id: 2,
      title: "Summer Floral Dress",
      image: "/placeholder.svg?height=200&width=200",
      condition: "Good",
      points: 120,
      user: "Emma K.",
    },
    {
      id: 3,
      title: "Designer Sneakers",
      image: "/placeholder.svg?height=200&width=200",
      condition: "Like New",
      points: 200,
      user: "Alex R.",
    },
    {
      id: 4,
      title: "Wool Winter Coat",
      image: "/placeholder.svg?height=200&width=200",
      condition: "Very Good",
      points: 180,
      user: "Maria L.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Swap, Share, and
            <span className="text-emerald-600"> Sustain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the sustainable fashion revolution. Exchange your unused clothes with others and earn points for
            eco-friendly shopping.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for clothing items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-full border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none shadow-lg"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/register"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Start Swapping
            </Link>
            <Link
              to="/browse"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Browse Items
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                to={`/item/${item.id}`}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                    {item.points} pts
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Condition: {item.condition}</p>
                  <p className="text-sm text-emerald-600 font-medium">by {item.user}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-emerald-200">Items Exchanged</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-emerald-200">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-emerald-200">Pounds of Waste Reduced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-emerald-600 rounded-full p-2">
              <i className="ri-recycle-line text-2xl"></i>
            </div>
            <span className="text-2xl font-bold">ReWear</span>
          </div>
          <p className="text-gray-400 mb-6">Making fashion sustainable, one swap at a time.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-facebook-line text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-twitter-line text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-instagram-line text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
