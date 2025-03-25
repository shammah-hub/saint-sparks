import React from 'react'
import { LuMail, LuPhone } from 'react-icons/lu'
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="bg-[#104072] text-white py-24 px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
          <img src="/logo.png" className="w-[70px] h-[70px]" alt="" />
            <p className="text-gray-300 max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Fermentum suspendisse non amet magna fermentum. Gravida est amet erat natoque quis vitae. Nisl ac condimentum mattis et.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-start md:items-center space-y-4">
            <a href="#about" className="hover:text-gray-300 transition-colors text-lg">About</a>
            <a href="#services" className="hover:text-gray-300 transition-colors text-lg">Services</a>
            <a href="#blog" className="hover:text-gray-300 transition-colors text-lg">Blog</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors text-lg">Contact</a>
          </div>

          {/* Contact information */}
          <div className="space-y-6">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#twitter" aria-label="Twitter/X" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <FaXTwitter />
              </a>
              <a href="#facebook" aria-label="Facebook" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
  )
}

export default Footer
