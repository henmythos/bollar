import React, { useState, useEffect } from 'react';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isProjectPage = hash.includes('prestigecity');

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#/" className="flex flex-col">
            <span className="font-serif text-base md:text-xl font-bold text-brand-900 tracking-tight">
              BOLLAAR <span className="text-gold-600">PROPERTIES</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              RERA No: A02400003455
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#/" className="text-gray-700 hover:text-gold-600 font-medium transition text-sm">Home</a>
            <a href="#/prestigecity" className="text-gray-700 hover:text-gold-600 font-medium transition text-sm">
              Prestige City <span className="text-[10px] bg-gold-500 text-white px-1.5 py-0.5 rounded ml-1">New</span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gold-600 font-medium transition text-sm">Contact</a>
            
            <a 
              href="tel:+919347334431" 
              className="flex items-center gap-2 bg-brand-900 text-white px-4 py-2 rounded hover:bg-gold-600 transition duration-300 shadow-lg text-sm"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
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
            <a 
              href="#/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
            >
              Home
            </a>
            <a 
              href="#/prestigecity" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
            >
              Prestige City Project
            </a>
            <a 
              href="tel:+919347334431"
              className="block px-3 py-3 text-sm font-bold text-gold-600 bg-gray-50 rounded mt-4"
            >
              Call: +91 93473 34431
            </a>
          </div>
        </div>
      )}
    </header>
  );
};