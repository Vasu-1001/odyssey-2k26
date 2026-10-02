import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, X } from 'lucide-react';

const Legend = () => {
    const [showPoster, setShowPoster] = useState(false);

    useEffect(() => {
        if (!showPoster) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setShowPoster(false);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showPoster]);

    return (
        <section id="legend" className="min-h-[80vh] flex items-center justify-center py-16 sm:py-20 relative z-10 overflow-hidden">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-pirata text-parchment text-gold-glow drop-shadow-[5px_5px_0px_#000]">
                        Event <span className="text-blood-red">Details</span>
                    </h2>
                    <div className="h-1 w-24 sm:w-32 bg-gold-doubloon mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left: The Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="glass-panel p-6 sm:p-8 md:p-10 rounded-lg border border-gold-doubloon/30 relative group"
                    >
                        <div className="absolute -top-6 -left-6 text-gold-doubloon/20 animate-spin-slow pointer-events-none">
                            <Compass size={80} />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-pirata text-gold-doubloon mb-4 sm:mb-6">Information</h3>

                        <p className="text-parchment/80 font-cinzel leading-relaxed sm:leading-loose text-base sm:text-lg mb-6">
                            Our College Symposium is a platform where talent meets opportunity with <span className="text-blood-red font-bold">Odyssey 2K26</span>. The symposium encourages teamwork, leadership, and knowledge sharing.
                        </p>

                        <div className="text-parchment/80 font-cinzel leading-relaxed sm:leading-loose text-base sm:text-lg space-y-2">
                            <p className="text-gold-doubloon font-bold">Registration Amount:</p>
                            <p className="text-gold-doubloon/90">• Individual Registration Fee – ₹250 per head</p>
                            <p className="text-gold-doubloon/90">• Team Registration Fee – ₹200 per head</p>
                        </div>
                    </motion.div>

                    {/* Right: Visual/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="relative h-[320px] sm:h-[400px] w-full flex items-center justify-center"
                    >
                        {/* Glowing Orb / Treasure */}
                        <div className="absolute w-64 h-64 bg-gold-doubloon/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

                        <div className="relative z-10 w-full h-full border-4 border-wood-brown bg-black/40 p-3 sm:p-4 rounded-lg transform sm:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl flex flex-col items-center justify-center">
                            <img
                                src="odd logo.jpeg"
                                alt="Odyssey 2K26 Logo - Click to view event poster"
                                loading="lazy"
                                className="w-full h-full object-contain sm:object-cover opacity-85 hover:opacity-100 transition-opacity duration-300 rounded border border-white/10 cursor-pointer"
                                onClick={() => setShowPoster(true)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPoster(true)}
                                className="mt-2 text-xs sm:text-sm text-gold-doubloon font-cinzel underline hover:text-parchment transition-colors"
                            >
                                Click to View Full Poster
                            </button>
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <p className="text-lg sm:text-xl text-gold-doubloon font-cinzel italic">
                        "A journey of knowledge, innovation & experience."
                    </p>
                </motion.div>

                {/* Modal for Poster */}
                <AnimatePresence>
                    {showPoster && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                            onClick={() => setShowPoster(false)}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Event Poster Modal"
                        >
                            <div
                                className="relative w-fit max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setShowPoster(false)}
                                    aria-label="Close poster modal"
                                    className="absolute -top-3 -right-3 text-white bg-blood-red/90 p-2 rounded-full hover:bg-blood-red transition-colors shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                                >
                                    <X size={20} />
                                </button>
                                <img
                                    src="poster.jpeg"
                                    alt="Odyssey 2K26 Official Event Poster"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg border-2 border-gold-doubloon shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Legend;
