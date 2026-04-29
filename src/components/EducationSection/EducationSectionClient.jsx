"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";

// TimelineItem Component
const TimelineItem = ({ item }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        margin: "-45% 0px -45% 0px", 
        once: false 
    });

    return (
        <div ref={ref} className="relative pl-8 pb-4 transition-all duration-500">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-base-300">
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: isInView ? "100%" : "0%" }}
                    className="w-full bg-primary origin-top transition-all duration-500"
                />
            </div>
            
            <motion.div 
                animate={{ 
                    scale: isInView ? 1.5 : 1,
                    backgroundColor: isInView ? "hsl(var(--p))" : "hsl(var(--b3))" 
                }}
                className="absolute left-[-5px] top-6 h-3 w-3 rounded-full z-10 border-2 border-base-100 transition-all duration-300"
            />

            <motion.div
                layout
                animate={{ 
                    opacity: isInView ? 1 : 0.4,
                    scale: isInView ? 1 : 0.95,
                    y: isInView ? 0 : 10
                }}
                className={`p-6 rounded-2xl border transition-colors duration-500 ${
                    isInView ? "bg-base-100 border-primary/30 shadow-xl" : "bg-base-200/30 border-transparent shadow-none"
                }`}
            >
                <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                        <h3 className={`text-xl font-bold transition-colors ${isInView ? "text-primary" : "text-base-content/70"}`}>
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-base-content/60 mt-1">
                            <Briefcase size={14} /> <span>{item.company}</span>
                        </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${isInView ? "bg-primary text-primary-content" : "bg-base-300"}`}>
                        {item.date}
                    </div>
                </div>

                <motion.div
                    initial={false}
                    animate={{ 
                        height: isInView ? "auto" : 0,
                        opacity: isInView ? 1 : 0,
                        marginTop: isInView ? 16 : 0
                    }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 border-t border-base-300 space-y-4">
                        <p className="text-base-content/80 text-sm leading-relaxed">{item.description}</p>
                        <div className="space-y-2">
                            {item.achievements.map((ach, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                    <span>{ach}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default function EducationSectionClient({ experiences, education, certifications }) {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm"
                >
                    Resume
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Experience & Education
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Side: Experience */}
                <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Work Experience</h3>
                    </div>
                    
                    <motion.div layout className="space-y-4">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index} item={exp} />
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Education & Certifications */}
                <div className="lg:col-span-5 space-y-12">
                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-base-100 border border-base-300 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <BookOpen size={60} />
                                    </div>
                                    <span className="text-xs font-mono text-secondary font-bold">{edu.year}</span>
                                    <h4 className="text-lg font-bold mt-1 group-hover:text-secondary transition-colors">{edu.degree}</h4>
                                    <p className="text-base-content/60 text-sm">{edu.school}</p>
                                    <p className="text-sm mt-3 text-base-content/70">{edu.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-base-300 hover:border-accent/50 transition-all cursor-default"
                                >
                                    <div className="h-12 w-12 bg-base-100 rounded-xl flex items-center justify-center text-accent shadow-inner">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm">{cert.name}</h4>
                                        <p className="text-xs text-base-content/60">{cert.issuer}</p>
                                    </div>
                                    <ExternalLink size={14} className="text-base-content/30" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}