import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { PrestigeCity } from './pages/PrestigeCity';
import { LeadForm } from './components/LeadForm';
import { CloseIcon } from './components/Icons';

function App() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  const [showGlobalModal, setShowGlobalModal] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple routing logic
  let Component = Home;
  
  // Extract path from hash (e.g. #/prestigecity -> /prestigecity)
  const path = hash.replace(/^#/, '').split('?')[0].split('#')[0];
  
  if (path === '/prestigecity') {
    Component = PrestigeCity;
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        {/* Added pb-20 md:pb-0 to prevent content from being hidden behind sticky mobile CTA */}
        <main className="flex-grow pb-20 md:pb-0">
          <Component />
        </main>
        <Footer />
      </div>

      <StickyCTA onEnquireClick={() => setShowGlobalModal(true)} />

      {/* Global Lead Form Modal */}
      {showGlobalModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md">
            <button 
                onClick={() => setShowGlobalModal(false)}
                className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gold-500 transition focus:outline-none"
            >
                <CloseIcon className="w-8 h-8" />
            </button>
            <LeadForm title="Enquire Now" subtitle="Get Instant Callback & Details" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;