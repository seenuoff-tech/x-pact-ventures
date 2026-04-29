import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[95%] max-w-7xl">
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-md px-4 md:px-8 py-2 md:py-3 rounded-full border border-gray-100 shadow-sm">
          {/* Hamburger Menu - Visible only on mobile */}
          <button 
            onClick={toggleMenu}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu size={20} className="text-gray-800" />
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden sm:flex space-x-6 md:space-x-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({ isActive }) => 
                  `text-[12px] md:text-sm font-semibold transition-colors ${isActive ? 'text-[#F3CD00]' : 'text-gray-800 hover:text-black'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Logo placeholder or Brand Name */}
          <div className="sm:hidden font-black text-[10px] tracking-tighter absolute left-1/2 -translate-x-1/2">
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

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      
      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-xl tracking-tighter">
              X PACT <span className="text-[#F3CD00]">VENTURES</span>
            </span>
            <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-gray-800" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `text-lg font-bold tracking-tight transition-colors ${isActive ? 'text-[#F3CD00]' : 'text-gray-900'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <button className="w-full bg-black text-white font-bold py-4 rounded-2xl uppercase tracking-widest text-xs">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
