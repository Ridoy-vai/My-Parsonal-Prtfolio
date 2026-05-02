"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

const categories = ["All Projects", "Full Stack", "Frontend", "Design"];

export default function ProjectGalleryClient({ projects }) {
    const [filter, setFilter] = useState("All Projects");

    const filteredProjects = projects.filter(project => 
        filter === "All Projects" ? true : project.category === filter
    );

    return (
        <>
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                            filter === cat 
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid with Animation */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors group"
                        >
                            {/* Image Section */}
                            <div className="relative h-56 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-semibold flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                                            <FaCode className="text-blue-600 dark:text-blue-500" size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <a href={project.demo} target="_blank" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-blue-600 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-600/20">
                                        <FaExternalLinkAlt size={14} /> Live Demo
                                    </a>
                                    <a href={project.code} target="_blank" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                                        <FaGithub size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500 dark:text-slate-400 text-lg">No projects found in this category.</p>
                </div>
            )}
        </>
    );
}