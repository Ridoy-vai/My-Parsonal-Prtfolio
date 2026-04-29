"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function FutureProjectClient({ projects }) {
    return (
        <>
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="group bg-base-100 rounded-3xl overflow-hidden border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image Container with Overlay */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Buttons */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <motion.a
                                    href={project.demo}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium text-sm"
                                >
                                    <FaExternalLinkAlt size={16} /> Demo
                                </motion.a>
                                <motion.a
                                    href={project.code}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full font-medium text-sm border border-gray-600"
                                >
                                    <FaGithub size={16} /> Code
                                </motion.a>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-base-content/70 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 bg-base-200 text-xs font-semibold rounded-lg border border-base-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <button className="btn btn-outline btn-primary px-8 rounded-full">
                    View All Projects
                </button>
            </motion.div>
        </>
    );
}