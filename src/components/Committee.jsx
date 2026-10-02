import React from 'react';
import { motion } from 'framer-motion';

const Committee = () => {
    return (
        <section id="committee" className="py-16 sm:py-20 overflow-hidden relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4">

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-7xl font-pirata mb-12 sm:mb-20 text-center text-parchment text-blood-shadow relative z-20 drop-shadow-[4px_4px_0_#000]"
            >
                The <span className="text-blood-red">Crew</span>
            </motion.h2>

            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[480px] md:h-[480px] flex items-center justify-center z-10">

                {/* Captain's Wheel Aesthetic (CSS Border Tricks) */}
                <div className="absolute w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] md:w-[500px] md:h-[500px] border-4 sm:border-8 border-wood-brown rounded-full opacity-80 shadow-2xl bg-deep-ocean/30 backdrop-blur-sm"></div>

                {/* Central Core (The Captain) */}
                <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-wood-brown rounded-full z-10 flex items-center justify-center shadow-2xl border-2 sm:border-4 border-gold-doubloon overflow-hidden">
                    <img
                        src="innovetex.jpeg"
                        alt="Innovatex Crew Emblem"
                        loading="lazy"
                        width="144"
                        height="144"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Orbit 1 - Quartermasters */}
                <div className="absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] border-2 border-dashed border-gold-doubloon/30 rounded-full animate-spin-slow will-change-transform pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 rounded-full overflow-hidden border-2 border-gold-doubloon shadow-lg">
                        <div className="w-full h-full bg-parchment opacity-50"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 rounded-full overflow-hidden border-2 border-gold-doubloon shadow-lg">
                        <div className="w-full h-full bg-parchment opacity-50"></div>
                    </div>
                </div>

                {/* Orbit 2 - Boatswains (Reverse) */}
                <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[420px] md:h-[420px] border border-gold-doubloon/20 rounded-full animate-spin-slow will-change-transform [animation-direction:reverse] [animation-duration:20s] pointer-events-none">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 bg-gray-800 rounded-full overflow-hidden border-2 border-blood-red shadow-lg">
                        <div className="w-full h-full bg-parchment opacity-50"></div>
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 bg-gray-800 rounded-full overflow-hidden border-2 border-blood-red shadow-lg">
                        <div className="w-full h-full bg-parchment opacity-50"></div>
                    </div>
                </div>
            </div>

            <p className="mt-12 sm:mt-16 text-parchment/80 font-cinzel text-center relative z-20 max-w-lg px-4 bg-black/60 p-4 rounded-sm border border-wood-brown text-sm sm:text-base">
                "Part of the ship, part of the crew. Dedication beyond the horizon."
            </p>

        </section>
    );
};

export default Committee;
