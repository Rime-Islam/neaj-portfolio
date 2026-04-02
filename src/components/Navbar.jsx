import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLink = (
        <>
            <li><a href="#home" className="text-white hover:text-brand transition-colors px-4 py-2 text-sm uppercase tracking-wider font-semibold">Home</a></li>
            <li><a href="#about" className="text-white hover:text-brand transition-colors px-4 py-2 text-sm uppercase tracking-wider font-semibold">About</a></li>
            <li><a href="#projects" className="text-white hover:text-brand transition-colors px-4 py-2 text-sm uppercase tracking-wider font-semibold">Work</a></li>
            <li><a href="#contact" className="text-white hover:text-brand transition-colors px-4 py-2 text-sm uppercase tracking-wider font-semibold">Contact</a></li>
        </>
    );

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-transform duration-300`}>
                <div className={`flex items-center justify-between mx-auto rounded-full transition-all duration-500 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-4xl' : 'px-2'}`}>
                    <div className="flex items-center gap-1 font-bold text-xl md:text-2xl tracking-tighter">
                        <span className="text-white">Neaj</span>
                        <span className="text-brand">Animator</span>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-2">
                            {navLink}
                        </ul>
                    </div>

                    <div className="md:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#111] border border-white/10 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;