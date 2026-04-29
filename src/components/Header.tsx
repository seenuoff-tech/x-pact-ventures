import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md px-8 py-3 rounded-full border border-gray-100 shadow-sm">
        {/* Navigation Links */}
        <nav className="flex space-x-10">
          <NavLink to="/" className="text-sm font-semibold text-gray-800 hover:text-black">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm font-semibold text-gray-800 hover:text-black">
            About
          </NavLink>
          <NavLink to="/products" className="text-sm font-semibold text-gray-800 hover:text-black">
            Products
          </NavLink>
          <NavLink to="/contact" className="text-sm font-semibold text-gray-800 hover:text-black">
            Contact us
          </NavLink>
        </nav>

        {/* Action Button */}
        <div>
          <button className="bg-[#444] text-white text-[11px] font-bold tracking-widest px-8 py-3.5 rounded-full hover:bg-black transition-all shadow-lg uppercase">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
