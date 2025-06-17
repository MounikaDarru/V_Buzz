// 


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Login", path: "/login" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full font-poppins transition-all duration-300 ${scrolled ? "bg-white top-0 shadow-md" : ""}`}>
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "mx-0 px-8 rounded-none sm:px-[50px] md:px-[150px] top-0"
            : "mx-4 mx-[50px] md:mx-[150px] mt-[50px] rounded-xl px-6 sm:px-8 lg:px-12"
        } bg-white shadow-custom-nav flex items-center justify-between h-16`}
      >
        <div className="flex items-center mr-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-4 item-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs font-semibold text-primary hover:text-[#DA2824] transition"
            >
              {link.name}
            </Link>
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
        <div className="absolute top-16 left-4 right-4 sm:left-[30px] sm:right-[30px] bg-white rounded-xl shadow-custom-nav px-4 py-4 space-y-3 font-poppins">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-[#DA2824] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-started"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-[#DA2824] text-white text-center px-3 py-2 rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
