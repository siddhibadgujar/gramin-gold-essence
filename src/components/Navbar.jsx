import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3E8E41] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo + Brand */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-32 w-32 md:h-36 md:w-36 object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-3xl md:text-4xl font-extrabold text-white font-serif tracking-wide transition-transform duration-300 hover:scale-105">Gramin</span>
              <span className="text-xl md:text-2xl font-semibold text-[#FFD700] tracking-wider">Gold Essence</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-medium text-white">
            {["Home","About","Products","Industries","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2"
            >
              <svg className="h-8 w-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3E8E41] px-4 pt-2 pb-4 space-y-2 text-white animate-fadeIn">
          {["Home","About","Products","Industries","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-yellow-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}