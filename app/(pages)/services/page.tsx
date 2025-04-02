import ContactForm from '@/app/components/contactForm'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
      {/* image hero section */}
      <section className="w-full h-[60vh] bg-[url('/services.svg')] bg-cover bg-center">
      </section>

      <section className="p-6 md:p-24 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row px-4 md:px-[24px] justify-between mb-10">
            {/* Left side - Our Services header */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold text-[#104072]">Our Services</h2>
            </div>

            {/* Right side - Services description */}
            <div className="w-full md:w-[588px]">
              <p className="text-base md:text-lg">
                From web and mobile apps to enterprise software and AI-powered systems, we bring your ideas to life with cutting-edge technology and expert execution.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
            {/* Product Design */}
            <div className="shadow rounded-lg p-6 md:p-10">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Image src="/bezier.svg" alt="" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex items-center">
                Product Design
              </h3>
              <p className="mt-4 text-sm md:text-base text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Software Development */}
            <div className="shadow rounded-lg p-6 md:p-10">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Image src="/bezier.svg" alt="" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex items-center">
                Software Development
              </h3>
              <p className="mt-4 text-sm md:text-base text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Mobile App Development */}
            <div className="shadow rounded-lg p-6 md:p-10">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Image src="/bezier.svg" alt="" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex items-center">
                Mobile App Development
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </h3>
              <p className="mt-4 text-sm md:text-base text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="shadow rounded-lg p-6 md:p-10">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Image src="/bezier.svg" alt="" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex items-center">
                Cybersecurity
              </h3>
              <p className="mt-4 text-sm md:text-base text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}

export default page
