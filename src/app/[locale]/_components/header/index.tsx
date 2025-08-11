// components/header.tsx
"use client";
import React, { useEffect, useState } from "react";
import Logo from "../logo";
import Navbar from "./navbar-link";
import { ListFilter, SearchIcon, ShoppingCart, X } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import LanguageSwitcher from "./language-switch";

const Header = ({
  links,
  NavbarActions,
}: {
  links: { id: number; title: string; url: string }[];
  NavbarActions: React.ReactNode;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`bg-green-900  z-50 shadow-xl fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "rounded-bl-[50px] rounded-br-[50px]" : ""
      }`}
    >
      <div className="container flex items-center justify-between px-4 lg:px-8">
        <Logo />
        <Navbar links={links} className="hidden lg:flex" />
        <div className="flex items-center gap-4">
          {NavbarActions}
          <SearchIcon className="cursor-pointer text-white" />
          <CartDrawer
            button={<ShoppingCart className="cursor-pointer text-white" />}
          />
          <LanguageSwitcher />
        </div>

        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <ListFilter size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900 lg:hidden">
          <Navbar
            links={links}
            className="flex flex-col items-start p-4 gap-4"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
