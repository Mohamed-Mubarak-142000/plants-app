"use client";

import React, { useState, useEffect } from "react";
import Logo from "../logo";
import Navbar from "../navbar";
import NavbarActions from "../navbar-actions";
import { ListFilter, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`bg-green-900 lg:py-1 z-50 shadow-xl fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "rounded-bl-[50px] rounded-br-[50px]" : "rounded-none"
      }`}
    >
      <div className="container flex items-center justify-between px-4 lg:px-8">
        <Logo />
        <Navbar className="hidden lg:flex" />
        <NavbarActions />

        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <ListFilter className="cursor-pointer text-white block lg:hidden" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900 lg:hidden">
          <Navbar className="flex flex-col items-start p-4 gap-4" />
        </div>
      )}
    </header>
  );
};

export default Header;
