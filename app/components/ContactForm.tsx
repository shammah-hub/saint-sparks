import React from 'react';

function ContactForm() {
  return (
    <>
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
                We'd love to hear from you. Fill out the form below to get started.
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
  );
}

export default ContactForm;
