import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Process = () => {
    const containerRef = useRef(null);

    const steps = [
        {
            num: "01",
            title: "Concept & Ideas",
            desc: "Brainstorming the core story, character concepts, and visual style.",
            color: "from-blue-500/20 to-transparent",
            borderColor: "border-blue-500/30"
        },
        {
            num: "02",
            title: "Storyboarding",
            desc: "Mapping out the scenes, camera angles, and pacing of the animation.",
            color: "from-purple-500/20 to-transparent",
            borderColor: "border-purple-500/30"
        },
        {
            num: "03",
            title: "Animation",
            desc: "Bringing the illustrations to life frame by frame with smooth motion.",
            color: "from-brand/20 to-transparent",
            borderColor: "border-brand/30"
        },
        {
            num: "04",
            title: "Final Edit",
            desc: "Adding sound effects, music, compositing, and final polish.",
            color: "from-orange-500/20 to-transparent",
            borderColor: "border-orange-500/30"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".process-step",
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.2, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="py-24 bg-[#050505] relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-20 md:mb-28">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-4">Workflow</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">The <span className="text-brand">Process</span></h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                    {/* Connecting Line (hidden on mobile, visible on lg) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="process-step relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className={`w-32 h-32 rounded-full border-4 ${step.borderColor} bg-gradient-to-br ${step.color} bg-[#111] glass-panel shadow-2xl flex items-center justify-center flex-shrink-0 mb-8 transform transition-transform hover:scale-110 duration-300`}>
                                <span className="text-4xl font-extrabold text-white/80 font-outfit tracking-tighter">{step.num}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-brand/5 blur-[150px] pointer-events-none rounded-tr-full"></div>
        </div>
    );
};

export default Process;
