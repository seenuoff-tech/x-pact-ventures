import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Product" },
    { to: "/contact", label: "Shop" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex justify-between items-center bg-white px-6 md:px-12 py-4 border-b border-gray-100 shadow-sm">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <NavLink to="/">
              <img src="/xpack logo.png" alt="X Pact Ventures Logo" className="h-16 md:h-24 object-contain" />
            </NavLink>
          </div>

          {/* Right Side - Navigation and Actions */}
          <div className="flex items-center space-x-4 md:space-x-10">
            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden sm:flex space-x-6 md:space-x-10 items-center">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  className={({ isActive }) => 
                    `text-sm md:text-lg font-semibold transition-colors ${isActive ? 'text-[#F3CD00]' : 'text-gray-800 hover:text-black'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Hamburger Menu - Visible only on mobile */}
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu size={20} className="text-gray-800" />
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
            <NavLink to="/" onClick={toggleMenu}>
              <img src="/xpack logo.png" alt="X Pact Ventures Logo" className="h-16 object-contain" />
            </NavLink>
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

        </div>
      </div>
    </>
  );
};

export default Header;
