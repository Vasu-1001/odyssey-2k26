import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ onEnter }) => {
    // Generate stable particle coordinates once
    const particles = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: (i * 8.3) % 100, // percentage across width
            y: (i * 11.7) % 100,
            size: (i % 3) + 2,
            duration: 12 + (i % 6) * 2,
        }));
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-black overflow-hidden flex flex-col items-center justify-center text-white h-[100dvh]"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-[center_top] sm:bg-center bg-no-repeat opacity-30"
                style={{
                    backgroundImage: "url('/landing img.png')",
                    filter: "brightness(1.4)"
                }}
            />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/50 to-black/85" />

            {/* Background Particles (Lightweight) */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/20 pointer-events-none"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Floating Orbs (Static blur to save GPU compositing) */}
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-900/20 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-blue-900/15 rounded-full blur-[60px] pointer-events-none" />

            {/* Top Branding */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-4 sm:top-8 left-0 w-full flex flex-col items-center gap-2 z-50 pointer-events-none px-4"
            >
                <img
                    src="/suguna-logo.jpg"
                    alt="Suguna College of Engineering"
                    width="72"
                    height="72"
                    loading="eager"
                    className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] object-cover"
                />
                <h2 className="text-xs sm:text-base md:text-xl font-cinzel font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-widest uppercase">
                    Suguna College of Engineering
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl mt-12 sm:mt-16">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-wider"
                >
                    Odyssey 2K26
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-4 sm:mt-6 space-y-1 sm:space-y-2"
                >
                    <p className="text-xs sm:text-base md:text-lg font-cinzel text-cyan-200/90 tracking-[0.2em] uppercase font-semibold">
                        Presented by Department of CSE
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-cinzel text-cyan-100/70 tracking-[0.15em] uppercase">
                        National Level Technical Symposium
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 sm:mt-12"
                >
                    <button
                        onClick={onEnter}
                        aria-label="Enter Odyssey 2K26 symposium website"
                        className="group relative px-8 sm:px-12 py-3.5 sm:py-4 bg-transparent border-2 border-cyan-400/80 text-cyan-300 font-cinzel tracking-widest uppercase font-bold text-sm sm:text-base transition-all duration-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] focus:outline-none focus:ring-2 focus:ring-cyan-400 overflow-hidden rounded-sm"
                    >
                        <span className="relative z-10 transition-colors">Step Into The Horizon</span>
                        <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                </motion.div>
            </div>

            {/* Footer Tech Lines */}
            <div className="absolute bottom-6 w-full flex justify-center gap-3 opacity-30 pointer-events-none">
                <div className="w-16 h-[1px] bg-cyan-500" />
                <div className="w-16 h-[1px] bg-purple-500" />
                <div className="w-16 h-[1px] bg-cyan-500" />
            </div>
        </motion.div>
    );
};

export default LandingPage;
