import React, { useEffect } from 'react';
import { LeadForm } from '../components/LeadForm';
import { CheckIcon, BuildingIcon, UsersIcon, ChartIcon, PhoneIcon, WhatsAppIcon, DocIcon } from '../components/Icons';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Bollaar Properties | Hyderabad's Most Trusted Real Estate Advisory";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://picsum.photos/seed/arch/1920/1080" 
                alt="Luxury Real Estate Background" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 border border-gold-500 rounded-full text-gold-500 text-xs font-bold tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
                RERA Authorized: A02400003455
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Bollaar Properties <br/>
                <span className="text-gray-300 text-2xl md:text-4xl block mt-2 font-normal">Hyderabad’s Most Trusted Real Estate Advisory</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <ChartIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">₹320+ Cr</div>
                    <div className="text-sm text-gray-300">Property Sales</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <UsersIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">1200+</div>
                    <div className="text-sm text-gray-300">Trusted Investors & Buyers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <BuildingIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">Premium</div>
                    <div className="text-sm text-gray-300">Projects Only</div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919347334431" className="flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg text-lg transform hover:-translate-y-1">
                    <PhoneIcon className="w-5 h-5" /> Call Now
                </a>
                <a href="https://wa.me/919347334431" className="flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 border border-gold-500/30 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg text-lg transform hover:-translate-y-1">
                    <WhatsAppIcon className="w-5 h-5" /> WhatsApp Chat
                </a>
            </div>
        </div>
      </section>

      {/* Featured Project Section - High Priority */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Featured Luxury Project</h2>
                <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
            </div>

            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="lg:w-1/2 relative min-h-[400px]">
                     <img 
                        src="https://picsum.photos/seed/prestige/800/600" 
                        alt="The Prestige City Hyderabad" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gold-600 text-white px-4 py-1 text-sm font-bold rounded shadow-lg uppercase tracking-wide">
                        Hot Launch
                    </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-2">The Prestige City Hyderabad</h3>
                    <p className="text-gray-500 mb-6 font-medium">Budvel, Rajendranagar</p>
                    
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-700">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            31.14 Acres Mega Township
                        </li>
                        <li className="flex items-center text-gray-700">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            Premium 3, 3.5 & 4 BHK Apartments
                        </li>
                        <li className="flex items-center text-gray-700">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            Investment Starts from ₹ 1.50 Cr*
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#/prestigecity" className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-bold rounded-lg text-white bg-brand-900 hover:bg-brand-800 transition shadow-lg">
                            View Project Details
                        </a>
                        <a href="https://wa.me/919347334431?text=Please%20send%20brochure%20for%20Prestige%20City" className="inline-flex justify-center items-center px-6 py-3.5 border border-gray-300 text-base font-bold rounded-lg text-brand-900 bg-white hover:bg-gray-50 transition shadow-sm">
                           <DocIcon className="w-4 h-4 mr-2" /> Download Brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">Why Choose Bollaar Properties?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        At Bollaar Properties, we don't just sell properties; we build legacies. As Hyderabad's premier real estate consultancy, we bring transparency, ethical practices, and deep market intelligence to every transaction.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Whether you are a first-time homebuyer or a seasoned investor, our team of dedicated property research analysts ensures you get the best appreciation potential and lifestyle value.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gold-500">
                            <h4 className="font-bold text-brand-900">Guaranteed Best Price</h4>
                            <p className="text-sm text-gray-500">Direct from developer pricing with zero brokerage on new bookings.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gold-500">
                            <h4 className="font-bold text-brand-900">End-to-End Support</h4>
                            <p className="text-sm text-gray-500">From site visit to documentation and loan assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-gold-500/10 rounded-xl transform rotate-3"></div>
                    <LeadForm title="Get Free Consultation" subtitle="Talk to our Investment Expert" />
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl font-serif font-bold mb-12">Trusted by 1200+ Happy Families</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6">"Bollaar Properties helped me find the perfect 3BHK in Prestige City. Their transparency regarding pricing and inventory was refreshing. Highly recommended!"</p>
                    <div className="font-bold text-gold-500">– Rajesh Reddy</div>
                    <div className="text-xs text-gray-400">IT Professional, Hitech City</div>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6">"Professionalism at its best. The team arranged a site visit, explained the future appreciation of Budvel, and handled all documentation smoothly."</p>
                    <div className="font-bold text-gold-500">– Dr. Anita Sharma</div>
                    <div className="text-xs text-gray-400">Senior Consultant</div>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6">"Best channel partner in Hyderabad. They got me a unit preference that was difficult to find elsewhere. Honest and reliable."</p>
                    <div className="font-bold text-gold-500">– Vikram Malhotra</div>
                    <div className="text-xs text-gray-400">Business Owner</div>
                </div>
             </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Ready to find your dream home?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919347334431" className="bg-white text-brand-900 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg transform hover:-translate-y-1">
                    Schedule a Site Visit
                </a>
                <a href="https://wa.me/919347334431" className="bg-brand-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-brand-800 transition shadow-lg text-lg transform hover:-translate-y-1">
                    WhatsApp for Offers
                </a>
            </div>
        </div>
      </section>

    </div>
  );
};