import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(textRef1.current, 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
        )
        .fromTo(textRef2.current, 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, 
            "-=0.7"
        )
        .fromTo(videoRef.current,
            { scale: 0.8, opacity: 0, borderRadius: '50px' },
            { scale: 1, opacity: 1, borderRadius: '24px', duration: 1.5, ease: "power3.inOut" },
            "-=0.5"
        );
    }, []);

    return (
        <div id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center z-10 relative pointer-events-none mb-8">
                <div className="overflow-hidden">
                    <h1 ref={textRef1} className="font-extrabold text-5xl md:text-7xl lg:text-9xl text-white tracking-tighter uppercase leading-none">
                        Creative
                    </h1>
                </div>
                <div className="overflow-hidden mt-[-10px] md:mt-[-20px]">
                    <h1 ref={textRef2} className="font-extrabold text-5xl md:text-7xl lg:text-9xl text-brand tracking-tighter uppercase leading-none text-glow">
                        Animator
                    </h1>
                </div>
            </div>

            <div ref={videoRef} className="relative w-full max-w-[1200px] aspect-video z-0 shadow-2xl glass-panel overflow-hidden mx-auto">
                {/* Decorative overlay for video */}
                <div className="absolute inset-0 z-10 pointer-events-none border border-white/10 rounded-3xl"></div>
                
                <video 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    src="neaj_02.mp4" 
                    className="w-full h-full object-cover scale-[1.02]"
                />
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
                <span className="text-sm uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-[40px] bg-gradient-to-b from-brand to-transparent"></div>
            </div>
        </div>
    );
};

export default Home;
