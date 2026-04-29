"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    // স্ক্রল পজিশন ট্র্যাক করার জন্য Framer Motion Hook
    const { scrollYProgress } = useScroll();
    
    // প্রগ্রেস বারটিকে আরও স্মুথ (বাউন্সি/বাটারি) করার জন্য useSpring
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed left-0 right-0 h-1 bg-primary z-50 origin-left"
            style={{ 
                scaleX,
                top: "64px" // আপনার ন্যাপবারের হাইট যদি ভিন্ন হয় তবে এটি পরিবর্তন করুন (সাধারণত ১৬ বা ৬৪ পিক্সেল)
            }}
        />
    );
};

export default ScrollProgress;