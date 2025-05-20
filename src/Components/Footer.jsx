import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Roommate Search</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <NavLink to="/termsandcondition" className="hover:text-white text-sm transition">Terms & Conditions</NavLink>
          <NavLink to="/privacypolicy" className="hover:text-white text-sm transition">Privacy Policy</NavLink>
        </div>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
