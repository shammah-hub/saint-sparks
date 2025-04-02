import React from 'react'
import ContactForm from '@/app/components/contactForm'
import Image from "next/image";


const services = [
  {
    image: "/bezier.svg",
    title: 'Digital & Tech Solutions',
    description: 'We build high-quality, innovative software, platforms, and AI-driven tools that redefine industries with ethical and transformational solutions.'
  },
  {
    image: "/bezier.svg",
    title: 'Innovation in Food, Agriculture & Real Estate',
    description: 'We bring sustainable, ethical, and impactful solutions to food production, farming, and real estate.'
  },
  {
    image: "/bezier.svg",
    title: 'Finance, Business, & Marketplace Restructuring',
    description: 'Saint\'s Sparks is committed to reshaping economies by establishing business structures, ethical financial models, and innovative economic solutions.'
  },
  {
    image: "/bezier.svg",
    title: 'Training for Entrepreneurs & Creatives',
    description: 'We equip the next generation of tech leaders, business innovators, and culture shapers through mentorship, discipleship, and skill development.'
  }
]

function Page() {
  return (
    <>
      <section className="w-full h-[60vh] bg-[url('/abt.svg')] bg-cover bg-center">
      </section>

      {/* what we do */}
      <section className='p-6 md:p-[120px] min-h-screen'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
          <h3 className='text-3xl md:text-[56px] leading-tight text-center md:text-left mb-6 md:mb-0'>
            What We<br /> Specialize In
          </h3>
          <p className='w-full md:w-[588px] text-gray-600 text-center md:text-left'>
            From web and mobile apps to enterprise software and AI-powered systems, 
            we bring your ideas to life with cutting-edge technology and expert execution.
          </p>
        </div>

        {/* four divs */}
        <div className="flex flex-wrap justify-center md:justify-between gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[250px] max-w-[300px] p-6 text-center bg-white rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>      
      </section>

      {/* Our Mission */}
      <section className="relative w-full px-4 py-16 flex justify-center items-center"></section>
        <div className="relative bg-[#003366] text-white rounded-lg p-6 md:p-10 max-w-5xl w-full overflow-hidden">
          {/* Background design elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320" 
              className="absolute top-0 left-0 w-full"
            >
              <path 
                fill="#ffffff" 
                fillOpacity="0.1" 
                d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,154.7C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Quote icon */}
          <div className="absolute top-4 right-4 text-6xl text-white/20 select-none z-0">
    
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl bg-white inline-block rounded-2xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
              To represent the culture of heaven in every industry we touch, ensuring that our 
              solutions are built with integrity, wisdom, and kingdom impact. We raise leaders, 
              entrepreneurs, and innovators who will carry the presence of God into work, 
              business, and ministry, creating lasting transformation.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              ←
            </button>
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              →
            </button>
          </div>
        </div>

      <ContactForm />
      </>
  )
}

export default Page