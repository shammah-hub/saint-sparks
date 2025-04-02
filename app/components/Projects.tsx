import React from 'react';
import Image from "next/image";


function Projects() {
  return (
    <>
      {/* Featured projects */}
      <section className="p-6 md:p-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row px-4 md:px-[24px] justify-between mb-10">
            {/* Left side - Featured Projects header */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold text-[#104072]">Featured Projects</h2>
            </div>

            {/* Right side - Projects description */}
            <div className="w-full md:w-[588px]">
              <p className="text-base md:text-lg">
                From web and mobile apps to enterprise software and AI-powered systems, we bring your ideas to life with cutting-edge technology and expert execution.
              </p>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {/* Project 1 - Easypedia Global */}
            <div className="mb-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                <Image src="/place.svg" width={600} height={400} alt="Easypedia Global" className="w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#104072] mb-3">Easypedia Global</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">WEBSITE</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">BUSINESS DEVELOPMENT</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">AGRICULTURE</span>
              </div>
              <a href="#" className="text-[#104072] font-medium flex items-center text-sm md:text-base">
                View project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Project 2 - Revi AI */}
            <div className="mb-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                <Image src="/image.svg" width={600} height={400} alt="Revi AI" className="w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#104072] mb-3">Revi AI</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">WEBSITE</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">BUSINESS DEVELOPMENT</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">AGRICULTURE</span>
              </div>
              <a href="#" className="text-[#104072] font-medium flex items-center text-sm md:text-base">
                View project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Project 3 - Gear Up */}
            <div className="mb-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                <Image src="/place1.svg" width={600} height={400} alt="Gear Up" className="w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#104072] mb-3">Gear Up</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">WEBSITE</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">BUSINESS DEVELOPMENT</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">AGRICULTURE</span>
              </div>
              <a href="#" className="text-[#104072] font-medium flex items-center text-sm md:text-base">
                View project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Project 4 - Talim */}
            <div className="mb-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                <Image src="/place2.svg" width={600} height={400} alt="Talim" className="w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#104072] mb-3">Talim</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">WEBSITE</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">BUSINESS DEVELOPMENT</span>
                <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs md:text-sm">AGRICULTURE</span>
              </div>
              <a href="#" className="text-[#104072] font-medium flex items-center text-sm md:text-base">
                View project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* View All Projects button */}
          <div className="flex justify-center mt-10">
            <a href="#" className="bg-[#104072] text-white px-6 py-3 rounded-full flex items-center text-sm md:text-base">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;