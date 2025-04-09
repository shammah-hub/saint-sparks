"use client";

import { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

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
    <nav className="bg-white p-4 fixed left-0 top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold">
          <Image 
            src="/logo-black.png" 
            width={100} 
            height={100} 
            className="w-[120px] h-[100px]" 
            alt="Logo" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-[#104071] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoClose size={24} /> // Close icon
          ) : (
            <FaBars size={24} /> // Hamburger icon
          )}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative text-xl font-medium transition-all duration-300 ease-in-out ${
                  pathname === link.path
                    ? "text-blue-700"
                    : "text-[#104071] hover:text-blue-500"
                }`}
              >
                {link.name}
                {/* Underline effect */}
                <span
                  className={`absolute bg-blue-700 transition-all duration-300 ease-in-out ${
                    pathname === link.path ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <button className="flex items-center gap-3 py-3 px-6 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Start Project <BsArrowRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Updated with gray backgrounds */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-4 bg-white p-4 rounded-lg shadow-md">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`block text-lg font-normal transition-all duration-300 ease-in-out p-2 rounded ${
                  pathname === link.path
                    ? "text-[#104071] bg-gray-200" // Active state with gray background
                    : "text-[#104071] hover:bg-gray-100" // Hover state with light gray
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Start Project <BsArrowRight />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}