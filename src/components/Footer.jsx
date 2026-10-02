import React from 'react';
import { Instagram, Youtube, Facebook, Globe, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/85 backdrop-blur-md py-12 border-t-4 border-wood-brown relative z-10 text-center md:text-left text-parchment">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand & Mission */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <img
                            src="/suguna-logo.jpg"
                            alt="Suguna College of Engineering Emblem"
                            width="36"
                            height="36"
                            loading="lazy"
                            className="w-9 h-9 rounded-full object-cover border border-gold-doubloon/50"
                        />
                        <h3 className="text-2xl sm:text-3xl font-pirata text-parchment">
                            ODYSSEY <span className="text-blood-red">2K26</span>
                        </h3>
                    </div>
                    <p className="text-sea-foam text-xs sm:text-sm max-w-sm mb-6 font-cinzel leading-relaxed mx-auto md:mx-0">
                        “Code the future, innovate with purpose, and build technology that changes the world.”
                    </p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a
                            href="https://youtube.com/channel/UCH_oxDI7ozeYCAMVCpr10CQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Suguna College of Engineering YouTube Channel"
                            className="p-2 rounded-full bg-parchment/10 text-sea-foam hover:text-gold-doubloon hover:bg-parchment/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                        >
                            <Youtube size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/sugunacollegeofengineering/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Suguna College of Engineering Instagram"
                            className="p-2 rounded-full bg-parchment/10 text-sea-foam hover:text-gold-doubloon hover:bg-parchment/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://www.facebook.com/p/Suguna-College-of-Engineering-100076156160397/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Suguna College of Engineering Facebook"
                            className="p-2 rounded-full bg-parchment/10 text-sea-foam hover:text-gold-doubloon hover:bg-parchment/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="https://www.sugunace.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Suguna College of Engineering Official Website"
                            className="p-2 rounded-full bg-parchment/10 text-sea-foam hover:text-gold-doubloon hover:bg-parchment/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                        >
                            <Globe size={18} />
                        </a>
                    </div>
                </div>

                {/* College Address */}
                <div>
                    <h4 className="text-gold-doubloon font-pirata text-xl mb-4 tracking-wider flex items-center justify-center md:justify-start gap-1.5">
                        <MapPin size={16} className="text-gold-doubloon" />
                        <span>Address</span>
                    </h4>
                    <address className="not-italic text-sea-foam text-xs sm:text-sm leading-relaxed font-cinzel">
                        Suguna College of Engineering,<br />
                        Nehru Nagar,<br />
                        Kalapatti Main Road,<br />
                        Civil Aerodrome Post,<br />
                        Coimbatore - 641014
                    </address>
                </div>

                {/* Contact Information */}
                <div>
                    <h4 className="text-gold-doubloon font-pirata text-xl mb-4 tracking-wider flex items-center justify-center md:justify-start gap-1.5">
                        <Phone size={16} className="text-gold-doubloon" />
                        <span>Contact Crew</span>
                    </h4>
                    <ul className="text-sea-foam text-xs sm:text-sm font-cinzel space-y-2">
                        <li>
                            <a href="tel:8072714577" className="hover:text-gold-doubloon transition-colors">
                                Sankar VL: +91 8072714577
                            </a>
                        </li>
                        <li>
                            <a href="tel:7397697669" className="hover:text-gold-doubloon transition-colors">
                                Madhan S: +91 7397697669
                            </a>
                        </li>
                        <li>
                            <a href="tel:6385873262" className="hover:text-gold-doubloon transition-colors">
                                Gopinath K: +91 6385873262
                            </a>
                        </li>
                        <li className="pt-2">
                            <a
                                href="mailto:Innovatex7150@gmail.com"
                                className="inline-flex items-center gap-1.5 text-gold-doubloon hover:text-parchment transition-colors underline-offset-2 hover:underline"
                            >
                                <Mail size={14} />
                                <span>Innovatex7150@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs font-cinzel text-parchment/60">
                <p>&copy; 2026 Odyssey Symposium | Suguna College of Engineering.</p>
                <p className="mt-1 text-parchment/40">Designed & Developed by R.Vasudevan - 3rd Year CSE</p>
            </div>
        </footer>
    );
};

export default Footer;
