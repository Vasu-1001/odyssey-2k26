import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Skull } from 'lucide-react';

const EventCard = ({ title, category, icon, delay, onClick }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        // Only run tilt animation on devices with a mouse/fine pointer
        if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: delay * 0.06, duration: 0.35 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details and rules for ${title}`}
            className="group relative bg-[#f5e6c8] border-4 border-wood-brown p-5 sm:p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-gold-doubloon rounded-sm"
            onClick={onClick}
        >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-old-map opacity-50 pointer-events-none mix-blend-multiply rounded-sm" />

            {/* Burned Edges Effect (CSS Shadow) */}
            <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(69,26,3,0.4)] pointer-events-none rounded-sm" />

            {/* Nail/Pin */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gray-800 rounded-full shadow-md z-20 border border-gray-600" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div
                    className="mb-3 sm:mb-4 text-wood-brown p-3 border-2 border-wood-brown rounded-full bg-parchment-dark/30 transform transition-transform duration-300 group-hover:scale-110"
                >
                    {icon}
                </div>

                <h3
                    className="text-xl sm:text-2xl font-pirata text-wood-brown mb-2 uppercase tracking-wide group-hover:text-blood-red transition-colors"
                >
                    {title}
                </h3>

                <div className="border-t-2 border-dashed border-wood-brown/50 w-full my-2"></div>

                <span
                    className="font-cinzel font-bold text-xs text-blood-red bg-parchment-dark/20 px-3 py-1 rounded-sm border border-blood-red/30"
                >
                    {category}
                </span>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-cinzel text-wood-brown/80 italic">
                    "Click to View Rules"
                </p>

                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 pointer-events-none">
                    <Skull className="text-blood-red w-5 h-5 animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
