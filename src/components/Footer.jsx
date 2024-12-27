// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/" className="hover:text-orange-200">Home</Link>
          <Link to="/about" className="hover:text-orange-200">
            About Us
          </Link>
          <Link to="/feedback" className="hover:text-orange-200">
            Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
