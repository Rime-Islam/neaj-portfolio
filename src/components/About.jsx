import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { opacity: 0, x: -100, rotate: -10 },
                { 
                    opacity: 1, 
                    x: 0, 
                    rotate: 0,
                    duration: 1.5, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(contentRef.current.children,
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="about" ref={sectionRef} className="min-h-screen py-24 flex items-center justify-center bg-[#050505] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-start" ref={imageRef}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <img 
                                className="w-[300px] md:w-[400px] lg:w-[450px] aspect-square object-cover rounded-full border-4 border-white/5 relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                                src="https://i.ibb.co/Bgc7Pzh/Whats-App-Image-2024-01-12-at-10-29-52-PM-1.jpg" 
                                alt="Neaj" 
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-[#111] border border-white/10 px-8 py-4 rounded-full shadow-xl z-20 animate-bounce">
                                <p className="text-brand font-bold uppercase tracking-widest text-sm">Animator</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div ref={contentRef} className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-4">About Me</h2>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                Hello, <br />
                                <span className="text-brand block mt-2 text-glow">
                                    <Typewriter
                                        options={{
                                            strings: ['I am a professional 2D animator❤️', 'I create amazing cartoons!', 'I design visual stories.'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                        </div>

                        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                            With a passion for storytelling and a keen eye for detail, I specialize in bringing characters and worlds to life. If you need any services to visualize your ideas, I'm here to help.
                        </p>

                        <div className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-wider text-white/50 mb-2">My Skills</p>
                                <ul className="flex flex-wrap gap-2 text-sm font-medium">
                                    <li className="bg-white/10 px-3 py-1 rounded-full">Characters Design</li>
                                    <li className="bg-brand/20 text-brand px-3 py-1 rounded-full border border-brand/20">Animation</li>
                                    <li className="bg-white/10 px-3 py-1 rounded-full">Background Design</li>
                                    <li className="bg-white/10 px-3 py-1 rounded-full">Video Editing</li>
                                    <li className="bg-white/10 px-3 py-1 rounded-full">Graphics Design</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <a href="https://www.youtube.com/@neajscartoonchannel" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors border border-red-500/20">
                                    <img className="w-6" src="https://i.ibb.co/sWFvw90/Screenshot-2024-01-03-020800-removebg-preview.png" alt="youtube" />
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider group-hover:text-red-400 transition-colors">YouTube</span>
                            </a>

                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/md_neaj_morshed" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                                    <img className="w-8 h-8 object-contain" src="https://i.ibb.co/x5dxh93/instagramlogoresized-1-removebg-preview.png" alt="instagram" />
                                </a>
                                <a href="https://www.linkedin.com/in/md-neaj-morshed-90b901206" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                                    <img className="w-8 h-8 object-contain" src="https://i.ibb.co/4Jjr9My/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text-removebg.png" alt="linkedin" />
                                </a>
                                <a href="https://www.facebook.com/neaj2022" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                                    <img className="w-8 h-8 object-contain" src="https://i.ibb.co/3Yx5FmR/images-removebg-preview.png" alt="facebook" />
                                </a>
                            </div>
                        </div>

                        <div className="pt-2">
                             <a href="mailto:neajmost@gmail.com" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors border-b border-brand/30 hover:border-white pb-1">
                                neajmost@gmail.com
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;