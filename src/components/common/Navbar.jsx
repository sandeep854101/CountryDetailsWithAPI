import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

const Navbar = ({ setInput, input, page, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <Link to="/" onClick={() => { setInput(''); input(''); }}>
                Logo
              </Link>
            </h1>
          </div>

          {/* Search Bar (Hidden on small screens) */}
          <div className="hidden sm:block flex-1 max-w-xs">
            <input
              onChange={(e) => { setInput(e.target.value); setPage(1); }}
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg p-2 text-center w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="block sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/" onClick={() => { setInput(''); input(''); }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-400"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-400"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-400"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Login Button */}
          <div className="hidden sm:block ml-4">
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu (visible only when menuOpen is true) */}
        {menuOpen && (
          <div className="sm:hidden mt-2">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/" onClick={() => { setInput(''); input(''); setMenuOpen(false); }}
                  className="block text-lg text-white hover:text-blue-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg text-white hover:text-blue-400"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg text-white hover:text-blue-400"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <button
                  className="w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
