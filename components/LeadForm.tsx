import React, { useState } from 'react';

export const LeadForm: React.FC<{ title?: string, subtitle?: string }> = ({ 
  title = "Register for Site Visit", 
  subtitle = "Get Instant Callback & Brochure" 
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
        // In a real app, this would send data to a backend
        // For now, redirect to WhatsApp as a fallback lead capture
        window.location.href = "https://wa.me/919347334431?text=Hi,%20I%20just%20filled%20the%20form%20on%20your%20website.";
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-xl text-center border-t-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Our expert will contact you shortly.</p>
        <p className="mt-4 text-sm text-gray-500">Redirecting to WhatsApp...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-gold-500 relative z-20">
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
          <input 
            type="text" 
            required 
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-gray-500 text-sm">
              +91
            </span>
            <input 
              type="tel" 
              required 
              pattern="[0-9]{10}"
              placeholder="9999999999"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email (Optional)</label>
          <input 
            type="email" 
            placeholder="name@example.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1"
        >
          Request Call Back
        </button>

        <p className="text-[10px] text-gray-400 text-center mt-4">
          By submitting this form, you authorize Bollaar Properties to contact you via Call/SMS/WhatsApp.
        </p>
      </form>
    </div>
  );
};