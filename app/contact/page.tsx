import Avatar from '@/components/avatar'
import ContactForm from '@/components/forms/contact-form'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="w-full h-auto relative">
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="flex items-center justify-center my-12">
          <Avatar />
        </div>
        <div className="text-center px-4">
          <p className="text-primary font-bold text-[2rem] flex flex-col items-center justify-center">
            <span> Thanks for taking the time to reach out.</span>
            <span> How can I help you today?</span>
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage