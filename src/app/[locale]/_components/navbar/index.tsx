import React from "react";

import Link from "../link";

export function Navbar({
  links,
  className = "",
}: {
  links: { id: number; title: string; url: string }[];
  className?: string;
}) {
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
}

export default Navbar;
