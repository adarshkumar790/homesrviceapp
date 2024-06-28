"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_87911vl', 'template_6djdx4j', form.current, {
        publicKey: 'rxRMEO4oVrVEj_O-b',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="mt-4 md:mt-16 mb-4">
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg">
    <div className="mb-4">
      <label htmlFor="user_name" className="block mb-1">Name</label>
      <input type="text" id="user_name" name="name" 
      className="w-full px-3 py-2 border rounded-md " placeholder="Enter your name" />
    </div>
    <div className="mb-4">
      <label htmlFor="user_email" className="block mb-1">Email</label>
      <input type="email" id="user_email" name="email" 
      className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
      <label htmlFor="user_email" className="block mb-1">Phone Number</label>
      <input type="number" id="user_phone" name="contact" 
      className="w-full px-3 py-2 border rounded-md"  placeholder="Enter your phone number" />
    </div>
    <div className="mb-4">
      <label htmlFor="user_address" className="block mb-1">Address</label>
      <input type="text" id="user_address" name="address" className="w-full px-3 py-2 border rounded-md"
      placeholder="Enter your address" />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block mb-1">Diseases/Problems</label>
      <textarea id="message" name="message" rows="4"
       className="w-full px-3 py-2 border rounded-md" placeholder="Enter Problems"></textarea>
    </div>
    
    <button type="submit" className="bg-green-400 text-white py-2 px-4 rounded-md">Send</button>
  </form>
  </div>

  );
};

export default ContactUs;
