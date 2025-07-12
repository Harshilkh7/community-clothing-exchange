// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Watch for route changes to recheck localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          ReWear
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-emerald-600 transition">
            Home
          </Link>

          {user && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-emerald-600 transition">
                Dashboard
              </Link>
              <Link to="/add-item" className="text-gray-700 hover:text-emerald-600 transition">
                List Item
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-emerald-600 transition">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 font-medium hover:underline transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-emerald-600 px-4">
            Home
          </Link>

          {user && (
            <>
              <Link to="/dashboard" className="block text-gray-700 hover:text-emerald-600 px-4">
                Dashboard
              </Link>
              <Link to="/add-item" className="block text-gray-700 hover:text-emerald-600 px-4">
                List Item
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link to="/login" className="block text-gray-700 hover:text-emerald-600 px-4">
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-emerald-600 text-white px-4 py-2 rounded-lg mx-4 hover:bg-emerald-700"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block text-red-500 font-medium px-4 py-2 hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
