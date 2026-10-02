import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Map, Scroll, Skull, Crown, User, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    setScrolled(window.scrollY > 50);
                    timeoutId = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // Scroll locking when drawer is open & ESC key support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    // Active Section Tracking via IntersectionObserver
    useEffect(() => {
        const sectionIds = ['hero', 'about', 'legend', 'events', 'committee', 'lords', 'coordinators', 'register'];
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, []);

    const navLinks = [
        { name: 'Home', id: 'hero', icon: <Anchor size={18} /> },
        { name: 'About', id: 'about', icon: <Scroll size={18} /> },
        { name: 'Event Details', id: 'legend', icon: <Map size={18} /> },
        { name: 'Bounties', id: 'events', icon: <Crown size={18} /> },
        { name: 'The Crew', id: 'committee', icon: <Skull size={18} /> },
        { name: 'The Lords', id: 'lords', icon: <Crown size={18} /> },
        { name: 'Coordinators', id: 'coordinators', icon: <User size={18} /> },
        { name: 'Join Us', id: 'register', highlight: true },
    ];

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav 
                aria-label="Main Navigation"
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 backdrop-blur-md ${
                    scrolled ? 'bg-black/80 shadow-2xl py-2' : 'bg-black/30 shadow-md py-2.5'
                } border-b border-white/10`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative z-50">

                    {/* Left Side: Menu Button */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            aria-label="Open Navigation Menu"
                            aria-expanded={isOpen}
                            className="text-parchment hover:text-gold-doubloon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-doubloon transition-colors p-1.5 rounded flex items-center gap-2 group"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={24} className="group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-all" />
                            <span className="hidden sm:inline-block font-cinzel font-bold text-sm tracking-widest text-gold-glow">MENU</span>
                        </button>
                    </div>

                    {/* Right Side: Join Us Button */}
                    <div className="flex items-center">
                        <a
                            href="#register"
                            className="bg-blood-red text-parchment px-3.5 py-1.5 rounded border-2 border-wood-brown hover:bg-red-900 active:scale-95 hover:scale-105 shadow-lg font-cinzel font-bold text-xs tracking-widest transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-doubloon"
                        >
                            JOIN US
                        </a>
                    </div>
                </div>
            </nav>

            {/* Sidebar Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[65]"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation Menu"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 h-full w-[85vw] max-w-xs sm:w-80 bg-deep-ocean border-r border-wood-brown shadow-2xl z-[70] overflow-y-auto flex flex-col"
                            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')" }}
                        >
                            {/* Drawer Header */}
                            <div className="p-5 sm:p-6 flex justify-between items-center border-b border-wood-brown/30 bg-black/30">
                                <span className="font-pirata text-2xl text-gold-doubloon tracking-wide flex items-center gap-2">
                                    <Anchor size={20} className="text-gold-doubloon" /> Navigation
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close Navigation Menu"
                                    className="text-parchment hover:text-blood-red p-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-doubloon"
                                >
                                    <X size={26} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 py-6 px-4 sm:px-6 space-y-1.5">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <a
                                            key={link.name}
                                            href={`#${link.id}`}
                                            onClick={handleNavClick}
                                            className={`flex items-center gap-3.5 font-cinzel font-bold text-base sm:text-lg tracking-wider transition-all duration-200 w-full p-3 sm:p-3.5 rounded-lg border group ${
                                                link.highlight
                                                    ? 'bg-blood-red/20 text-gold-doubloon border-blood-red/60 hover:bg-blood-red/30'
                                                    : isActive
                                                    ? 'bg-gold-doubloon/15 text-gold-doubloon border-gold-doubloon/40 shadow-sm'
                                                    : 'text-parchment border-transparent hover:bg-white/5 hover:text-gold-doubloon hover:border-wood-brown/30'
                                            }`}
                                        >
                                            {link.icon && (
                                                <span className={`${isActive ? 'text-gold-doubloon' : 'text-sea-foam'} group-hover:text-gold-doubloon transition-colors`}>
                                                    {link.icon}
                                                </span>
                                            )}
                                            <span>{link.name}</span>
                                            {isActive && <span className="ml-auto text-xs text-gold-doubloon">✦</span>}
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Drawer Footer Decoration */}
                            <div className="p-4 sm:p-6 text-center opacity-40 border-t border-wood-brown/20">
                                <div className="mx-auto w-12 h-1 bg-gold-doubloon mb-2 rounded-full"></div>
                                <p className="font-uncial text-xs sm:text-sm text-parchment">Odyssey 2K26</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
