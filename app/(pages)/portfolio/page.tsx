import React from 'react'
import ContactForm from '@/app/components/ContactForm'
import Projects from '@/app/components/Projects'


function page() {
  return (
    <div>
      <section className="w-full h-[60vh] bg-[url('/contact.svg')] bg-cover bg-center">
      </section>
      <Projects />
      <ContactForm/>

    </div>
  )
}

export default page
