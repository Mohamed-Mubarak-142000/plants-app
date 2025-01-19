import React, { useState } from "react";
import Logo from "../logo";
import { X } from "lucide-react";

export function CartDrawer({ button }: { button: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={toggleDrawer}>{button}</div>

      <div
        className={`fixed top-0 right-0 h-full w-[500px] rounded-ss-[40px] rounded-bl-[40px] bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center p-4 bg-green-800 rounded-ss-[40px]">
          <Logo />
          <button
            onClick={toggleDrawer}
            className="text-white hover:text-red-500 transition-all duration-150"
            aria-label="Close drawer"
          >
            <X />
          </button>
        </div>
        <div className="p-4">
          <p>Your cart products will appear here.</p>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
