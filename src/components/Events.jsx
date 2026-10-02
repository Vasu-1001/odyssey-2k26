import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { Sword, Map, Skull, Anchor, Compass, Flag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const eventsData = [
    // Technical
    { id: 1, title: 'Blind Coding', category: 'Technical', icon: <Skull />, description: 'One participant codes without seeing the screen.\n • Individual participation.\n• One codes, one guides verbally.\n• No physical help.' },
    { id: 2, title: 'UI Redesign', category: 'Technical', icon: <Map />, description: 'Redesign an existing interface creatively.\n\n• Individual participation\n• UI given by organizers\n• Limited tools allowed\n• Presentation at end.' },
    { id: 4, title: 'AI Prompt Battle', category: 'Technical', icon: <Compass />, description: 'Write effective AI prompts to generate the best output.\n• Individual participation\n• Problem statement given on spot\n• No pre-written prompts\n• Judging based on output quality' },
    { id: 5, title: 'Paper Vista', category: 'Technical', icon: <Flag />, description: 'Tell your tale! Present your innovative ideas.\n• Team of min 2 or more\n• 10 minutes presentation + Q&A\n• Content originality required.' },
    { id: 6, title: 'Web Wizard', category: 'Technical', icon: <Anchor />, description: 'Build a basic mini website within a limited time.\n\n• Individual participation.\n• HTML/CSS/JS allowed.\n• Internet restricted.\n• Judged on UI & functionality.' },
    { id: 7, title: 'Debug Arena', category: 'Technical', icon: <Sword />, description: 'Identify and fix errors in given code.\n\n• Individual participation\n• No internet\n• Partial fixes get marks\n• Faster completion scores higher.' },

    // Non-Technical
    { id: 8, title: 'Art Attack', category: 'Non-Technical', icon: <Skull />, description: 'Create a drawing based on the given theme within limited time.\n• Individual participation\n• Theme announced at start\n• Only basic drawing materials allowed\n• Judging based on creativity & relevance' },
    { id: 9, title: 'Mind Maze – Connection', category: 'Non-Technical', icon: <Map />, description: 'Logical game where participants connect clues to find the final answer.\n• Team of 2–3 members\n• Multiple connection rounds\n• No mobile phones\n• Faster correct answers score higher' },
    { id: 10, title: 'Treasure Hunt', category: 'Non-Technical', icon: <Compass />, description: 'Teams solve clues and reach the final destination.\n• Team of 4 members\n• Mobile usage limited\n• Clues must be followed in order\n• First team wins' },
    { id: 11, title: 'Lens Lore', category: 'Non-Technical', icon: <Flag />, description: 'Capture photos based on a given theme.\n\n• Individual participation\n• Theme announced on spot\n• Mobile/camera allowed\n• No heavy editing' },
    { id: 12, title: 'Mehandhi Magic', category: 'Non-Technical', icon: <Anchor />, description: 'Show creativity through mehndi designs.\n\n• Individual participation\n• Freehand designs only\n• No stencils or reference images\n• Judged on neatness & creativity' },
    { id: 13, title: 'Melody Mania', category: 'Non-Technical', icon: <Sword />, description: 'An event where participants perform songs and are judged based on their voice and overall performance.\n• The competition can be Solo / Duet (as decided by organizers)\n• Each participant/team will be given 3–5 minutes to perform\n• Exceeding the time limit may lead to negative marks\n• Participants must report 15 minutes before their slot\n• The decision of the judges will be final' },

    // Games
    { id: 14, title: 'E Sports – FF / COD / BGMI', category: 'Gaming', icon: <Sword />, description: 'Competitive gaming event to test skills and strategy.\n• Team/solo as per game\n• No hacks or emulators\n• Organizer settings apply\n• Toxic behavior → disqualification' },
];

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Lock body scroll and listen for ESC key when modal is open
    useEffect(() => {
        if (!selectedEvent) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedEvent(null);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedEvent]);

    const categories = ['Technical', 'Non-Technical', 'Gaming'];

    return (
        <section id="events" className="py-16 sm:py-20 relative z-10">
            {/* Standardized Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-6xl md:text-8xl font-pirata mb-12 sm:mb-20 text-center text-parchment text-gold-glow drop-shadow-[5px_5px_0px_#000]"
                >
                    Bounty <span className="text-blood-red">Board</span>
                </motion.h2>

                {categories.map((cat) => (
                    <div key={cat} className="mb-12 sm:mb-20 glass-panel p-4 sm:p-8 rounded-lg">
                        <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                            <div className="h-[2px] bg-gold-doubloon flex-grow"></div>
                            <h3 className="text-xl sm:text-3xl font-pirata text-gold-doubloon px-3 sm:px-4 border-2 border-gold-doubloon py-1 sm:py-2 rounded-sm bg-deep-ocean/50 backdrop-blur-md">
                                {cat} Sector
                            </h3>
                            <div className="h-[2px] bg-gold-doubloon flex-grow"></div>
                        </div>

                        <div className={`gap-6 sm:gap-8 ${cat === 'Gaming' ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                            {eventsData.filter(e => e.category === cat).map((event, index) => (
                                cat === 'Gaming' ? (
                                    <div key={event.id} className="w-full max-w-sm">
                                        <EventCard
                                            {...event}
                                            delay={index}
                                            onClick={() => setSelectedEvent(event)}
                                        />
                                    </div>
                                ) : (
                                    <EventCard
                                        key={event.id}
                                        {...event}
                                        delay={index}
                                        onClick={() => setSelectedEvent(event)}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - The Captain's Table */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedEvent(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Details for ${selectedEvent.title}`}
                    >
                        <motion.div
                            initial={{ y: 50, scale: 0.95 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 50, scale: 0.95 }}
                            className="w-full max-w-lg relative"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Olai Chuvadi / Palm Leaf Styling */}
                            <div className="relative w-full bg-[#e0cda7] rounded-lg shadow-2xl flex flex-col items-center text-center p-5 sm:p-8 max-h-[85vh] overflow-y-auto custom-scrollbar border-y-4 border-[#8b5a2b]"
                                style={{
                                    backgroundImage: `repeating-linear-gradient(90deg, 
                                        rgba(139, 90, 43, 0.05) 0px, 
                                        rgba(139, 90, 43, 0.05) 2px, 
                                        transparent 2px, 
                                        transparent 40px),
                                        linear-gradient(to right, #e0cda7, #d4b881, #e0cda7)`
                                }}>

                                {/* Binding Holes (Desktop only to prevent mobile cramping) */}
                                <div className="hidden sm:block absolute top-1/2 left-3 w-5 h-5 rounded-full bg-[#3e2723] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-20"></div>
                                <div className="hidden sm:block absolute top-1/2 right-3 w-5 h-5 rounded-full bg-[#3e2723] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-20"></div>

                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    aria-label="Close event details"
                                    className="absolute top-3 right-3 text-[#3e2723] hover:text-red-700 font-bold text-2xl z-50 p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5a2b] rounded"
                                >
                                    ✕
                                </button>

                                <div className="mt-2 border-b-2 border-[#5d4037] pb-2 w-full max-w-md mx-auto">
                                    <h3 className="text-2xl sm:text-4xl font-pirata text-[#3e2723] mb-1 tracking-wider">{selectedEvent.title}</h3>
                                </div>

                                <div className="mt-3 mb-5">
                                    <span className="inline-block px-4 py-1 bg-[#5d4037] text-[#e0cda7] text-xs sm:text-sm font-cinzel font-bold rounded-full uppercase tracking-widest shadow-sm">
                                        {selectedEvent.category}
                                    </span>
                                </div>

                                <div className="text-[#3e2723] mb-6 font-cinzel text-sm sm:text-base leading-relaxed sm:leading-loose font-semibold max-w-xl whitespace-pre-line text-left">
                                    <p>{selectedEvent.description}</p>
                                </div>

                                <button
                                    className="w-full max-w-sm py-3 bg-[#5d4037] text-[#e0cda7] font-pirata text-xl sm:text-2xl tracking-widest hover:bg-[#3e2723] hover:scale-102 transition-all duration-300 rounded-lg shadow-lg border border-[#8b5a2b] mt-auto focus:outline-none focus:ring-2 focus:ring-[#3e2723]"
                                    onClick={() => {
                                        setSelectedEvent(null);
                                        const regSection = document.getElementById('register');
                                        if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Events;
