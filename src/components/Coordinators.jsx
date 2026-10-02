import React from 'react';
import { motion } from 'framer-motion';
import { User, Anchor, Compass, Phone } from 'lucide-react';

const coordinatorsList = [
    { id: 1, name: 'Sankar VL', title: 'President', phone: '8072714577', icon: <Compass size={28} /> },
    { id: 2, name: 'Gobinath K', title: 'Secretary', phone: '6385873262', icon: <Anchor size={28} /> },
    { id: 3, name: 'Madhan S', title: 'Treasurer', phone: '7397697669', icon: <User size={28} /> },
    { id: 4, name: 'Anubairavi G', title: 'Vice President', phone: '8056136243', icon: <User size={28} /> },
    { id: 5, name: 'Solairajan N', title: 'Joint Secretary', phone: '9597025378', icon: <User size={28} /> },
    { id: 6, name: 'Mahesh R', title: 'Joint Treasurer', phone: '9585926430', icon: <User size={28} /> },
];

const Coordinators = () => {
    return (
        <section id="coordinators" className="py-16 sm:py-24 relative z-10 flex flex-col items-center justify-center overflow-hidden">
            {/* Standardized Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-7xl font-pirata mb-12 sm:mb-16 text-center text-parchment text-blood-shadow drop-shadow-[4px_4px_0_#000]"
                >
                    The <span className="text-gold-doubloon">Coordinators</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {coordinatorsList.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="bg-parchment/10 backdrop-blur-md p-5 sm:p-6 rounded-lg border border-wood-brown/30 flex items-center gap-4 hover:bg-parchment/20 hover:border-gold-doubloon/40 transition-all duration-300"
                        >
                            {/* Simple Icon Avatar */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-wood-brown flex items-center justify-center border-2 border-gold-doubloon shrink-0">
                                <span className="text-gold-doubloon">{member.icon}</span>
                            </div>

                            <div className="text-left flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-pirata text-parchment tracking-wide truncate">{member.name}</h3>
                                <p className="font-cinzel text-xs text-gold-doubloon uppercase tracking-wider">{member.title}</p>
                                <a
                                    href={`tel:${member.phone}`}
                                    className="inline-flex items-center gap-1.5 font-cinzel text-xs text-parchment/80 hover:text-gold-doubloon transition-colors mt-1 focus:outline-none focus:underline"
                                    aria-label={`Call coordinator ${member.name} at ${member.phone}`}
                                >
                                    <Phone size={12} className="text-gold-doubloon shrink-0" />
                                    <span>{member.phone}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coordinators;
