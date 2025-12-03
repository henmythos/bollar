import React, { useEffect, useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { CheckIcon, LocationIcon, PhoneIcon, WhatsAppIcon, DocIcon, CloseIcon, ChartIcon, BuildingIcon } from '../components/Icons';
import { PriceRow } from '../types';

export const PrestigeCity: React.FC = () => {
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "The Prestige City Hyderabad - Budvel | Luxury 3 & 4 BHK Apartments";
    window.scrollTo(0, 0);

    // Auto-trigger Lead Form Popup after 10 seconds
    const timer = setTimeout(() => {
        setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const prices: PriceRow[] = [
    { unitType: "3 BHK", size: "1534 - 2169 Sq.Ft.", price: "₹ 1.50 Cr* - 2.12 Cr*" },
    { unitType: "3.5 BHK", size: "2433 Sq.Ft.", price: "₹ 2.38 Cr*" },
    { unitType: "4 BHK", size: "3357 Sq.Ft.", price: "₹ 3.28 Cr*" },
  ];

  const highlights = [
    "31.14 Acres Mega Township",
    "13 Majestic Towers with 37 Floors",
    "4647 Luxury Units",
    "Located in Budvel, Near Airport",
    "Prestige Group Quality Assurance",
    "Massive Clubhouse & Amenities"
  ];

  const galleryImages = [
    "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/12312fee-74b6-479d-8d27-f207bae04c97.webp", // Hero shot maybe
    "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/78827d55-0f20-43dd-aa46-e5ecdf64fad3.webp",
    "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/67d6d77e-ccf8-4009-90a4-c9cb914b2517.webp",
    "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/724cc809-2ba4-44ed-a5e7-3e54bba99bc5.webp",
    "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/e2331e3d-0789-49da-9041-191dd98279e2.webp"
  ];

  const heroImage = "https://i.postimg.cc/ZKsbR9f0/img10201.jpg";
  const topViewImage = "https://i.postimg.cc/vc9F2mFJ/img4576.jpg";
  const locationImage = "https://i.postimg.cc/mgGshQYh/cty_page_0007.jpg";
  const partnerBadge = "https://i.postimg.cc/rpwdvKJy/sales-partner.jpg";

  const layoutImages = [
    { src: "https://i.postimg.cc/8Pd1RKPY/cty_page_0045.jpg", title: "Tower Type A & B" },
    { src: "https://i.postimg.cc/k4kncLbf/cty_page_0028.jpg", title: "Tower Type C & D" },
    { src: "https://i.postimg.cc/RZMvX7WB/cty_page_0047.jpg", title: "Tower Type E & F" },
  ];

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "name": "The Prestige City Hyderabad",
        "description": "Luxury 3, 3.5 & 4 BHK apartments in Budvel, Rajendranagar. A 31.14-acre township by Prestige Group offering world-class amenities and lake views.",
        "image": "https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/12312fee-74b6-479d-8d27-f207bae04c97.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Budvel, Rajendra Nagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500052",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.3457", 
          "longitude": "78.4346"
        },
        "url": "https://bollaarproperties.com/prestigecity",
        "telephone": "+919347334431",
        "priceRange": "₹ 1.50 Cr - ₹ 3.28 Cr"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is The Prestige City Hyderabad located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Prestige City Hyderabad is located in Budvel, Rajendranagar, close to the PVNR Expressway and Rajiv Gandhi International Airport."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price of apartments in Prestige City Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The prices for 3 BHK apartments start from ₹ 1.50 Cr*. Prices vary based on floor and facing."
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
            <LeadForm title="Enquire Now" subtitle="Don't Miss Out! Prices Increasing Soon." />
          </div>
        </div>
      )}

      {/* Project Hero - Fixed mobile height overlap with min-h-screen */}
      <section className="relative min-h-[500px] lg:h-[700px] flex items-center pt-10 pb-10">
        <img 
            src={heroImage} 
            alt="The Prestige City Budvel Entrance View" 
            className="absolute inset-0 w-full h-full object-cover object-bottom"
            referrerPolicy="no-referrer"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white md:w-1/2 mt-10 md:mt-0">
                {/* Authorized Partner Badge */}
                <div className={`p-[2px] ${goldGradient} rounded-lg inline-block mb-6 shadow-xl animate-fade-in-up`}>
                    <img 
                        src={partnerBadge} 
                        alt="Authorized Sales Partner - Prestige City" 
                        className="h-12 w-auto block rounded-md bg-white object-contain"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <span className={`${goldGradient} text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded mb-4 inline-block shadow-lg border border-gold-400/50`}>
                        New Launch in Rajendranagar
                    </span>
                </div>
                
                <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-4 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    The Prestige City <br/> Hyderabad
                </h1>
                <p className="text-sm md:text-xl text-gray-200 mb-6 font-light animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    Premium Gated Community in Budvel
                </p>
                
                {/* Highlights with smooth animation */}
                <div className="space-y-3 mb-8 bg-black/40 p-5 rounded-lg backdrop-blur-md border-l-4 border-gold-500 inline-block w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <p className="flex items-center text-sm md:text-base">
                        <CheckIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> Premium 3, 3.5 & 4 BHK
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <CheckIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> Starting from ₹ 1.50 Cr*
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <BuildingIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> India’s No.1 Listed Developer
                    </p>
                    <p className="flex items-center text-sm md:text-base">
                        <ChartIcon className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" /> Fastest Selling Project in Budvel
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <a href="tel:+919347334431" className="bg-white text-brand-900 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-center transform hover:-translate-y-1 text-sm">
                        Call Now
                    </a>
                    <a href="https://wa.me/919347334431?text=Interested%20in%20Prestige%20City" className={`${goldGradient} text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition flex items-center justify-center shadow-lg transform hover:-translate-y-1 border border-white/20 text-sm`}>
                        <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp
                    </a>
                </div>
            </div>
            <div className="w-full md:w-[400px] z-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <LeadForm title="Download Brochure" subtitle="Register for Exclusive Launch Offers" />
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
                        The Prestige City Hyderabad is a meticulously planned self-contained township located in the high-growth corridor of Budvel, Rajendranagar. Spanning over 31.14 acres, this architectural marvel by Prestige Group offers a lifestyle of unbridled luxury.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                        With 13 towers rising 37 floors high, the project offers breathtaking views of the Mulagund Lake and the National Park. It connects you seamlessly to the Airport, Financial District, and IT Hubs.
                    </p>
                    
                    {/* Top View Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100 mb-8">
                         <img 
                            src={topViewImage} 
                            alt="The Prestige City Top View" 
                            className="w-full h-auto object-cover"
                            referrerPolicy="no-referrer"
                        />
                         <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1 backdrop-blur-sm">
                             Aerial View of Township
                         </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                        <h4 className="font-bold text-brand-900 mb-2 text-sm">Project Status: New Launch</h4>
                        <p className="text-xs text-gray-600">Don't miss the opportunity to book at inaugural prices.</p>
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

      {/* Video Tour Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-4">Experience The Prestige City</h2>
                <p className="text-gray-600 text-sm">Watch the official walkthrough of Hyderabad's finest township</p>
             </div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border-4 border-white">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/PsEi1W4kP68?autoplay=1&mute=1&rel=0&modestbranding=1"
                    title="The Prestige City Hyderabad Walkthrough"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
             </div>
        </div>
      </section>

      {/* Master Plan & Layouts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-6">Master Plan & Layouts</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
                Explore the thoughtfully designed layout of 31.14 acres, featuring wide internal roads, lush green spaces, and optimal tower placement for cross-ventilation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {layoutImages.map((layout, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 aspect-[4/3] bg-white">
                             <img 
                                src={layout.src} 
                                alt={layout.title} 
                                className="w-full h-full object-contain p-2"
                                referrerPolicy="no-referrer"
                            />
                             <div className="absolute bottom-0 left-0 right-0 bg-brand-900/90 py-2">
                                <span className="text-white text-xs font-bold uppercase tracking-wider">{layout.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-brand-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-brand-800 transition shadow-lg transform hover:-translate-y-1 text-sm"
            >
                <DocIcon className="w-5 h-5 mr-2" /> Download Detailed Master Plan
            </button>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                 <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-4">World-Class Amenities</h2>
                 <p className="text-gray-600 text-sm">Designed for a holistic lifestyle with over 50+ amenities.</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Swimming Pool", "Gymnasium", "Clubhouse", "Jogging Track", 
                    "Kids Play Area", "24/7 Security", "Landscaped Gardens", "Multipurpose Hall",
                    "Yoga Deck", "Pet Park", "Indoor Games", "Amphitheatre"
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

      {/* Price List - Redesigned Card Layout */}
      <section className="py-20 bg-brand-900 text-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Price & Configuration</h2>
                <p className="text-gray-400 text-sm">Exclusive Pre-Launch pricing. Swipe to view all options.</p>
                <div className={`h-1 w-24 mx-auto ${goldGradient} mt-4 rounded-full`}></div>
            </div>

            {/* Mobile Horizontal Snap Scroll / Desktop Grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible px-4 -mx-4 md:mx-0 scrollbar-hide">
                {prices.map((row, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-[85%] md:w-auto relative group">
                        {/* Gold Border Effect via Wrapper */}
                        <div className={`p-[1px] rounded-2xl ${goldGradient} shadow-2xl h-full transform transition duration-300 md:group-hover:-translate-y-2`}>
                            <div className="bg-brand-900 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                                {/* Decorative Background Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                
                                <div className="mb-6">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{row.unitType}</h3>
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider text-gold-400 border border-white/10">
                                        PREMIUM APARTMENT
                                    </div>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Super Built-up Area</p>
                                        <p className="text-xl font-medium text-white">{row.size}</p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-gray-800">
                                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Starting Price</p>
                                        <p className={`text-2xl md:text-3xl font-bold ${goldTextGradient}`}>
                                            {row.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button 
                                        onClick={() => setShowModal(true)}
                                        className={`w-full ${goldGradient} text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-110 transition flex items-center justify-center text-sm`}
                                    >
                                        <DocIcon className="w-4 h-4 mr-2" /> Request Cost Sheet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="text-[10px] text-center text-gray-500 mt-2">*Prices are subject to change. Govt taxes extra. 1 Acre = 4046.86 sq.mt</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-brand-900 mb-4">Project Gallery</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-sm">Take a visual tour of the premium architecture and lush surroundings.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                {galleryImages.map((img, idx) => {
                    // First image is large (2x2 on desktop)
                    const isLarge = idx === 0;
                    return (
                        <div 
                            key={idx} 
                            className={`relative rounded-xl overflow-hidden shadow-md group ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <img 
                                src={img} 
                                alt={`Prestige City Gallery ${idx + 1}`} 
                                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" 
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <span className="text-white text-sm font-bold tracking-wide">View Image</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-12 text-center">
                 <a href="https://wa.me/919347334431?text=Send%20More%20Photos" className="inline-flex items-center bg-brand-900 text-white px-8 py-3.5 rounded-lg hover:bg-brand-800 transition font-bold shadow-lg transform hover:-translate-y-1 text-sm">
                    <WhatsAppIcon className="w-4 h-4 mr-2" /> Request More Photos
                 </a>
            </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-brand-900 mb-12">Location Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500 hover:shadow-md transition">
                        <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Connectivity</h4>
                        <p className="text-gray-600 text-sm">Direct access to PVNR Expressway and ORR. 15 Mins to Rajiv Gandhi International Airport.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500 hover:shadow-md transition">
                        <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Work Hubs</h4>
                        <p className="text-gray-600 text-sm">20 Mins to Financial District, Gachibowli IT Corridor & Hitech City.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500 hover:shadow-md transition">
                        <h4 className="font-bold flex items-center text-base mb-2 text-brand-900"><LocationIcon className="w-5 h-5 text-gold-500 mr-2"/> Social Infra</h4>
                        <p className="text-gray-600 text-sm">Close to Glendale Academy, Rockwell International School, and Shadan Hospital.</p>
                    </div>
                </div>
                <div className="h-[400px] bg-white p-2 rounded-xl shadow-lg border border-gray-100">
                    <div className="h-full w-full overflow-hidden rounded-lg relative">
                        <img 
                            src={locationImage} 
                            alt="The Prestige City Location Map" 
                            className="w-full h-full object-contain" 
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <a href="https://wa.me/919347334431?text=Share%20Location%20Map" className={`${goldGradient} text-white px-6 py-2 rounded-lg font-bold shadow-xl hover:brightness-110 transition text-sm flex items-center`}>
                                <WhatsAppIcon className="w-4 h-4 mr-2" /> Get Location
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* New SEO Content Section: Why Invest in Budvel? */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-6 text-center">
            Why Invest in Budvel & Rajendranagar?
          </h2>
          <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed text-sm">
            <p className="mb-4">
              Budvel and Rajendranagar are rapidly transforming into Hyderabad's new premium residential corridors. Strategically located along the PVNR Expressway and the Outer Ring Road (ORR), these areas offer unmatched connectivity to the Rajiv Gandhi International Airport (RGIA) and the financial hubs of Gachibowli and Hitech City. 
            </p>
            
            <div className={`transition-all duration-500 overflow-hidden ${isLocationExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <h3 className="text-lg font-bold text-brand-900 mt-6 mb-3">The New IT Cluster in Budvel</h3>
              <p className="mb-4">
                The Telangana government has earmarked approximately 350 acres in Budvel for a dedicated IT cluster. This development is set to create thousands of jobs, driving rental demand and property appreciation in the immediate vicinity. Investing in <strong>Prestige City Budvel</strong> today offers a significant first-mover advantage similar to the early days of Gachibowli.
              </p>
              
              <h3 className="text-lg font-bold text-brand-900 mt-6 mb-3">Social Infrastructure & Lifestyle</h3>
              <p className="mb-4">
                Rajendranagar is home to premier institutions like the National Institute of Agricultural Extension Management (MANAGE) and PJTSAU. The area boasts excellent connectivity to top-tier international schools like Glendale Academy and Rockwell International, making it an ideal choice for families.
              </p>

              <h3 className="text-lg font-bold text-brand-900 mt-6 mb-3">Connectivity Beyond Compare</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Airport Connectivity:</strong> A hassle-free 15-minute drive to RGIA makes it perfect for frequent flyers.</li>
                <li><strong>Work Commute:</strong> The PVNR Expressway ensures a signal-free commute to the city center, while the ORR connects you to the Financial District in under 20 minutes.</li>
              </ul>
              <p>
                With <strong>flats for sale in Rajendranagar</strong> seeing a steady year-on-year appreciation, The Prestige City Hyderabad stands out as a landmark development offering luxury, security, and high ROI.
              </p>
            </div>

            <div className="text-center mt-6">
              <button 
                onClick={() => setIsLocationExpanded(!isLocationExpanded)}
                className="text-gold-600 font-bold hover:text-gold-700 underline underline-offset-4 focus:outline-none"
              >
                {isLocationExpanded ? 'Read Less' : 'Read More about Budvel & Rajendranagar'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Developer */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">The Developer</h3>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 mb-6">Prestige Group</h2>
            <div className={`w-16 h-1 ${goldGradient} mx-auto mb-8`}></div>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
                Over the last decade, the Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, the group's turnover is today in excess of Rs 3518 Cr.
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
                        <a href="tel:+919347334431" className="font-bold text-2xl text-brand-900 hover:text-gold-600 transition">+91 93473 34431</a>
                    </div>
                </div>
                <a href="https://wa.me/919347334431" className="bg-brand-900 text-white p-5 rounded-xl flex items-center justify-center min-w-[280px] font-bold hover:bg-brand-800 transition shadow-lg text-lg">
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
                     <p className="mb-2 text-gray-500"><strong>Project RERA:</strong> The Prestige City Hyderabad is registered under RERA.</p>
                     <p className="text-gray-500"><strong>Bollaar Properties RERA:</strong> A02400003455 (Authorized Channel Partner)</p>
                </div>
                <div>
                     <p>
                        Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. This is the official website of an authorized marketing partner. We may share data with rera registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};