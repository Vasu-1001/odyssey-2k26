import React from 'react';

const Mist = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
            {/* Ambient drift fog layers using self-contained CSS radial gradients */}
            <div className="absolute -inset-[30%] opacity-20 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.08),_transparent_60%)] animate-drift-slow will-change-transform" />
            <div className="absolute -inset-[30%] opacity-15 bg-[radial-gradient(ellipse_at_bottom,_rgba(148,163,184,0.1),_transparent_55%)] animate-drift-reverse will-change-transform" />

            {/* Vignette Overlay for darker edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
        </div>
    );
};

export default Mist;
