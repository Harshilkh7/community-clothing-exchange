"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Header = ({ isAuthenticated = false, userPoints = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const navigate = useNavigate()

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-2">
              <i className="ri-recycle-line text-2xl text-emerald-600"></i>
            </div>
            <span className="text-2xl font-bold text-white">ReWear</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-emerald-200 transition-colors font-medium">
              Home
            </Link>
            <Link to="/browse" className="text-white hover:text-emerald-200 transition-colors font-medium">
              Browse Items
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-emerald-200 transition-colors font-medium">
                  Dashboard
                </Link>
                <Link
                  to="/add-item"
                  className="bg-white text-emerald-600 px-4 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors"
                >
                  List Item
                </Link>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {userPoints} Points
                  </div>
                  <div className="relative">
                    <button className="text-white hover:text-emerald-200 transition-colors">
                      <i className="ri-notification-line text-xl"></i>
                      {notifications > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {notifications}
                        </span>
                      )}
                    </button>
                  </div>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    <i className="ri-logout-box-line text-xl"></i>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:text-emerald-200 transition-colors font-medium">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-emerald-600 px-4 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-emerald-200 transition-colors"
          >
            <i className={`ri-${isMenuOpen ? "close" : "menu"}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-emerald-200 transition-colors font-medium">
                Home
              </Link>
              <Link to="/browse" className="text-white hover:text-emerald-200 transition-colors font-medium">
                Browse Items
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    Dashboard
                  </Link>
                  <Link to="/add-item" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    List Item
                  </Link>
                  <div className="text-white font-medium">Points: {userPoints}</div>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    Login
                  </Link>
                  <Link to="/register" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
