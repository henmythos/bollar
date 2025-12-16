import React, { useEffect, useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { CheckIcon, LocationIcon, PhoneIcon, WhatsAppIcon, DocIcon, CloseIcon, ChartIcon, BuildingIcon } from '../components/Icons';
import { PriceRow } from '../types';

export const GodrejRajendraNagar: React.FC = () => {
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const PROJECT_NAME = "Godrej Regal Pavilion";

  useEffect(() => {
    document.title = "Godrej Regal Pavilion - Rajendra Nagar | Luxury 3 & 4 BHK";
    window.scrollTo(0, 0);

    // Auto-trigger Lead Form Popup after 10 seconds
    const timer = setTimeout(() => {
        setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const prices: PriceRow[] = [
    { unitType: "3 BHK Premium", size: "1750 Sq.Ft.", price: "₹ 1.70 Cr* Onwards" },
    { unitType: "3 BHK Luxe", size: "2050 Sq.Ft.", price: "₹ 1.90 Cr* Onwards" },
    { unitType: "3.5 BHK", size: "2650 Sq.Ft.", price: "₹ 2.35 Cr* Onwards" },
    { unitType: "4 BHK Premium", size: "2900 Sq.Ft.", price: "₹ 3.05 Cr* Onwards" },
    { unitType: "4 BHK Luxe", size: "3500 Sq.Ft.", price: "₹ 3.20 Cr* Onwards" },
  ];

  const highlights = [
    "13 Acres Royal Nawaab Themed Township",
    "9 Majestic Towers (4B+G+33 Floors)",
    "2000 Premium Vaastu-Compliant Units",
    "Located in Gaganpahad, Opp McDonald's",
    "75,000 Sq. Ft. Grand Clubhouse",
    "RERA: P02400009910"
  ];

  const galleryImages = [
    "https://godrejregalpavilion.online/img/gallery/out5.png",
    "https://godrej-regalpavilion.site/assets/images/outdoor/3.webp",
    "https://godrej-regalpavilion.site/assets/images/outdoor/7.webp",
    "https://godrej-regalpavilion.site/assets/images/outdoor/8.webp",
    "https://godrej-regalpavilion.site/assets/images/outdoor/10.webp"
  ];

  const heroImage = "https://www.godrejsregalpavilion.com/images/banner/banner/godrej-regal-pavilion-main-view_1400px.webp";
  const partnerBadge = "https://i.postimg.cc/CdyrVCSk/Whats-App-Image-2025-12-14-at-10-05-50-PM.jpg"; // Using same partner badge
  const projectLogo = "https://godrejregalpavilion.online/img/godrej%20footer.png";

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "name": "Godrej Regal Pavilion",
        "description": "Ultra-Luxury Royal Nawaab Themed Township in Rajendra Nagar. 13 Acres, 9 Towers, offering 3, 3.5 & 4 BHK Apartments.",
        "image": "https://www.godrejsregalpavilion.com/images/banner/banner/godrej-regal-pavilion-main-view_1400px.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Opposite McDonald’s, Gaganpahad, Rajendra Nagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500077",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.3000", 
          "longitude": "78.4000"
        },
        "url": "https://bollaarproperties.com/godrej-rajendranagar",
        "telephone": "+918297196454",
        "priceRange": "₹ 1.70 Cr - ₹ 3.20 Cr"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Godrej Regal Pavilion located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Godrej Regal Pavilion is located in Gaganpahad, Rajendra Nagar, Hyderabad, right opposite McDonald’s."
            }
          },
          {
            "@type": "Question",
            "name": "What is the possession date of Godrej Regal Pavilion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The possession date is July 2030."
            }
          }
        ]
      }
    ]
  };

  // Reusable Gradient Class
  const goldGradient = "bg-gradient-to-r from-gold-600 via-[#E5C565] to-gold-600";
  const goldTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-gold-500 via-[#E5C565] to-gold-500";

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Inject Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md">
            <button 
                onClick={() => setShowModal(false)}
                className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gold-500 transition"
            >
                <CloseIcon className="w-8 h-8" />
            </button>
            <LeadForm title="Enquire Now" subtitle="Don't Miss Out! Prices Increasing Soon." project={PROJECT_NAME} />
          </div>
        </div>
      )}

      {/* Project Hero */}
      <section className="relative min-h-[500px] lg:h-[700px] flex items-center pt-10 pb-10">
        <img 
            src={heroImage} 
            alt="Godrej Regal Pavilion Main View" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white md:w-1/2 mt-10 md:mt-0">
                {/* Authorized Partner Badge */}
                <div className={`p-[2px] ${goldGradient} rounded-lg inline-block mb-6 shadow-xl animate-fade-in-up`}>
                    <img 
                        src={partnerBadge} 
                        alt="Authorized Sales Partner" 
                        className="h-12 w-auto block rounded-md bg-white object-contain"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <span className={`${goldGradient} text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded mb-4 inline-block shadow-lg border border-gold-400/50`}>
                        New Launch in Rajendra Nagar
                    </span>
                </div>
                
                <h1 className="text-2xl md:text-5xl font-serif font-bold leading-tight mb-4 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    Godrej <br/> Regal Pavilion
                </h1>
                <p className="text-sm md:text-xl text-gray-200 mb-6 font-light animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                   Royal Nawaab Themed Apartments in Gaganpahad
                </p>
                
                {/* Highlights */}
                <div className="space-y-3 mb-8 bg-black/40 p-5 rounded-lg backdrop-blur-md border-l-4 border-gold-500 inline-block w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <p className="flex items-center text-sm md:text-base">
                        <CheckIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> Premium 3, 3.5 & 4 BHK
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <CheckIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> Starting from ₹ 1.70 Cr*
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <BuildingIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> 13 Acres | 9 Towers | G+33 Floors
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <ChartIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> RERA Approved: P02400009910
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <a href="tel:+918297196454" className="bg-white text-brand-900 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-center transform hover:-translate-y-1 text-sm">
                        Call Now
                    </a>
                    <a href="https://wa.me/918297196454?text=Interested%20in%20Godrej%20Regal%20Pavilion" className={`${goldGradient} text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition flex items-center justify-center shadow-lg transform hover:-translate-y-1 border border-white/20 text-sm`}>
                        <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp
                    </a>
                </div>
            </div>
            <div className="w-full md:w-[400px] z-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <LeadForm title="Download Brochure" subtitle="Register for Launch Benefits" project={PROJECT_NAME} />
            </div>
        </div>
      </section>

      {/* Overview & Highlights */}
      <section className="py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-6 relative inline-block">
                        Project Overview
                        <div className={`absolute bottom-0 left-0 w-1/2 h-1 ${goldGradient} rounded`}></div>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        Godrej Regal Pavilion is a futuristic, cutting-edge apartment project by Godrej Properties, located in Gaganpahad, Rajendra Nagar, Hyderabad. Spanning 13 acres of land, it offers a total of 2,000 premium Vaastu-compliant units.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        The project is designed with a <strong>Royal Nawaab Theme</strong>, offering luxury high-rise apartments in 3, 3.5, and 4 BHK layouts. It consists of 6 to 9 high-rise towers, each with 4 Basements + Ground + 33 Floors.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                         With 80% open spaces and a green, well-ventilated ecosystem, it features a massive clubhouse of 75,000 sq. ft. (G+5 floors) including a café, spa, gym, swimming pool, and kids’ play zone.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                        <h4 className="font-bold text-brand-900 mb-2 text-sm">Possession: July 2030</h4>
                        <p className="text-xs text-gray-600">Construction starting September 2025.</p>
                    </div>
                </div>
                <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition duration-300">
                    <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 ${goldGradient} rounded-full opacity-20`}></div>
                    <h3 className={`text-xl font-serif font-bold mb-6 ${goldTextGradient}`}>Project Highlights</h3>
                    <ul className="space-y-4 relative z-10">
                        {highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-200 font-medium text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <button 
                            onClick={() => setShowModal(true)}
                            className={`w-full ${goldGradient} hover:brightness-110 text-white font-bold py-3.5 rounded-lg flex items-center justify-center transition shadow-lg border border-white/10 text-sm`}
                        >
                            <DocIcon className="w-4 h-4 mr-2" /> Download Project Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Amenities - Text Based */}
       <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                 <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-4">Royal Nawaab Lifestyle</h2>
                 <p className="text-gray-600 text-sm">Experience the grandeur of a 75,000 Sq. Ft. Clubhouse (G+5 Floors)</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Luxury Clubhouse", "Swimming Pool", "Café & Spa", "Gymnasium", 
                    "Kids Play Zone", "24/7 Security", "Jogging Track", "Landscaped Gardens",
                    "Yoga Deck", "Banquet Hall", "Indoor Games", "Badminton Court"
                ].map((amenity, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-6 border border-white bg-white rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
                        <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-4 text-gold-600">
                            <CheckIcon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-gray-800 text-center text-sm">{amenity}</span>
                    </div>
                ))}
             </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-20 bg-brand-900 text-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Configuration & Pricing</h2>
                <p className="text-gray-400 text-sm">Exclusive Launch Prices. Book your unit today.</p>
                <div className={`h-1 w-24 mx-auto ${goldGradient} mt-4 rounded-full`}></div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible px-4 -mx-4 md:mx-0 scrollbar-hide">
                {prices.map((row, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-[80%] md:w-auto relative group">
                        <div className={`p-[1px] rounded-2xl ${goldGradient} shadow-2xl h-full transform transition duration-300 md:group-hover:-translate-y-2`}>
                            <div className="bg-brand-900 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                                <div className="mb-6">
                                    <h3 className="text-xl font-serif font-bold text-white mb-2">{row.unitType}</h3>
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-semibold tracking-wider text-gold-400 border border-white/10">
                                        LUXURY
                                    </div>
                                </div>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Super Built-up Area</p>
                                        <p className="text-base font-medium text-white">{row.size}</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-800">
                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Starting Price</p>
                                        <p className={`text-lg font-bold ${goldTextGradient}`}>
                                            {row.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button 
                                        onClick={() => setShowModal(true)}
                                        className={`w-full ${goldGradient} text-white font-bold py-3 rounded-xl shadow-lg hover:brightness-110 transition flex items-center justify-center text-xs`}
                                    >
                                        <DocIcon className="w-4 h-4 mr-2" /> Request Cost Sheet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-2">*Prices are subject to change. Govt taxes extra.</p>
        </div>
      </section>

       {/* Gallery */}
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-brand-900 mb-4">Project Gallery</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-sm">Visuals of the upcoming architectural marvel in Hyderabad.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {galleryImages.map((img, idx) => (
                    <div 
                        key={idx} 
                        className={`relative rounded-xl overflow-hidden shadow-md group h-64`}
                    >
                        <img 
                            src={img} 
                            alt={`Godrej Gallery ${idx + 1}`} 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" 
                            referrerPolicy="no-referrer"
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-brand-900 mb-12">Location Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500">
                         <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Prime Location</h4>
                         <p className="text-gray-600 text-sm">Gaganpahad, Rajendra Nagar, Hyderabad - 500077. Right opposite McDonald’s.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500">
                         <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Connectivity</h4>
                         <p className="text-gray-600 text-sm">Well linked via ORR. Easy reach to Gachibowli (24km) and Financial District.</p>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500">
                         <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Upcoming Metro</h4>
                         <p className="text-gray-600 text-sm">A big advantage is the upcoming Purple Metro Line connecting Nagole to RGIA.</p>
                    </div>
                </div>
                <div className="h-[300px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                    {/* Placeholder Map or static image if available, using Google Maps Embed for generic Rajendra Nagar if specific image not suitable */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6657984442345!2d78.4116463751636!3d17.33156298354516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9700508752d5%3A0x63351d3655110034!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1709222222222!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <a href="https://wa.me/918297196454?text=Share%20Godrej%20Location" className={`${goldGradient} text-white px-6 py-2 rounded-lg font-bold shadow-xl hover:brightness-110 transition text-sm flex items-center whitespace-nowrap`}>
                                <WhatsAppIcon className="w-4 h-4 mr-2" /> Get Exact Location
                            </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* About Developer */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-32 mx-auto mb-6">
                 <img src={projectLogo} alt="Godrej Properties" className="w-full h-auto opacity-80" referrerPolicy="no-referrer"/>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-6">Godrej Properties</h2>
            <div className={`w-16 h-1 ${goldGradient} mx-auto mb-8`}></div>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
                Godrej Properties brings the philosophy of innovation, sustainability, and excellence to the real estate industry. Each Godrej Properties development combines a 127-year legacy of excellence and trust with a commitment to cutting-edge design and technology.
            </p>
        </div>
      </section>

      {/* Sticky Bottom Lead Gen for Desktop (Inline) */}
      <section className={`${goldGradient} py-12`} id="contact-bottom">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 drop-shadow-md">Book a Site Visit Today</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-white p-5 rounded-xl flex items-center justify-center md:justify-start min-w-[280px] shadow-lg">
                    <PhoneIcon className="w-8 h-8 text-brand-900 mr-4" />
                    <div className="text-left">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Call for offers</div>
                        <a href="tel:+918297196454" className="font-bold text-2xl text-brand-900 hover:text-gold-600 transition">+91 82971 96454</a>
                    </div>
                </div>
                <a href="https://wa.me/918297196454?text=Interested%20in%20Godrej%20Regal%20Pavilion" className="bg-brand-900 text-white p-5 rounded-xl flex items-center justify-center min-w-[280px] font-bold hover:bg-brand-800 transition shadow-lg text-lg">
                    <WhatsAppIcon className="w-8 h-8 mr-3" /> Chat on WhatsApp
                </a>
            </div>
        </div>
      </section>

       {/* Legal & RERA */}
       <section className="bg-brand-950 text-gray-600 py-8 text-[11px] px-4 leading-relaxed">
        <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                     <p className="mb-2 text-gray-500"><strong>Project RERA:</strong> P02400009910</p>
                     <p className="text-gray-500"><strong>Bollaar Properties RERA:</strong> A02400003455 (Authorized Channel Partner)</p>
                </div>
                <div>
                     <p>
                        Disclaimer: The content is for information purposes only. Prices mentioned are subject to change. This is the official website of an authorized marketing partner (Bollaar Properties).
                    </p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};