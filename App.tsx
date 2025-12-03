import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { PrestigeCity } from './pages/PrestigeCity';

function App() {
  const [hash, setHash] = useState(window.location.hash || '#/');

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
        <StickyCTA />
      </div>
    </>
  );
}

export default App;