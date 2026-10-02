import React from 'react';
import { motion } from 'framer-motion';
import { User, Anchor, Crown, Sword } from 'lucide-react';

const coordinatorsData = [
    { id: 1, name: 'Dr. Rajesh Kannan', role: 'Ph.D, M.E', designation: 'Head of Department', icon: <Crown size={32} /> },
    { id: 2, name: 'Mrs. P. Nandhini', role: 'M.E', designation: 'Assistant Professor', icon: <Anchor size={32} /> },
    { id: 3, name: 'Mrs. M. Madhunisha', role: 'M.E, B.TECH', designation: 'Assistant Professor', icon: <User size={32} /> },
    { id: 4, name: 'Mr. U. Surya Prakash', role: 'M.E', designation: 'Assistant Professor', icon: <Sword size={32} /> },
];

const Lords = () => {
    return (
        <section id="lords" className="py-16 sm:py-24 relative z-10 flex flex-col items-center justify-center overflow-hidden">
            {/* Standardized Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-7xl font-pirata mb-12 sm:mb-20 text-center text-parchment text-blood-shadow drop-shadow-[4px_4px_0_#000]"
                >
                    The Ship <span className="text-gold-doubloon"> Crew Members</span>
                </motion.h2>

                <div className="flex flex-col items-center gap-8 sm:gap-10">
                    {/* Captain (First Member) - Centered */}
                    <div className="w-full max-w-md">
                        {coordinatorsData.slice(0, 1).map((member) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="glass-panel p-6 sm:p-8 rounded-sm border md:border-2 border-wood-brown/50 flex flex-col items-center text-center relative group hover:border-gold-doubloon/50 transition-colors duration-300"
                            >
                                {/* Medallion/Avatar Frame */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-full border-4 border-gold-doubloon bg-deep-ocean/80 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-shadow duration-300">
                                    <span className="text-parchment group-hover:text-gold-doubloon transition-colors duration-300">
                                        {member.icon}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-pirata text-gold-doubloon tracking-wide mb-2">{member.name}</h3>
                                <p className="font-cinzel text-xs sm:text-sm text-sea-foam uppercase tracking-widest">{member.role}</p>

                                {/* Decorative divider */}
                                <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-wood-brown to-transparent my-4"></div>

                                <p className="text-xs text-parchment/80 font-cinzel italic">{member.designation}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Crew (Remaining Members) - Grid of 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full">
                        {coordinatorsData.slice(1).map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 1) * 0.1, duration: 0.5 }}
                                className="glass-panel p-6 sm:p-8 rounded-sm border md:border-2 border-wood-brown/50 flex flex-col items-center text-center relative group hover:border-gold-doubloon/50 transition-colors duration-300"
                            >
                                {/* Medallion/Avatar Frame */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-full border-4 border-gold-doubloon bg-deep-ocean/80 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-shadow duration-300">
                                    <span className="text-parchment group-hover:text-gold-doubloon transition-colors duration-300">
                                        {member.icon}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-pirata text-gold-doubloon tracking-wide mb-2">{member.name}</h3>
                                <p className="font-cinzel text-xs sm:text-sm text-sea-foam uppercase tracking-widest">{member.role}</p>

                                {/* Decorative divider */}
                                <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-wood-brown to-transparent my-4"></div>

                                <p className="text-xs text-parchment/80 font-cinzel italic">{member.designation}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lords;
