import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categoryDetails } from '../data/productsDetails';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(true);
  const [isHoverVisible, setIsHoverVisible] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isDesktopProductOpen, setIsDesktopProductOpen] = useState(false);
  const [isTouchVisible, setIsTouchVisible] = useState(false);
  const location = useLocation();

  const isVisible = isScrollVisible || isHoverVisible || isHeaderHovered || isTouchVisible || isDesktopProductOpen;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 100) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
        setIsTouchVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setIsHoverVisible(true);
      } else {
        setIsHoverVisible(false);
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches[0].clientY < 100) {
        setIsTouchVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Product" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-0 md:-translate-y-[250%]'}`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className={`flex justify-between items-center px-6 md:px-12 py-3 rounded-full w-full max-w-7xl transition-all duration-300 glass-panel`}>
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <NavLink to="/">
              <img src="/xpackbg.png" alt="X Pact Ventures Logo" className="h-10 md:h-14 object-contain" />
            </NavLink>
          </div>

          {/* Right Side - Navigation and Actions */}
          <div className="flex items-center space-x-4 md:space-x-10">
            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex space-x-6 md:space-x-10 items-center">
              {navLinks.map((link) => (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    onClick={(e) => {
                      if (link.label === "Product") {
                        const isTouchDevice = 
                          (typeof window !== 'undefined' && 'ontouchstart' in window) || 
                          (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
                        
                        if (isTouchDevice || window.innerWidth <= 1024) {
                          e.preventDefault();
                          setIsDesktopProductOpen(!isDesktopProductOpen);
                        }
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center text-sm md:text-base font-bold uppercase tracking-wider transition-colors py-2 ${isActive ? 'text-[#F3CD00]' : 'text-white group-hover:text-[#F3CD00]'}`
                    }
                  >
                    {link.label}
                    {link.label === "Product" && <ChevronDown size={16} className={`ml-1 transition-transform ${isDesktopProductOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />}
                  </NavLink>

                  {/* Dropdown for Product */}
                  {link.label === "Product" && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 z-50 ${isDesktopProductOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="py-2 max-h-[60vh] overflow-y-auto">
                          <NavLink
                            to="/products"
                            onClick={() => setIsDesktopProductOpen(false)}
                            className={({ isActive }) =>
                              `block px-5 py-3 text-sm font-bold uppercase transition-colors border-b border-gray-50 ${
                                isActive && location.pathname === '/products' ? 'bg-gray-50 text-[#F3CD00]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#F3CD00]'
                              }`
                            }
                          >
                            All Products
                          </NavLink>
                          {categoryDetails.map((category) => (
                            <NavLink
                              key={category.categoryId}
                              to={`/products/${category.categoryId}`}
                                className={({ isActive }) =>
                                  `block px-5 py-3 text-sm font-bold uppercase transition-colors border-b border-gray-50 last:border-0 ${
                                    isActive ? 'bg-gray-50 text-[#F3CD00]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#F3CD00]'
                                  }`
                                }
                                onClick={() => setIsDesktopProductOpen(false)}
                              >
                              {category.title}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Hamburger Menu - Visible only on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu size={20} className="text-white" />
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
              <img src="/xpackbg.png" alt="X Pact Ventures Logo" className="h-16 object-contain" />
            </NavLink>
            <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-gray-800" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.to} className="flex flex-col">
                {link.label === "Product" ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                      className={`flex items-center justify-between text-lg font-bold tracking-tight transition-colors w-full text-left ${location.pathname.startsWith('/products') ? 'text-[#F3CD00]' : 'text-gray-900'}`}
                    >
                      {link.label}
                      <ChevronDown size={20} className={`transform transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Submenu */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 overflow-y-auto max-h-[400px]">
                        <NavLink
                          to="/products"
                          onClick={toggleMenu}
                          className={({ isActive }) => `text-sm font-bold uppercase transition-colors ${isActive && location.pathname === '/products' ? 'text-[#F3CD00]' : 'text-gray-600 hover:text-[#F3CD00]'}`}
                        >
                          All Products
                        </NavLink>
                        {categoryDetails.map((category) => (
                          <NavLink
                            key={category.categoryId}
                            to={`/products/${category.categoryId}`}
                            onClick={toggleMenu}
                            className={({ isActive }) => `text-sm font-bold uppercase transition-colors ${isActive ? 'text-[#F3CD00]' : 'text-gray-600 hover:text-[#F3CD00]'}`}
                          >
                            {category.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-lg font-bold tracking-tight transition-colors ${isActive ? 'text-[#F3CD00]' : 'text-gray-900 hover:text-[#F3CD00]'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

        </div>
      </div>
    </>
  );
};

export default Header;
