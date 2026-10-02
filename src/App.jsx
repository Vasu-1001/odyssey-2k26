import React, { useState, useEffect, Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Legend from './components/Legend';
import Committee from './components/Committee';
import Lords from './components/Lords';
import Coordinators from './components/Coordinators';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Mist from './components/Mist';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';

// Thematic Error Boundary for bulletproof error resilience
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Symposium UI caught an unexpected error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0f172a] text-[#d4c5a3] flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="text-4xl sm:text-6xl font-pirata text-gold-doubloon mb-4">
                        Rough Waters Ahead!
                    </h1>
                    <p className="font-cinzel text-base sm:text-lg max-w-md mb-8 text-[#94a3b8]">
                        The ship encountered an unexpected wave. Please refresh your sails to continue the journey.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-[#451a03] text-[#fbbf24] font-cinzel font-bold border-2 border-[#fbbf24] rounded-sm hover:bg-black transition-colors"
                    >
                        Restart Voyage (Refresh)
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    const [showLanding, setShowLanding] = useState(true);

    // Support direct hash navigation (e.g. /#events, /#register)
    const handleEnter = () => {
        setShowLanding(false);
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    };

    // If page is loaded with direct anchor link, handle smooth transition
    useEffect(() => {
        const handleHashChange = () => {
            if (showLanding && window.location.hash) {
                setShowLanding(false);
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [showLanding]);

    return (
        <ErrorBoundary>
            <AnimatePresence mode="wait">
                {showLanding && (
                    <LandingPage key="landing" onEnter={handleEnter} />
                )}
            </AnimatePresence>

            {!showLanding && (
                <div className="min-h-screen text-parchment selection:bg-blood-red selection:text-white relative">
                    {/* Fixed Atmospheric Layers */}
                    <Particles />
                    <Mist />
                    <Navbar />

                    <main id="main-content" className="relative z-10 pt-16">
                        <Hero />
                        <About />
                        <Legend />
                        <Events />
                        <Committee />
                        <Lords />
                        <Coordinators />
                        <RegistrationForm />
                    </main>

                    <Footer />
                </div>
            )}
        </ErrorBoundary>
    );
}

export default App;
