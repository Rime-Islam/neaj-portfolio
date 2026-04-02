import React, { useRef, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
    const form = useRef();
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, scale: 0.95 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 1, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_awd9xjl', 'template_xphmr05', form.current, 'MHciCW_bock6EmeiI')
            .then((result) => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Message Sent Successfully!",
                    background: "#111",
                    color: "#fff",
                    confirmButtonColor: "#9acd32",
                    showConfirmButton: false,
                    timer: 2000
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="py-32 relative bg-[#050505] min-h-screen flex items-center">
            {/* Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-4">Let's Connect</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Start a <span className="text-brand">Project</span></h1>
                </div>

                <div className="glass-panel rounded-3xl p-8 md:p-14 border border-white/10 mx-auto max-w-4xl shadow-2xl relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img className="w-full max-w-[300px] mx-auto filter drop-shadow-2xl brightness-110" src="https://i.ibb.co/McqLNL3/gif.gif" alt="gif animation" />
                        </div>
                        
                        <div>
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-white/50">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:bg-white/10 transition-all font-outfit"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-white/50">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:bg-white/10 transition-all font-outfit"
                                        required
                                        placeholder="you@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-white/50">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:bg-white/10 transition-all font-outfit resize-none"
                                        required
                                        placeholder="Tell me about your amazing project..."
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-brand text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-white transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;