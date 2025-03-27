import React from 'react';
import { LuMail, LuPhone } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-[#104072] text-white py-16 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Logo and description */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img src="/logo.png" className="w-[70px] h-[70px]" alt="Logo" />
            <p className="text-gray-300 max-w-xs md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Fermentum suspendisse non amet magna fermentum. Gravida est amet erat natoque quis vitae. Nisl ac condimentum mattis et.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" className="hover:text-gray-300 transition-colors text-lg">About</a>
            <a href="#services" className="hover:text-gray-300 transition-colors text-lg">Services</a>
            <a href="#blog" className="hover:text-gray-300 transition-colors text-lg">Blog</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors text-lg">Contact</a>
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
              {['#instagram', '#twitter', '#facebook', '#linkedin'].map((link, index) => (
                <a key={index} href={link} aria-label={link} className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                  {index === 1 ? <FaXTwitter /> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/></svg>}
                </a>
              ))}
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