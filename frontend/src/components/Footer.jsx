// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-emerald-100 py-10 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
        {/* Company Info */}
        <div>
          <h3 className="text-emerald-700 font-semibold mb-3">ReWear</h3>
          <p>
            Promoting sustainable fashion through community-driven clothing
            exchanges.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-emerald-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-item" className="hover:text-emerald-600">
                List Item
              </Link>
            </li>
            <li>
              <Link to="/items" className="hover:text-emerald-600">
                Browse Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-emerald-600">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/info#terms" className="hover:text-emerald-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/info#privacy" className="hover:text-emerald-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/info#contact" className="hover:text-emerald-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Stay Connected</h4>
          <p className="mb-2">Join our mailing list for updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 rounded-r-lg hover:bg-emerald-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} ReWear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;