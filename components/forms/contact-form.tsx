'use client'
import React from 'react'
import { sendEmail } from '@/app/actions/contact'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'


const ContactForm = () => {
  return (
    <form action={sendEmail} className="mt-8 p-4 h-screen min-w-[600px] relative flex flex-col">
        <div className="w-full flex flex-col gap-1 md:flex-row mb-4">
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="name" className="text-secondary text-p4">Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              className="h-auto p-2 text-lg outline-none border border-primary rounded text-lightGray"
          />
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="email" className="text-secondary text-p4">Email</Label>
            <Input 
              type="email" 
              name="email" 
              id="email"
              className="h-auto p-2 text-lg outline-none border border-primary rounded text-lightGray"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="message" className="text-secondary text-p4">Message</Label>
          <textarea 
            name="message" 
            id="message" 
            cols={30} 
            rows={10} 
            className="border border-primary rounded outline-none p-1 text-p4 text-lightGray"
          />
        </div>
        <Button 
          type='submit' 
          className='my-4 mx-auto w-full h-12 border border-primary text-primary hover:bg-[#7510F7] hover:text-white transition-all ease-in-out duration-300'
        >
          Send
        </Button>
      </form>
  )
}

export default ContactForm