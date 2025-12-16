import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-900 text-gray-300 py-12 border-t border-gray-800 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl text-white mb-4 font-bold">Bollaar Properties</h3>
            <p className="text-xs leading-relaxed mb-4 text-gray-400">
              Hyderabad's most trusted real estate advisory. Guiding over 1200+ happy families to their dream homes with transparency and expertise.
            </p>
            <p className="text-xs font-semibold text-gold-500 mb-4">
              RERA Authorized: A02400003455
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#/" className="hover:text-gold-500 transition">Home Page</a></li>
              <li><a href="#/prestigecity" className="hover:text-gold-500 transition">The Prestige City Hyderabad</a></li>
              <li><a href="#/godrej-rajendranagar" className="hover:text-gold-500 transition">Godrej Regal Pavilion (New)</a></li>
              <li><a href="#/prestigecity#pricing" className="hover:text-gold-500 transition">Price List</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition">Contact Us</a></li>
              <li><a href="#/admin/login" className="text-gray-500 hover:text-gold-500 transition">Admin Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-gray-400">Authorized Sales Partner</p>
              <p className="text-white font-bold text-base">+91 82971 96454</p>
              <p className="text-xs text-gray-400">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-[10px] text-center text-gray-500 leading-relaxed">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This website is operated by an Authorized Channel Partner (Bollaar Properties, RERA: A02400003455). 
            The content provided here is for information purposes only and does not constitute an offer to avail any service. 
            Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. 
            Images used are for representation purposes only. The official website of the developer may contain the latest information.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Bollaar Properties. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};