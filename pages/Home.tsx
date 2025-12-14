import React, { useEffect } from 'react';
import { LeadForm } from '../components/LeadForm';
import { CheckIcon, BuildingIcon, UsersIcon, ChartIcon, PhoneIcon, WhatsAppIcon, DocIcon } from '../components/Icons';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Bollaar Properties | Hyderabad's Most Trusted Real Estate Advisory";
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Bollaar Properties",
    "image": "https://i.postimg.cc/rpwdvKJy/sales-partner.jpg",
    "description": "Hyderabad's Most Trusted Real Estate Advisory & Prestige City Authorized Partner. Guiding families to their dream homes.",
    "url": "https://bollaarproperties.com",
    "telephone": "+919347334431",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "820",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://images.pexels.com/photos/7563818/pexels-photo-7563818.jpeg" 
                alt="Luxury Real Estate Background" 
                className="w-full h-full object-cover"
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
            />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 border border-gold-500 rounded-full text-gold-500 text-xs font-bold tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
                RERA Authorized: A02400003455
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Bollaar Properties <br/>
                <span className="text-gray-300 text-xl md:text-3xl block mt-2 font-normal">Hyderabad’s Most Trusted Real Estate Advisory</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <ChartIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">₹320+ Cr</div>
                    <div className="text-xs text-gray-300">Property Sales</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <UsersIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">1200+</div>
                    <div className="text-xs text-gray-300">Trusted Investors & Buyers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <BuildingIcon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">Premium</div>
                    <div className="text-xs text-gray-300">Projects Only</div>
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

      {/* Featured Project Section - Prestige */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Featured Luxury Project</h2>
                <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
            </div>

            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
                <div className="lg:w-1/2 relative min-h-[400px]">
                     <img 
                        src="https://i.postimg.cc/WhrLY4cj/img10467.jpg" 
                        alt="The Prestige City Hyderabad" 
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="eager"
                    />
                    <div className="absolute top-4 left-4 bg-gold-600 text-white px-4 py-1 text-sm font-bold rounded shadow-lg uppercase tracking-wide">
                        Hot Launch
                    </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-2">The Prestige City Hyderabad</h3>
                    <p className="text-gray-500 mb-6 font-medium text-sm">Budvel, Rajendranagar</p>
                    
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-700 text-sm">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            31.14 Acres Mega Township
                        </li>
                        <li className="flex items-center text-gray-700 text-sm">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            Premium 3, 3.5 & 4 BHK Apartments
                        </li>
                        <li className="flex items-center text-gray-700 text-sm">
                            <CheckIcon className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                            Investment Starts from ₹ 1.50 Cr*
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#/prestigecity" className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-900 hover:bg-brand-800 transition shadow-lg">
                            View Project Details
                        </a>
                        <a href="https://wa.me/919347334431?text=Please%20send%20brochure%20for%20Prestige%20City" className="inline-flex justify-center items-center px-6 py-3.5 border border-gray-300 text-sm font-bold rounded-lg text-brand-900 bg-white hover:bg-gray-50 transition shadow-sm">
                           <DocIcon className="w-4 h-4 mr-2" /> Download Brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* New Launches & Projects - Godrej Added Here */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-serif font-bold text-brand-900 mb-2">New Launches & Trending Projects</h2>
                <p className="text-gray-500 text-sm">Discover Hyderabad's latest premium developments. Pre-register for early-bird offers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 - Godrej Regal Pavilion */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                        <img 
                            src="https://godrejregalpavilion.online/img/gallery/out5.png" 
                            alt="Godrej Regal Pavilion" 
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
                            <a href="#/godrej-rajendranagar" className="bg-white text-brand-900 text-xs font-bold px-4 py-2 rounded-lg hover:bg-gold-500 hover:text-white transition">View Details</a>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-gold-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">New Launch</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-brand-900 mb-1 text-lg group-hover:text-gold-600 transition">Godrej Regal Pavilion</h3>
                        <p className="text-xs text-gray-500 font-bold uppercase mb-3 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                            Rajendra Nagar, Hyderabad
                        </p>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                            Royal Nawaab Themed Township on 13 Acres. 2, 3 & 4 BHK Luxury Apartments starting from ₹ 1.10 Cr*.
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <span className="text-brand-900 font-bold text-sm">₹ 1.10 Cr* Onwards</span>
                            <a href="#/godrej-rajendranagar" className="text-gold-600 text-xs font-bold hover:underline">Know More →</a>
                        </div>
                    </div>
                    </div>

                    {/* Card 2 - Placeholder */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                        <img src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg" alt="Sky Villas" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition">
                            <span className="bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-brand-900 mb-1 text-lg">Sky Villas</h3>
                        <p className="text-xs text-gray-500 font-bold uppercase mb-3 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                            Gachibowli, Hyderabad
                        </p>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Ultra-luxury duplex sky villas with private pools and decks. Experience resort living in the city.</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                             <span className="text-gray-400 font-bold text-sm">Price on Request</span>
                            <button className="text-brand-900 text-xs font-bold hover:text-gold-600">Enquire →</button>
                        </div>
                    </div>
                    </div>

                    {/* Card 3 - Placeholder */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                        <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" alt="Lakefront Township" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition">
                            <span className="bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-brand-900 mb-1 text-lg">Lakefront Township</h3>
                        <p className="text-xs text-gray-500 font-bold uppercase mb-3 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                            Osman Sagar, Hyderabad
                        </p>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Resort-style living with serene lake views and lush greenery. 50+ acres of open space.</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                             <span className="text-gray-400 font-bold text-sm">Price on Request</span>
                            <button className="text-brand-900 text-xs font-bold hover:text-gold-600">Enquire →</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
      </section>

      {/* Safe Investment / Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                    <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Your Guide to a Safe Property Investment</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-sm">Buying a home is one of the biggest financial decisions. At Bollaar Properties, we ensure your investment is secure, legal, and profitable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition group">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                        <DocIcon className="w-7 h-7"/>
                    </div>
                    <h3 className="font-bold text-brand-900 mb-2">100% RERA Approved</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">We only deal with projects that have valid RERA numbers and clear legal titles. Zero risk.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition group">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                        <ChartIcon className="w-7 h-7"/>
                    </div>
                    <h3 className="font-bold text-brand-900 mb-2">High Appreciation</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Our market analysis ensures you buy in high-growth corridors like Budvel & Kokapet for max ROI.</p>
                </div>
                    <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition group">
                        <div className="w-14 h-14 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                        <UsersIcon className="w-7 h-7"/>
                    </div>
                    <h3 className="font-bold text-brand-900 mb-2">Authorized Partner</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Direct representation of Grade-A developers like Prestige Group. No middleman bias or extra cost.</p>
                </div>
                    <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition group">
                        <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                        <CheckIcon className="w-7 h-7"/>
                    </div>
                    <h3 className="font-bold text-brand-900 mb-2">Transparency</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Complete clarity on carpet areas, loading factors, payment plans, and hidden charges.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Market Insights - SEO Content */}
      <section className="py-16 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl font-serif font-bold mb-6">Hyderabad Real Estate: A Booming Market</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded mb-8"></div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Hyderabad has emerged as one of India's most resilient and fastest-growing real estate markets. With the expansion of the Metro Rail, the upcoming Airport Metro Express, and the rapid development of the Outer Ring Road (ORR) growth corridor, areas like <strong>Rajendranagar, Budvel, Kokapet, and Tellapur</strong> are witnessing exponential appreciation.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Investing in gated communities by reputed builders like Prestige Group ensures not just a luxury lifestyle but also a secure asset for generations. Bollaar Properties helps you navigate this dynamic market with expert advice and data-driven insights.
            </p>
            <a href="tel:+919347334431" className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-2 rounded transition text-sm font-bold uppercase tracking-wider">
                Talk to an Investment Expert
            </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6">Why Choose Bollaar Properties?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        At Bollaar Properties, we don't just sell properties; we build legacies. As Hyderabad's premier real estate consultancy, we bring transparency, ethical practices, and deep market intelligence to every transaction.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                        Whether you are a first-time homebuyer or a seasoned investor, our team of dedicated property research analysts ensures you get the best appreciation potential and lifestyle value.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gold-500">
                            <h4 className="font-bold text-brand-900 text-sm">Guaranteed Best Price</h4>
                            <p className="text-xs text-gray-500">Direct from developer pricing with zero brokerage on new bookings.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gold-500">
                            <h4 className="font-bold text-brand-900 text-sm">End-to-End Support</h4>
                            <p className="text-xs text-gray-500">From site visit to documentation and loan assistance.</p>
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
             <h2 className="text-2xl font-serif font-bold mb-12">Trusted by 1200+ Happy Families</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6 text-sm">"Bollaar Properties helped me find the perfect 3BHK in Prestige City. Their transparency regarding pricing and inventory was refreshing. Highly recommended!"</p>
                    <div className="font-bold text-gold-500 text-sm">– Rajesh Reddy</div>
                    <div className="text-[10px] text-gray-400">IT Professional, Hitech City</div>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6 text-sm">"Professionalism at its best. The team arranged a site visit, explained the future appreciation of Budvel, and handled all documentation smoothly."</p>
                    <div className="font-bold text-gold-500 text-sm">– Dr. Anita Sharma</div>
                    <div className="text-[10px] text-gray-400">Senior Consultant</div>
                </div>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-6 text-sm">"Best channel partner in Hyderabad. They got me a unit preference that was difficult to find elsewhere. Honest and reliable."</p>
                    <div className="font-bold text-gold-500 text-sm">– Vikram Malhotra</div>
                    <div className="text-[10px] text-gray-400">Business Owner</div>
                </div>
             </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-6">Ready to find your dream home?</h2>
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