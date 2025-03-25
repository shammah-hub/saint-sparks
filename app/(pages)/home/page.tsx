"use client"
import FAQ from "@/app/components/FAQ";
import Projects from "@/app/components/Projects";
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";



function Page() {

   
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do Saint Sparks Innovations provide?",
      answer: "Saint Sparks Innovations provides a range of innovative technology solutions including software development, digital transformation consulting, cloud migration services, and custom application development tailored to meet the specific needs of businesses across various industries."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    }
  ];

  


  return (
    <>
      <section className="flex p-24 text-white bg-[#104071] bg-[url('/grid.svg')] bg-cover bg-center h-[850px] justify-center items-center gap-10">
        {/* Left Content */}
        <div className=" h-[583px] w-[741px] mt-[200px]">
          <h1 className="text-[55px]">
            Building Innovative & Scalable Tech Solutions that Drive Growth
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            Saint's Sparks is a kingdom-driven innovation hub dedicated to excellence, creativity, and transformation across multiple industries. 
          </p>
          <div className="flex gap-2 mt-6">
            <button className="py-4 px-6 rounded-3xl bg-blue-400">Start Project</button>
            <button className="py-4 px-6 border rounded-3xl">Contact Us</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-[160px] w-[673px] h-[840px]">
          <img src="/man.svg" alt="Man" className="h-auto w-auto" />
        </div>
      </section>

      {/* Our Service section */}
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



      {/* Feautured projects */}
      <Projects/>



{/* Testimonials Section */}
<section className="py-24 px-6 md:px-8 lg:px-20 bg-white">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between mb-16">
      {/* Left side - Testimonials heading */}
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-5xl font-bold text-[#104072]">Testimonials</h2>
      </div>
      
      {/* Right side - Testimonials description */}
      <div className="w-full md:w-1/2">
        <p className="text-lg text-gray-800">
          Trusted by clients for delivering expert execution and digital-driven results.
        </p>
      </div>
    </div>

    {/* Testimonial Card */}
    <div className="flex flex-col md:flex-row gap-10">
      {/* Testimonial Image */}
      <div className="w-full md:w-1/2 lg:w-5/12">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/frame.svg" 
            alt="Testimonial" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="w-full md:w-1/2 lg:w-6/12">
        {/* Star Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            "Lorem ipsum dolor sit amet consectetur. Fermentum suspendisse non amet magna fermentum. Gravida est amet erat natoque quis vitae. Nisl ac condimentum mattis et. Mauris sit consectetur et et magna vestibulum diam quisque mollis.
          </p>
          <p className="text-gray-700">
            Gravida est amet erat natoque quis vitae. Mauris sit consectetur et et magna vestibulum diam quisque mollis."
          </p>
        </div>

        {/* Client Info */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Jolade Marvin</h3>
            <p className="text-blue-400">Founder/CEO, Naijakets</p>
          </div>

          {/* Company Logo */}
          <div>
            <img src="/api/placeholder/120/40" alt="Webflow" className="h-8" />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center mt-10">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex gap-2 mx-4">
            <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Contact Form Section */}
<section className="py-16 px-4 md:px-8 lg:px-20 bg-white border border-gray-200 rounded-lg mx-auto my-12 max-w-7xl">

  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between mb-12 md:space-x-12">
      {/* Left side - Heading */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-[#104072] leading-tight">
          Interested in<br />
          working with us
        </h2>
      </div>
      
      {/* Right side - Form introduction */}
      <div className="w-full md:w-1/2">
        <p className="text-lg text-gray-800">
          We'd love to hear from you. Fill out the form below to get started.
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <form className="w-full">
      {/* Name fields - two column */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
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
        
        <div className="w-full md:w-1/2">
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
      <div className="mb-6">
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
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
          Phone number
        </label>
        <div className="flex">
          <div className="relative inline-flex items-center">
            <select className="appearance-none bg-white border border-gray-300 rounded-l-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>NG</option>
              <option>US</option>
              <option>UK</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="+234 (555) 000-0000"
            className="w-full p-3 border border-gray-300 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {/* Message field */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      
      {/* Submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#0F3E71] text-white font-medium py-3 px-8 rounded-full flex items-center hover:bg-[#0c335d] transition-colors"
        >
          Send Message
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</section>


{/* Newsletter Section */}
<section className="py-40 px-4 md:px-8 lg:px-20 bg-[#104071] text-white">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Subscribe to Our<br />
          Newsletter
        </h2>
        <p className="text-lg opacity-90 max-w-md">
          By subscribing you agree with our Privacy Policy and provide consent to receive updates from our company.
        </p>
      </div>
      
      {/* Right side - Subscription form */}
      <div className="w-full md:w-1/2 max-w-md">
        <div className="mb-2">
          <label htmlFor="email" className="block text-xl font-medium mb-2">
            Your Email Address
          </label>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden rounded-xl bg-[#467fba] backdrop-blur-sm">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent px-5 py-4 text-white placeholder-blue-100/70 outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-white text-blue-900 font-medium px-6 py-3 rounded-lg m-2 flex items-center hover:bg-blue-50 transition-colors"
            >
              Submit
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ section */}
<section className='p-[120px] min-h-screen'>
        <div className='flex justify-between items-center mb-12'>
          <h3 className='text-[56px] leading-tight'>Frequently <br/> Asked Questions</h3>
          <p className='w-[588px] text-gray-600'>
          Check out our FAQs below, if you cannot find the answer you’re looking for, kindly contact us.
          </p>
        </div>

        {/* four divs  */}
        <FAQ/>

      </section>


    </>
  );
}

export default Page;