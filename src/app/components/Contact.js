import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 min-h-screen" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>
      <p className="text-lg text-center mb-8">
        Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
      </p>
      <form action="https://getform.io/f/paqgkvya" method="POST" className="flex flex-col space-y-4">
        <label htmlFor="name" className="text-sm font-bold text-gray-600">
          Name
          <input type="text" name="name" id="name" required placeholder="Your Name" 
                 className="w-full p-2 border border-gray-300 rounded mt-1"/>
        </label>
        <label htmlFor="email" className="text-sm font-bold text-gray-600">
          Email
          <input type="email" name="email" id="email" required placeholder="Your Email" 
                 className="w-full p-2 border border-gray-300 rounded mt-1"/>
        </label>
        <label htmlFor="message" className="text-sm font-bold text-gray-600">
          Message
          <textarea name="message" id="message" rows="4" required placeholder="Your Message" 
                    className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
        </label>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
