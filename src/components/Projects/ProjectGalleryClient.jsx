"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectGalleryClient({ projects, categories }) {
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
                            ? "bg-primary text-primary-content shadow-lg scale-105" 
                            : "bg-base-200 hover:bg-base-300"
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
                            className="bg-base-100 rounded-3xl border border-base-300 shadow-xl overflow-hidden flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-56 overflow-hidden group">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-primary/90 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-base-content/70 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-base-200 rounded-md text-[11px] font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="px-3 py-1 bg-base-200 rounded-md text-[11px] font-semibold text-primary">+1</span>
                                </div>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <a href={project.demo} className="btn btn-outline btn-sm rounded-xl flex items-center gap-2">
                                        <FaExternalLinkAlt size={14} /> Demo
                                    </a>
                                    <a href={project.code} className="btn btn-outline btn-sm rounded-xl flex items-center gap-2">
                                        <FaGithub size={14} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    );
}