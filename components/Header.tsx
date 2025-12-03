import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isProjectPage = location.pathname.includes('prestigecity');

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold text-brand-900 tracking-tight">
              BOLLAAR <span className="text-gold-600">PROPERTIES</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              RERA No: A02400003455
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gold-600 font-medium transition">Home</Link>
            <Link to="/prestigecity" className="text-gray-700 hover:text-gold-600 font-medium transition">
              Prestige City <span className="text-xs bg-gold-500 text-white px-1.5 py-0.5 rounded ml-1">New</span>
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-gold-600 font-medium transition">Contact</a>
            
            <a 
              href="tel:+919347334431" 
              className="flex items-center gap-2 bg-brand-900 text-white px-5 py-2.5 rounded hover:bg-gold-600 transition duration-300 shadow-lg"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>+91 93473 34431</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-700 focus:outline-none"
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded"
            >
              Home
            </Link>
            <Link 
              to="/prestigecity" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded"
            >
              Prestige City Project
            </Link>
            <a 
              href="tel:+919347334431"
              className="block px-3 py-3 text-base font-bold text-gold-600 bg-gray-50 rounded mt-4"
            >
              Call: +91 93473 34431
            </a>
          </div>
        </div>
      )}
    </header>
  );
};