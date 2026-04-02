import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-[#030303] text-white/50 py-6 border-t border-white/5 text-sm uppercase tracking-widest font-semibold mt-auto relative z-10">
            <p>Developed by Rime Islam Rimu &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;