import React from "react";
import { ROUTES } from "../conistant/enum";
import Link from "../link";

const Navbar = ({ className = "" }) => {
  const links = [
    { id: 1, title: "Home", url: ROUTES.HOME },
    { id: 2, title: "Plants", url: ROUTES.PLANTS },
    { id: 3, title: "Stands", url: ROUTES.STANDS },
    { id: 3, title: "Categories", url: ROUTES.CATEGORIES },
    { id: 4, title: "Contact", url: ROUTES.CONTACT },
  ];

  return (
    <nav>
      <ul className={`gap-10 ${className}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className="hover:text-primary text-[18px] text-white transition-colors duration-300 ease-in-out"
              href={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
