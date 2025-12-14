import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { PrestigeCity } from './pages/PrestigeCity';
import { GodrejRajendraNagar } from './pages/GodrejRajendraNagar';
import { LeadForm } from './components/LeadForm';
import { CloseIcon } from './components/Icons';
// Admin Imports
import { AdminLogin } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { LeadsPage } from './pages/admin/Leads';
import { ProjectsPage } from './pages/admin/Projects';
import { isAuthenticated } from './lib/auth';

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

  // --- Router Logic ---
  const cleanPath = hash.replace(/^#/, '').split('?')[0].split('#')[0];
  const isAdminRoute = cleanPath.startsWith('/admin');

  // Admin Guard
  if (isAdminRoute) {
      if (cleanPath === '/admin/login') return <AdminLogin />;
      
      // Protected Routes
      if (!isAuthenticated()) {
          window.location.hash = '/admin/login';
          return null;
      }

      if (cleanPath === '/admin/dashboard') return <Dashboard />;
      if (cleanPath === '/admin/leads') return <LeadsPage />;
      if (cleanPath === '/admin/projects') return <ProjectsPage />;
      
      return <Dashboard />; // Default to dashboard for unknown admin routes
  }

  // --- Public Routes ---
  let Component = Home;
  let currentProject = "General Enquiry";

  if (cleanPath === '/prestigecity') {
    Component = PrestigeCity;
    currentProject = "The Prestige City Hyderabad";
  } else if (cleanPath === '/godrej-rajendranagar') {
    Component = GodrejRajendraNagar;
    currentProject = "Godrej Regal Pavilion";
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
            <LeadForm title="Enquire Now" subtitle="Get Instant Callback & Details" project={currentProject} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;