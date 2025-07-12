"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("listings")

  const userStats = {
    points: 450,
    totalListings: 12,
    completedSwaps: 8,
    activeSwaps: 3,
  }

  const myListings = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      image: "/placeholder.svg?height=150&width=150",
      status: "Available",
      views: 24,
      interested: 3,
    },
    {
      id: 2,
      title: "Summer Maxi Dress",
      image: "/placeholder.svg?height=150&width=150",
      status: "Pending Swap",
      views: 18,
      interested: 2,
    },
    {
      id: 3,
      title: "Designer Handbag",
      image: "/placeholder.svg?height=150&width=150",
      status: "Available",
      views: 31,
      interested: 5,
    },
    {
      id: 4,
      title: "Wool Sweater",
      image: "/placeholder.svg?height=150&width=150",
      status: "Swapped",
      views: 15,
      interested: 1,
    },
  ]

  const myPurchases = [
    {
      id: 1,
      title: "Denim Jeans",
      image: "/placeholder.svg?height=150&width=150",
      points: 120,
      date: "2024-01-15",
      seller: "Emma K.",
    },
    {
      id: 2,
      title: "Silk Scarf",
      image: "/placeholder.svg?height=150&width=150",
      points: 80,
      date: "2024-01-10",
      seller: "Sarah M.",
    },
    {
      id: 3,
      title: "Running Shoes",
      image: "/placeholder.svg?height=150&width=150",
      points: 150,
      date: "2024-01-05",
      seller: "Alex R.",
    },
    {
      id: 4,
      title: "Cotton T-Shirt",
      image: "/placeholder.svg?height=150&width=150",
      points: 60,
      date: "2024-01-01",
      seller: "Maria L.",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Pending Swap":
        return "bg-yellow-100 text-yellow-800"
      case "Swapped":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header isAuthenticated={true} userPoints={userStats.points} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-4xl text-white"></i>
              </div>
              <button className="absolute bottom-0 right-0 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <i className="ri-camera-line"></i>
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
              <p className="text-gray-600 mb-4">Member since January 2024</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">{userStats.points}</div>
                  <div className="text-sm text-gray-600">Points</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{userStats.totalListings}</div>
                  <div className="text-sm text-gray-600">Listings</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{userStats.completedSwaps}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{userStats.activeSwaps}</div>
                  <div className="text-sm text-gray-600">Active</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                />
                <button className="absolute right-2 top-2 bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("listings")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "listings"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="ri-shirt-line mr-2"></i>
              My Listings
            </button>
            <button
              onClick={() => setActiveTab("purchases")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "purchases"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              My Purchases
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "listings" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
                  <Link
                    to="/add-item"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                  >
                    <i className="ri-add-line mr-2"></i>
                    Add New Item
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {myListings.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square bg-gray-200 relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                        >
                          {item.status}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{item.views} views</span>
                          <span>{item.interested} interested</span>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                            Edit
                          </button>
                          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "purchases" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Purchases</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {myPurchases.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square bg-gray-200">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {item.seller}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-600 font-medium">{item.points} pts</span>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                          Rate & Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
