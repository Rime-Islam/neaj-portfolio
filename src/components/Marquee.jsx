import React from 'react';

const Marquee = () => {
    return (
        <div className="py-10 bg-brand text-black overflow-hidden relative flex z-20 border-y border-white/20 transform -rotate-2 scale-105 my-24">
            <div className="whitespace-nowrap animate-marquee flex items-center font-extrabold text-2xl md:text-4xl uppercase tracking-widest">
                <span className="mx-4">2D ANIMATION •</span>
                <span className="mx-4">CHARACTER DESIGN •</span>
                <span className="mx-4">STORYBOARDING •</span>
                <span className="mx-4">VISUAL EFFECTS •</span>
                <span className="mx-4">BACKGROUND ART •</span>
                <span className="mx-4">VIDEO EDITING •</span>
                <span className="mx-4">2D ANIMATION •</span>
                <span className="mx-4">CHARACTER DESIGN •</span>
                <span className="mx-4">STORYBOARDING •</span>
                <span className="mx-4">VISUAL EFFECTS •</span>
                <span className="mx-4">BACKGROUND ART •</span>
                <span className="mx-4">VIDEO EDITING •</span>
            </div>
        </div>
    );
};

export default Marquee;
