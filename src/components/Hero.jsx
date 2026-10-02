
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ship } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const yShip = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={ref} id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">



            {/* Animated Waves (CSS or SVG) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-ocean to-transparent z-10" />

            {/* Floating Ship Icon / Image with Parallax */}
            <motion.div
                style={{ y: yShip, opacity: 0.15 }}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            >
                <Ship size={500} className="text-deep-ocean drop-shadow-2xl animate-float-ship will-change-transform" />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-2"
                >
                    <img 
                        src="/suguna-logo.jpg" 
                        alt="Suguna College of Engineering Logo" 
                        width="96" 
                        height="96" 
                        loading="eager"
                        className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain rounded-full border-2 border-gold-doubloon shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
                    />
                    <h2 className="font-cinzel font-bold text-base sm:text-xl md:text-3xl text-parchment text-gold-glow tracking-wider sm:tracking-widest text-center max-w-xl">
                        SUGUNA COLLEGE OF ENGINEERING
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ y: yText }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-pirata tracking-wide sm:tracking-[0.06em] relative select-none py-2 my-1"
                >
                    {/* Odyssey with clean radiant gold gradient */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-yellow-300 to-amber-500 inline-block">
                        Odyssey
                    </span>{' '}
                    {/* 2K26 with crimson/ruby gradient */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-rose-500 to-red-600 inline-block animate-sway relative z-10 tracking-wider">
                        2K26
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-transparent via-gold-doubloon to-transparent my-4 sm:my-6 max-w-2xl mx-auto"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="text-base sm:text-xl md:text-2xl font-cinzel text-parchment-dark tracking-wider sm:tracking-widest uppercase"
                >
                    presented by  <span className="text-gold-doubloon font-bold"><br />Department of Computer Science and Engineering</span>
                </motion.p>

                <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 justify-center items-center text-sea-foam font-rye tracking-wider">
                    <p className="text-base sm:text-xl text-parchment">
                        A National Level Technical Symposium
                    </p>

                    <p className="text-lg sm:text-2xl text-gold-doubloon border-y-2 border-wood-brown py-1.5 sm:py-2 px-4 sm:px-6 bg-black/30 backdrop-blur-sm rounded-sm">
                        March 02, 2K26
                    </p>

                    <p className="text-lg sm:text-2xl text-gold-doubloon border-y-2 border-wood-brown py-1.5 sm:py-2 px-4 sm:px-6 bg-black/30 backdrop-blur-sm rounded-sm">
                        Time: 9:00 AM
                    </p>

                    <p className="text-base sm:text-xl text-parchment font-bold animate-pulse-slow mt-1 sm:mt-2">
                        WIN EXCITING CASH PRIZES !!!
                    </p>
                </div>

                <motion.a
                    href="#events"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #d97706" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 sm:mt-12 px-8 sm:px-10 py-3.5 sm:py-4 bg-wood-brown border-2 border-gold-doubloon text-gold-doubloon font-pirata text-xl sm:text-2xl tracking-widest rounded-sm hover:bg-gold-doubloon hover:text-wood-brown transition-all duration-300 shadow-xl inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-doubloon"
                >
                    Event Details
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
