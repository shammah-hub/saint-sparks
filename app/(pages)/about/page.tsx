import React from 'react'
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

  const values = [
    {
      title: "Identity",
      description: "We embrace our divine identity as sons and daughters of God, living with purpose and passion to impact the world. We encourage individuals to discover and mature in their unique gifts, callings, and anointings."
    },
    {
      title: "Creativity",
      description: "We develop innovative solutions, ideas, expressions, and disruptive technologies that bring lasting change. Our goal is to transcend traditional models of mindsets, storytelling, and industry impact."
    },
    {
      title: "Service",
      description: "We integrate excellence and ministry in all that we do, serving as leaders in business, tech, food, finance, and beyond. We manifest hospitality, generosity, and servant leadership, ensuring restoration and hope in every industry."
    },
    {
      title: "Nobility",
      description: "We embody integrity, humility, and lifelong learning, seeing character growth as an act of worship. We build foundations of spiritual disciplines, honoring unity and faith in every industry."
    }
  ];


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
      className="flex-1 min-w-[250px] max-w-[300px] p-6 text-left bg-white rounded-xl shadow transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-[#104072] text-white  rounded-full flex items-center justify-center mb-4">
        <Image 
          src={service.image} 
          width={200}
          height={200}
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
      <section className="relative min-h-[600px] sm:min-h-[600px] py-8 sm:py-16 px-4 max-w-6xl mx-auto">
  
  {/* Blue Container */}
  <div className="flex flex-col justify-center items-center bg-[#104072] text-white h-auto sm:h-[350px] p-4 sm:p-8 pt-12 sm:pt-16 rounded-3xl sm:rounded-4xl rounded-tl-[80px] sm:rounded-tl-[161px] relative">
    {/* Quotation Mark */}
    <div className="flex justify-center absolute top-0 right-4 sm:right-30 bg-white text-[#104072] rounded-br-xl rounded-bl-xl w-16 sm:w-20 p-3 sm:p-4 text-3xl sm:text-4xl font-serif">
     &ldquo;&rdquo;
    </div>
    <div className="absolute top-0 left-0 bg-white text-[#104072] font-bold rounded-br-3xl sm:rounded-br-4xl p-2 sm:p-4">
     <h3 className="text-2xl sm:text-4xl">OUR MISSION</h3>
    </div>
    <div className="absolute top-14 sm:top-18 left-0 bg-[#104072] text-[#104072] rounded-tl-3xl sm:rounded-tl-4xl p-4 sm:text-4xl font-serif">
     <h3>OU </h3>
    </div>
    
    {/* Mission Text */}
    <p className="text-base sm:text-lg max-w-3xl mb-8 mt-16 sm:mt-0 px-4 sm:px-0">
      To represent the culture of heaven in every industry we touch, ensuring that our 
      solutions are built with integrity, wisdom, and kingdom impact. We raise leaders, 
      entrepreneurs, and innovators who will carry the presence of God into work, 
      business, and ministry, creating lasting transformation.
    </p>
   
  </div>
  {/* button prev and next */}
  <div className="flex my-8 sm:my-12 justify-center sm:justify-end gap-4">
      <button className="bg-transparent border border-[#104072] rounded-full p-2 hover:bg-white hover:text-blue-900 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="bg-transparent border border-[#104072] rounded-full p-2 hover:bg-white hover:text-blue-900 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
</section>


        {/* core values */}
        <section className="p-24 bg-[#104072] min-h-[500px] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold mb-3 text-[#104072]">{value.title}</h3>
              <p className="text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Form Section */}
      <section className=" py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-20 bg-white border border-gray-200 rounded-lg mx-auto my-8 sm:my-12 max-w-7xl">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8 sm:mb-12 md:space-x-12">
            {/* Left side - Heading */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#104072] leading-tight">
                Interested in<br />
                working with us
              </h2>
            </div>

            {/* Right side - Form introduction */}
            <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg text-gray-800">
               We&apos;d love to hear from you. Fill out the form below to get started.
            </p>
            </div>
          </div>

          

          {/* Contact Form */}
          <form className="w-full">
            {/* Name fields - two column */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-full sm:w-1/2">
                <label htmlFor="firstName" className="block text-gray-800 font-medium mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="lastName" className="block text-gray-800 font-medium mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone field with country selector */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                Phone number
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative inline-flex items-center mb-4 sm:mb-0 sm:mr-2">
                  <select className="appearance-none bg-white border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>NG</option>
                    <option>US</option>
                    <option>UK</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+234 (555) 000-0000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="mb-6 sm:mb-8">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#0F3E71] text-white font-medium py-3 px-6 sm:px-8 rounded-full flex items-center hover:bg-[#0c335d] transition-colors"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
      </>
  )
}

export default Page