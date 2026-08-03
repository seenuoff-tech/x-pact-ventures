import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "44e1cef1-eff8-470a-913c-feda2014350a",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage("Your data submitted successfully");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-32 px-4 flex flex-col items-center bg-gray-50 font-sans">
      <h1 className="text-5xl font-black font-sans tracking-wider mb-4 text-black uppercase">Contact Us</h1>
      <p className="text-gray-500 mb-16 text-lg">We'd love to hear from you. Send us a message!</p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8 p-8">
          <div>
            <h3 className="text-xl font-black font-sans tracking-wider uppercase mb-2">Email Us</h3>
            <p className="text-gray-600 text-lg font-sans">support@xpactventures.com</p>
          </div>
          <div>
            <h3 className="text-xl font-black font-sans tracking-wider uppercase mb-2">Office</h3>
            <p className="text-gray-600 text-sm font-sans leading-relaxed">
              X PACT VENTURES PRIVATE LIMITED <br />
              4/203/A WARD 4 WEST STREET, KADANERI, <br />
              AYAN KARISALKULAM, <br />
              VIRUDHUNAGAR 626149 <br />
              TAMIL NADU, <br />
              INDIA
            </p>
          </div>
          <div className="pt-4 flex space-x-4">
            <a href="https://www.linkedin.com/company/x-pact-ventures-private-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#F3CD00] rounded-full flex items-center justify-center font-bold text-black transition-transform hover:scale-110">In</a>
            <a href="https://x.com/XPACTVENTURES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#F3CD00] rounded-full flex items-center justify-center font-bold text-black transition-transform hover:scale-110">X</a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-black font-sans text-gray-700 mb-2 uppercase tracking-wider">
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
              <label htmlFor="email" className="block text-sm font-black font-sans text-gray-700 mb-2 uppercase tracking-wider">
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
              <label htmlFor="message" className="block text-sm font-black font-sans text-gray-700 mb-2 uppercase tracking-wider">
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
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#F3CD00] text-black font-black font-sans uppercase tracking-wider py-4 rounded-xl shadow-lg hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-xl text-center font-bold ${submitMessage.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
