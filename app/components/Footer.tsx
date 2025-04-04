import React from 'react';
import Link from 'next/link';
import { LuMail, LuPhone } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#104072] text-white py-16 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Logo and description */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Image src="/logo.png" width={200} height={200} className="w-[70px] h-[70px]" alt="Logo" />
            <p className="text-gray-300 max-w-xs md:max-w-sm">
            Saint Sparks Innovations is a digital agency specializing in branding,
             web & software development, UI/UX design, backend solutions, cybersecurity, and digital marketing.
             We craft innovative, secure, and scalable solutions to elevate brands and drive business growth. 
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center space-y-4">
  <Link href="/about">
    <span className="hover:text-gray-300 transition-colors text-lg cursor-pointer">About</span>
  </Link>
  <Link href="/services">
    <span className="hover:text-gray-300 transition-colors text-lg cursor-pointer">Services</span>
  </Link>
  <Link href="/portfolio">
    <span className="hover:text-gray-300 transition-colors text-lg cursor-pointer">Portfolio</span>
  </Link>
  <Link href="/contact">
    <span className="hover:text-gray-300 transition-colors text-lg cursor-pointer">Contact</span>
  </Link>
</div>

          {/* Contact information */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <LuPhone className="w-5 h-5 text-white" />
              <div className="flex flex-col">
                <span>+23470 0000 DON2</span>
                <span>(+23470 0000 2662)</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <LuMail className="w-5 h-5 text-white" />
              <span>saints.sparks@tech.com</span>
            </div>
            
            {/* Social media icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#instagram" aria-label="Instagram" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <ImFacebook2 className="w-5 h-5" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-gray-300">
          <p>© 2025 All rights reserved. Saint Sparks Innovation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;