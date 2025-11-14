import React, { useState } from "react";
import { navLinkBottom } from "../constants";

const NavbarBottom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#ededed]">
      <nav className="w-full flex justify-center items-center py-3 relative">
        <button
          className="flex flex-col justify-center items-center w-14 h-14 bg-gray-200 rounded-lg hover:bg-gray-300 transition md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-8 h-[3px] bg-black rounded-sm transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-black rounded-sm my-[6px] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-black rounded-sm transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex justify-center gap-[40px] py-[6px]">
          {navLinkBottom.map(({ label, href }) => (
            <li
              key={label}
              className="uppercase font-semibold text-[15px] leading-[22px] tracking-[1px]"
            >
              <a
                href={href} 
                className="text-black hover:text-[#f59e0b] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="flex flex-col items-center bg-[#ededed] border-t border-gray-300 py-4 space-y-3 md:hidden animate-slide-down">
          {navLinkBottom.map(({ label, href }) => (
            <li
              key={label}
              className="uppercase font-semibold text-[15px] tracking-[1px]"
            >
              <a
                href={href} 
                className="text-black hover:text-[#f59e0b] transition-colors duration-200"
                onClick={() => setIsOpen(false)} 
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavbarBottom;
