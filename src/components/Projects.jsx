import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    useEffect(() => {
        if (projects.length === 0) return;
        
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { opacity: 0, y: 100 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.1, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [projects, showAll]);

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <div id="projects" ref={sectionRef} className="py-24 bg-[#080808] relative min-h-screen">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-16 flex flex-col items-center md:items-start">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-4">Portfolio</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Featured <span className="text-brand">Work</span></h1>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {displayedProjects.map((item, index) => (
                        <div key={item?.id} className="project-card group relative rounded-3xl overflow-hidden glass-panel">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                                    src={item?.img} 
                                    alt={item?.title}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h2 className="text-2xl font-bold mb-2 text-white">{item?.title}</h2>
                                <p className="text-white/70 line-clamp-2 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item?.description}
                                </p>
                                
                                <a 
                                    href={item?.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-2 bg-brand text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-white transition-colors"
                                >
                                    Watch Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length > 4 && (
                    <div className="text-center mt-16 pb-8">
                        <button 
                            className="bg-transparent border border-white/20 text-white hover:border-brand hover:text-brand transition-colors px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm" 
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'View Less Episodes' : 'Explore All Episodes'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
