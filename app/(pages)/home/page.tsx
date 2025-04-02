"use client";
import FAQ from "@/app/components/FAQ";
import Projects from "@/app/components/Projects";
import Image from "next/image";


function Page() {


  return (
    <>
      <section className="flex flex-col md:flex-row p-8 sm:p-12 md:p-16 lg:p-24 text-white bg-[#104071] bg-[url('/grid.svg')] bg-cover bg-center h-auto justify-center items-center gap-10">
  {/* Left Content */}
  <div className="w-full max-w-2xl text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-snug">
      Building Innovative & Scalable Tech Solutions that Drive Growth
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl mt-4">
      Saint Sparks is a kingdom-driven innovation hub dedicated to excellence, creativity, and transformation across multiple industries.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
      <button className="py-4 px-6 rounded-3xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300">
        Start Project
      </button>
      <button className="py-4 px-6 border-2 border-white text-white rounded-3xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
        Contact Us
      </button>
    </div>
  </div>

  {/* Right Image (Hidden on Small Screens) */}
  <div className="hidden md:block md:w-1/2 max-w-lg">
  <Image 
  src="/man.svg" 
  width={500} 
  height={300} 
  alt="Man" 
  className="w-full h-auto" 
/>
  </div>
</section>



      {/* Our Service section */}
      <section className="p-8 lg:p-24 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row px-4 lg:px-[24px] justify-between mb-10">
            {/* Left side - Our Services header */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#104072]">
                Our Services
              </h2>
            </div>

            {/* Right side - Services description */}
            <div className="w-full lg:w-[588px]">
              <p className="text-base lg:text-lg">
                From web and mobile apps to enterprise software and AI-powered
                systems, we bring your ideas to life with cutting-edge
                technology and expert execution.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-10">
            {/* Service Cards */}
            {[
              "Product Design",
              "Software Development",
              "Mobile App Development",
              "Cybersecurity",
            ].map((service, index) => (
              <div
                key={index}
                className="shadow rounded-lg p-10 lg:p-20 text-center lg:text-left"
              >
                <div className="bg-[#104072] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <Image 
                    src="/bezier.svg" 
                    width={100}  // Replace with actual width
                    height={100} // Replace with actual height
                    alt=""
                    className="w-[20px] h-[20px]" 
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-medium text-gray-800">
                  {service}
                </h3>
                <p className="mt-4 text-gray-600">
                  We build intuitive, user-friendly web and mobile applications
                  or software tailored to your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <Projects />

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-8 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            {/* Left side - Testimonials heading */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#104072]">
                Testimonials
              </h2>
            </div>

            {/* Right side - Testimonials description */}
            <div className="w-full md:w-1/2">
              <p className="text-base lg:text-lg text-gray-800">
                Trusted by clients for delivering expert execution and
                digital-driven results.
              </p>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Testimonial Image */}
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/frame.svg"
                  alt="Testimonial"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-1/2 lg:w-6/12">
              {/* Star Rating */}
              <div className="flex mb-4 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div className="mb-8">
                <p className="text-gray-700 mb-6 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur. Fermentum suspendisse
                  non amet magna fermentum. Gravida est amet erat natoque quis
                  vitae. Nisl ac condimentum mattis et. Mauris sit consectetur
                  et et magna vestibulum diam quisque mollis.
                </p>
                <p className="text-gray-700 text-center md:text-left">
                  Gravida est amet erat natoque quis vitae. Mauris sit
                  consectetur et et magna vestibulum diam quisque mollis.
                </p>
              </div>

              {/* Client Info */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                    Jolade Marvin
                  </h3>
                  <p className="text-blue-400">Founder/CEO, Naijakets</p>
                </div>

                {/* Company Logo */}
                <div>
                  <Image
                    src="/webflow.png"
                    alt="Webflow"
                    width={200}
                    height={200}
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-20 bg-white border border-gray-200 rounded-lg mx-auto my-8 sm:my-12 max-w-7xl">
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

      {/* FAQ Section */}
      <section className="p-8 lg:p-[120px]">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <h3 className="text-3xl lg:text-[56px] leading-tight text-center lg:text-left">
            Frequently <br /> Asked Questions
          </h3>
          <p className="w-full lg:w-[588px] text-gray-600 text-center lg:text-left">
            Check out our FAQs below, if you cannot find the answer you’re
            looking for, kindly contact us.
          </p>
        </div>
        <FAQ />
      </section>
    </>
  );
}

export default Page;
