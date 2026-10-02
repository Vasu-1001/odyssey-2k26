import React from 'react';
import { motion } from 'framer-motion';
import { Scroll } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-[60vh] flex items-center justify-center py-20 relative z-10 overflow-hidden">

            {/* Background Decor - Global Fixed BG Used */}

            {/* Standardized Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Background Decor */}
            <div className="absolute -left-20 top-20 text-wood-brown/20 rotate-12 z-0">
                <Scroll size={300} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-6xl md:text-7xl font-pirata mb-8 sm:mb-10 text-parchment text-blood-shadow drop-shadow-2xl"
                >
                     <span className="text-gold-doubloon">About</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="parchment-panel burnt-edge p-5 sm:p-10 md:p-14 relative shadow-2xl"
                >
                    {/* Corner Screws/Rivets */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-wood-brown rounded-full opacity-70"></div>
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-wood-brown rounded-full opacity-70"></div>
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-wood-brown rounded-full opacity-70"></div>
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-wood-brown rounded-full opacity-70"></div>

                    <p className="text-base sm:text-xl md:text-2xl text-wood-brown font-cinzel leading-relaxed sm:leading-loose font-bold relative z-10">
                       Welcome, brave souls, to the grand voyage of the Department of Computer Science and Engineering.
                        <span className="text-blood-red font-pirata mx-1.5 sm:mx-2 text-2xl sm:text-3xl">Odyssey 2K26</span>
                       calls upon those bold enough to explore the unknown. Guided by code as our compass and innovation as our true north, we journey beyond boundaries and dive into the limitless ocean of creativity.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="w-20 h-20 border-4 border-blood-red rounded-full flex items-center justify-center rotate-[-12deg] opacity-80 cursor-pointer"
                        >
                            <span className="text-blood-red font-pirata text-xs text-center leading-none">SEAL<br />OF<br />CODE</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
