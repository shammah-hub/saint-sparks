"use client";

import { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
<nav className=" bg-white p-[15px] fixed left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-full">      
    <div className="container mx-auto px-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          <img src="/logo.png" className="w-[50px] h-[50px]" alt="" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={` text-[18px] hover:text-black ${
                  pathname === link.path ? "border-b-2 border-white text-black" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
         <button className="flex items-center gap-3 py-[16px] px-[24px] rounded-3xl rounded-[50px] text-white bg-[#70BCF3]">
         Start Project <BsArrowRight/>
          </button>
          
        </div>
        
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 bg-blue-500 p-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`block text-white hover:text-gray-300 ${
                  pathname === link.path ? "border-l-4 pl-2 border-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

