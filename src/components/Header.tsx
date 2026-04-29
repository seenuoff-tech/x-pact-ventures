import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[95%] max-w-7xl">
      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md px-4 md:px-8 py-2 md:py-3 rounded-full border border-gray-100 shadow-sm">
        {/* Navigation Links - Hidden on small mobile */}
        <nav className="hidden sm:flex space-x-6 md:space-x-10">
          <NavLink to="/" className="text-[12px] md:text-sm font-semibold text-gray-800 hover:text-black">
            Home
          </NavLink>
          <NavLink to="/about" className="text-[12px] md:text-sm font-semibold text-gray-800 hover:text-black">
            About
          </NavLink>
          <NavLink to="/products" className="text-[12px] md:text-sm font-semibold text-gray-800 hover:text-black">
            Products
          </NavLink>
          <NavLink to="/contact" className="text-[12px] md:text-sm font-semibold text-gray-800 hover:text-black">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Logo placeholder or Brand Name */}
        <div className="sm:hidden font-black text-xs tracking-tighter">
          X PACT <span className="text-[#F3CD00]">VENTURES</span>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#444] text-white text-[9px] md:text-[11px] font-bold tracking-widest px-4 md:px-8 py-2 md:py-3.5 rounded-full hover:bg-black transition-all shadow-lg uppercase">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
