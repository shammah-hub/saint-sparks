import ContactForm from '@/app/components/contactForm'
import React from 'react'

function page() {
  return (
    <div>
       <section className="w-full h-[60vh] bg-[url('/contact.svg')] bg-cover bg-center">
      </section>

        <ContactForm/>
    </div>
  )
}

export default page
