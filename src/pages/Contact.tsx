import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you! Your message has been logged to the console.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-32 px-4 flex flex-col items-center bg-gray-50">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-black">Contact Us</h1>
      <p className="text-gray-500 mb-16 text-lg">We'd love to hear from you. Send us a message!</p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8 p-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 text-lg">info@xpactventures.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Office</h3>
            <p className="text-gray-600 text-lg">123 Export Avenue, Global Trade Center<br/>City, Country</p>
          </div>
          <div className="pt-4 flex space-x-4">
            <div className="w-10 h-10 bg-[#F3CD00] rounded-full flex items-center justify-center font-bold">In</div>
            <div className="w-10 h-10 bg-[#F3CD00] rounded-full flex items-center justify-center font-bold">X</div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F3CD00] focus:ring-2 focus:ring-[#F3CD00] outline-none transition-all"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F3CD00] focus:ring-2 focus:ring-[#F3CD00] outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F3CD00] focus:ring-2 focus:ring-[#F3CD00] outline-none transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#F3CD00] text-black font-bold py-4 rounded-xl shadow-lg hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
