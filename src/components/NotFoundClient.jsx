'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NotFoundClient = ({ images }) => {
    const [currentBg, setCurrentBg] = useState(0);

    // ব্যাকগ্রাউন্ড চেঞ্জার
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            
            {/* Background Slider - Master Crossfade */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${images[currentBg]})` }}
                        />
                        {/* High-end Overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Big 404 Glitch Animation */}
                    <motion.h1 
                        animate={{ 
                            textShadow: [
                                "2px 2px 0px #ff00ea",
                                "-2px -2px 0px #00fff2",
                                "2px -2px 0px #ff00ea",
                                "0px 0px 0px #fff"
                            ],
                            x: [0, -2, 2, -1, 0]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                        className="text-[12rem] md:text-[20rem] font-black text-white leading-none tracking-tighter opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                    >
                        404
                    </motion.h1>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
                               You LOST IN <span className="text-primary">SPACE?</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
                                The page you are looking for has been moved to another universe or never existed in this dimension.
                            </p>
                        </motion.div>

                        {/* Animated Buttons */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <Link href="/">
                                <button className="btn btn-primary btn-lg rounded-full px-12 group overflow-hidden relative">
                                    <span className="relative z-10">Back to Earth</span>
                                    <motion.div 
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </button>
                            </Link>
                            
                            <button 
                                onClick={() => window.location.reload()}
                                className="btn btn-outline btn-lg text-white border-white/20 rounded-full px-12 hover:bg-white/10"
                            >
                                Retry Mission
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Objects Decoration */}
            <motion.div 
                animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 360]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-[10%] w-20 h-20 border border-white/10 rounded-full hidden md:block"
            />
            <motion.div 
                animate={{ 
                    y: [0, 40, 0],
                    x: [0, 20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 left-[15%] w-32 h-32 bg-primary/10 blur-3xl rounded-full"
            />
        </div>
    );
};

export default NotFoundClient;