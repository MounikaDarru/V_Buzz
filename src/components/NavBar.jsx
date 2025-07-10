import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
        {name: "Overview", path: "/services"},
        { name: "Mock Interviews", path: "/services/mock-interviews" },
        { name: "Placement Guarantee Programs", path: "/services/placement-guarantee-programs" },
      ]
    },
    { 
      name: "Login", 
      path: "/login",
      submenu: [
        { name: "Student Login", path: "/login/student" },
        { name: "University Login", path: "/login/university" },
        { name: "Corporate Login", path: "/login/corporate" }
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 5000);
  };

  return (
    <header className={`fixed top-0 z-50 w-full font-poppins transition-all duration-300 ${scrolled ? "bg-white top-0 shadow-md" : ""}`}>
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "mx-0 px-8 rounded-none sm:px-[50px] md:px-[150px] top-0"
            : "mx-4 mx-[50px] md:mx-[100px] lg:mx-[150px] mt-[50px] rounded-xl px-6 sm:px-8 lg:px-12"
        } bg-white shadow-custom-nav flex items-center justify-between h-16`}
      >
        <div className="flex items-center mr-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-4 items-center">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.submenu && handleDropdownEnter(link.name)}
              onMouseLeave={handleDropdownLeave}
            >
              {link.submenu ? (
                <div className="flex items-center cursor-pointer">
                  <span className="text-xs font-semibold text-primary transition">
                    {link.name}
                  </span>
                  <ChevronDown size={16} className="text-primary" />
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-xs font-semibold text-primary transition"
                >
                  {link.name}
                </Link>
              )}

              {link.submenu && activeDropdown === link.name && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-xs text-primary hover:bg-primary/10 hover:text-primary z-50 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex justify-end items-center ml-4">
          <Link
            to="/get-started"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm transition hover:bg-red-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute mt-1 left-[50px] right-[50px] rounded-[10px] bg-white shadow-custom-nav px-4 py-4 space-y-3 font-poppins">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div>
                  <div 
                    className="flex items-center justify-between text-gray-700 font-medium transition cursor-pointer"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  {activeDropdown === link.name && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 font-medium transition"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/get-started"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-primary text-white text-center px-3 py-2 rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;