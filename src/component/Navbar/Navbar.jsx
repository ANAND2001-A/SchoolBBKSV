import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/bblogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="College logo"
            className="h-20 w-auto mr-2 object-contain"
          />
          <div className="text-[#4FDBF6] text-xl font-bold">
            बाबा बी.के. स्मारक विद्यालय
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-black">Home</a>
          <a href="/about" className="text-black">About</a>
          <a href="#courses" className="text-black">Courses</a>
          <a href="/contact" className="text-black">Contact</a>
          <Link to="/login">
          <button className="text-white bg-[#4F79F6] py-2 px-3 rounded-full">
            Enroll Now
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <a href="/" className="block text-black mb-2">Home</a>
          <a href="/about" className="block text-black mb-2">About</a>
          <a href="#courses" className="block text-black mb-2">Courses</a>
          <a href="/contact" className="block text-black mb-2">Contact</a>
          <Link to="/login">
            <button className="w-full text-white bg-[#4F79F6] py-2 px-3 rounded-full">
              Enroll Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
