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
        <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-black container mx-auto">

            {/* Background Image Slider - Improved Crossfade */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }} // ২ সেকেন্ড ধরে স্মুথ ট্রানজিশন
                        className="absolute inset-0"
                    >
                        {/* Ken Burns Effect (Slow Zoom) */}
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${HeroBGimages[currentBg]})` }}
                        />
                        {/* Improved Overlay for Depth */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2 text-left text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-primary font-bold tracking-widest mb-2 uppercase">Welcome to my world</h2>
                            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-4 tracking-tighter">
                                I'M <span className="text-white">YOUR NAME</span>
                            </h1>

                            {/* Dynamic Auto-Changing Text */}
                            <div className="h-16 md:h-20 flex items-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentText}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -40, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                                    >
                                        {dynamicTexts[currentText]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-gray-300 mb-8 mt-4 max-w-lg leading-relaxed"
                            >
                                Building high-end digital experiences with a focus on performance,
                                accessibility, and stunning animations.
                            </motion.p>

                            <div className="flex flex-wrap gap-5">
                                <button className="btn btn-primary btn-lg rounded-full px-10 shadow-lg hover:shadow-primary/50 transition-all">
                                    Hire Me
                                </button>
                                <button className="btn btn-outline btn-lg text-white border-white/20 rounded-full px-10 hover:bg-white hover:text-black">
                                    Download CV
                                </button>
                            </div>
                        </motion.div>
                    </div>


                    {/* Right Side: Floating High-End Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Animated Background Glow */}
                            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

                            {/* Main Profile Image with Smooth Float */}
                            <motion.div
                                animate={{
                                    y: [0, -25, 0],
                                    rotate: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl w-70 h-95 md:w-105 md:h-135 bg-white/5 backdrop-blur-sm"
                            >
                                <Image
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Profile"
                                    height={100}
                                    width={100}
                                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>

                            {/* Info Badge */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="absolute -right-8 top-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl hidden md:block"
                            >
                                <p className="text-white font-bold text-sm">Top Rated ✨</p>
                                <p className="text-white/60 text-xs">Software Engineer</p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default HeroClient;