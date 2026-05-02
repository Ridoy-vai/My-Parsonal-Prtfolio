'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeroClient = ({ HeroBGimages, dynamicTexts }) => {
    const [currentBg, setCurrentBg] = useState(0);
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev === HeroBGimages.length - 1 ? 0 : prev + 1));
        }, 6000);
        const textInterval = setInterval(() => {
            setCurrentText((prev) => (prev === dynamicTexts.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => {
            clearInterval(bgInterval);
            clearInterval(textInterval);
        };
    }, [HeroBGimages.length, dynamicTexts.length]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center">

            {/* ─── Background Image Slider ─── */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Ken Burns slow zoom */}
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${HeroBGimages[currentBg]})` }}
                        />

                        {/*
                         * Theme-aware overlay
                         * Light themes  → white-tinted overlay so text stays readable
                         * Dark  themes  → black-tinted overlay (classic)
                         * We layer BOTH and let CSS handle which is visible via the
                         * DaisyUI color variable --b1 (base-100 lightness).
                         * Trick: oklch(var(--b1)) on a ::before gives us a theme-matched
                         * tint without needing JS.
                         */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `
                                    linear-gradient(
                                        to right,
                                        oklch(var(--b1) / 0.82) 0%,
                                        oklch(var(--b1) / 0.45) 55%,
                                        oklch(var(--b1) / 0.10) 100%
                                    )
                                `,
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ─── Decorative noise grain (theme-aware opacity) ─── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px',
                }}
            />

            {/* ─── Main Content ─── */}
            <div className="container mx-auto px-6 md:px-12 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* LEFT: Text content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Eyebrow */}
                            <p className="text-primary font-bold tracking-widest mb-2 uppercase text-sm">
                                Welcome to my Portfolio
                            </p>

                            {/* Name — uses base-content so it flips with theme */}
                            <h1 className="text-5xl md:text-5xl font-black leading-tight mb-4 tracking-tighter text-base-content">
                                I&apos;M{' '}
                                <span
                                    style={{
                                        background: `linear-gradient(
                                            90deg,
                                            oklch(var(--p)) 0%,
                                            oklch(var(--s)) 50%,
                                            oklch(var(--a)) 100%
                                        )`,
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        
                                    }}
                                >
                                    MD. SHAHRIAR
                                </span>
                                <br />
                                <span className="text-base-content">༄𝐑𝐢𝐝𝐨𝐲 ᭄✿࿐</span>
                            </h1>

                            {/* Dynamic role text */}
                            <div className="h-16 md:h-20 flex items-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentText}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -40, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="text-2xl md:text-5xl font-bold"
                                        style={{
                                            background: `linear-gradient(90deg, oklch(var(--p)), oklch(var(--s)))`,
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            
                                        }}
                                    >
                                        {dynamicTexts[currentText]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            {/* Bio — base-content/70 = muted in any theme */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-base-content/60 mb-8 mt-4 max-w-lg leading-relaxed"
                            >
                                Building high-end digital experiences with a focus on performance,
                                accessibility, and stunning animations.
                            </motion.p>

                            {/* CTA buttons — fully theme-driven via DaisyUI */}
                            <div className="flex flex-wrap gap-5">
                                <button className="btn btn-primary btn-lg rounded-full px-10 shadow-lg hover:shadow-primary/40 transition-all">
                                    Hire Me
                                </button>
                                <button className="btn btn-outline btn-lg rounded-full px-10 border-base-content/20 text-base-content hover:bg-base-content hover:text-base-100 transition-all">
                                    Download CV
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Floating photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow ring — uses primary color, works in all themes */}
                            <div
                                className="absolute -inset-2 rounded-3xl blur-2xl opacity-25 animate-pulse"
                                style={{
                                    background: `linear-gradient(135deg, oklch(var(--p)), oklch(var(--s)))`,
                                }}
                            />

                            {/* Floating photo card */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative overflow-hidden rounded-3xl shadow-2xl w-64 h-80 md:w-96 md:h-[30rem]"
                                style={{
                                    border: `1px solid oklch(var(--bc) / 0.12)`,
                                    background: `oklch(var(--b2) / 0.5)`,
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                <Image
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Profile"
                                    fill
                                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 768px) 256px, 384px"
                                />
                            </motion.div>

                            {/* Badge — glass card, theme-aware */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="absolute -right-6 top-20 p-4 rounded-2xl shadow-2xl hidden md:block"
                                style={{
                                    background: `oklch(var(--b2) / 0.65)`,
                                    backdropFilter: 'blur(16px)',
                                    border: `1px solid oklch(var(--bc) / 0.15)`,
                                }}
                            >
                                <p className="text-base-content font-bold text-sm">Top Rated ✨</p>
                                <p className="text-base-content/60 text-xs">Software Engineer</p>
                            </motion.div>

                            {/* Stats badge bottom-left */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                                className="absolute -left-6 bottom-20 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3"
                                style={{
                                    background: `oklch(var(--b2) / 0.65)`,
                                    backdropFilter: 'blur(16px)',
                                    border: `1px solid oklch(var(--bc) / 0.15)`,
                                }}
                            >
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: `oklch(var(--p) / 0.18)` }}
                                >
                                    🚀
                                </div>
                                <div>
                                    <p className="text-base-content font-bold text-sm leading-none">2+ yrs</p>
                                    <p className="text-base-content/55 text-xs mt-0.5">Experience</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ─── Scroll indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <div
                        className="w-6 h-10 rounded-full flex justify-center p-1"
                        style={{ border: `2px solid oklch(var(--bc) / 0.25)` }}
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                    <span className="text-base-content/40 text-xs tracking-widest uppercase">scroll</span>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroClient;