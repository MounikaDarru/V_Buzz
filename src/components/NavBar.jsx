import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className="fixed top-12 z-50 w-full font-poppins">
      <div className="mx-4 sm:mx-[50px] md:mx-[150px] bg-white rounded-xl shadow-custom-nav px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold text-primary hover:text-[#DA2824] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-end items-center gap-4">
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
        <div className="absolute top-28 left-4 right-4 sm:left-[30px] sm:right-[30px] bg-white rounded-xl shadow-custom-nav px-4 py-4 space-y-3 font-poppins">
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
