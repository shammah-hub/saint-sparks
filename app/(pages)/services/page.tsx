import ContactForm from '@/app/components/contactForm'
import React from 'react'

function page() {
  return (
    <>
{/* image hero section */}
<section className="w-full h-[60vh] bg-[url('/services.svg')] bg-cover bg-center">
</section>

       <section className="p-24 bg-white text-gray-800 h-[1046px]">
        <div className="container mx-auto">
          <div className="flex px-[24px] justify-between mb-10">
            {/* Left side - Our Services header */}
            <div className="w-full md:w-1/3 ">
              <h2 className="text-5xl font-bold text-[#104072]">Our Services</h2>
            </div>
            
            {/* Right side - Services description */}
            <div className="w-[588px]">
              <p className="text-lg">
                From web and mobile apps to enterprise software and AI-powered systems, we bring your ideas to life with cutting-edge technology and expert execution.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-10">
            {/* Product Design */}
            <div className="shadow rounded-lg p-20">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <img src="/bezier.svg" alt="" />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 flex items-center">
                Product Design 
                <img src="" alt="" />

              </h3>
              <p className="mt-4 text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Software Development */}
            <div className="shadow rounded-lg p-20">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <img src="/bezier.svg" alt="" />

              </div>
              <h3 className="text-2xl font-medium text-gray-800 flex items-center">
                Software Development
                <img src="" alt="" />

              </h3>
              <p className="mt-4 text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Mobile App Development */}
            <div className="shadow rounded-lg p-20">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <img src="/bezier.svg" alt="" />

              </div>
              <h3 className="text-2xl font-medium text-gray-800 flex items-center">
                Mobile App Development
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </h3>
              <p className="mt-4 text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="shadow rounded-lg p-20">
              <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <img src="/bezier.svg" alt="" />

              </div>
              <h3 className="text-2xl font-medium text-gray-800 flex items-center">
                Cybersecurity
                <img src="/bezier.svg" alt="" />
              </h3>
              <p className="mt-4 text-gray-600">
                We build intuitive, user-friendly web and mobile applications or software tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
    </>
  )
}

export default page
