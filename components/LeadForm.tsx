import React, { useState } from 'react';
import { addLead } from '../lib/storage';

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    project?: string;
    brochureUrl?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Register for Site Visit", 
  subtitle = "Get Instant Callback & Brochure",
  project = "General Enquiry",
  brochureUrl = "https://drive.google.com/file/d/1Z7qoXnMmLhdRh_gdeVYA7SX7-3yFlJDp/view?usp=sharing"
}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Save to Google Sheet
    await addLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: "Web Form Submission",
        source: "Website Lead Form",
        project: project
    });

    setLoading(false);
    setSubmitted(true);

    // Redirect logic
    setTimeout(() => {
        if (brochureUrl) {
            window.open(brochureUrl, '_blank');
        } else {
            window.location.href = `https://wa.me/918297196454?text=Hi,%20I%20am%20${formData.name}.%20I%20just%20filled%20the%20form%20for%20${project}.`;
        }
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-xl text-center border-t-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your details have been registered.</p>
        <p className="mt-4 text-sm text-gold-600 font-bold animate-pulse">Opening Brochure...</p>
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
            name="name"
            type="text" 
            required 
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
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
              name="phone"
              type="tel" 
              required 
              pattern="[0-9]{10}"
              placeholder="9999999999"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email (Optional)</label>
          <input 
            name="email"
            type="email" 
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Download Brochure & Request Call'}
        </button>

        <p className="text-[10px] text-gray-400 text-center mt-4">
          By submitting this form, you authorize Bollaar Properties to contact you.
        </p>
      </form>
    </div>
  );
};