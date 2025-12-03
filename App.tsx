import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { Home } from './pages/Home';
import { PrestigeCity } from './pages/PrestigeCity';

function App() {
  return (
    <Router>
      {/* ScrollRestoration ensures page starts at top on navigation */}
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        {/* Added pb-20 md:pb-0 to prevent content from being hidden behind sticky mobile CTA */}
        <main className="flex-grow pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestigecity" element={<PrestigeCity />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </Router>
  );
}

export default App;