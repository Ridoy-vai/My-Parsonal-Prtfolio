"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap, Cpu, Layout } from "lucide-react";

// আইকন ম্যাপিং (সার্ভার থেকে আসা স্ট্রিং অনুযায়ী আইকন দেখানোর জন্য)
const icons = {
    Layout: <Layout className="w-6 h-6 text-white" />,
    Database: <Database className="w-6 h-6 text-white" />,
    Globe: <Globe className="w-6 h-6 text-white" />,
    Zap: <Zap className="w-6 h-6 text-white" />
};

export default function AboutSectionClient({ skills, serviceCards }) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
            {/* Header Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeIn}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    About Me
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                    I'm a passionate fullstack developer with 5+ years of experience creating digital solutions that 
                    make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Journey */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        My Journey <Cpu className="text-purple-500" />
                    </h3>
                    <div className="space-y-4 text-base-content/80 leading-relaxed">
                        <p>
                            My journey in software development began during university, where I discovered 
                            my passion for creating digital experiences. What started as curiosity about how 
                            websites work has evolved into a career focused on building scalable, user-centered applications.
                        </p>
                        <p>
                            I specialize in modern web technologies and have experience across the entire 
                            development stack. From crafting pixel-perfect user interfaces to designing robust 
                            backend architectures, I enjoy every aspect of bringing ideas to life.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to 
                            open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-8">
                        <h4 className="font-semibold mb-4">Current Focus</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span 
                                    key={index}
                                    whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6", color: "#fff" }}
                                    className="px-4 py-1.5 rounded-full bg-base-200 text-sm font-medium transition-colors cursor-default border border-base-300 shadow-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Feature Cards */}
                <div className="grid gap-6">
                    {serviceCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, x: 10 }}
                            className="group flex items-center gap-6 p-6 rounded-2xl bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all"
                        >
                            <div className={`${card.color} p-4 rounded-xl shadow-lg transition-transform group-hover:rotate-12`}>
                                {icons[card.iconName]}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">{card.title}</h4>
                                <p className="text-base-content/60 text-sm">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}