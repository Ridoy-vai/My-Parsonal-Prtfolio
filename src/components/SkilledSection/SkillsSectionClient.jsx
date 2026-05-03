"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    Cloud,
    Wrench,
    Database,
    Server,
    Layers,
    Cpu
} from "lucide-react";

// ১. আইকন ম্যাপার ডিফাইন করা (এটি ডাটার iconName অনুযায়ী আইকন রিটার্ন করবে)




export default function SkillsSectionClient({ IconMap, skillCategories }) {
    return (
        <div className="container mx-auto px-4">
            {/* Main Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        {/* কার্ড হেডার */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-base-200 rounded-lg">
                                {/* যদি আইকন না পাওয়া যায় তবে ডিফল্ট একটা আইকন দেখাবে */}
                                {IconMap[category.iconName] || <Code2 size={24} />}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                        </div>

                        {/* স্কিল লিস্ট */}
                        <div className="space-y-6">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="group">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-semibold text-base-content/80">{skill.name}</span>
                                        <span className="font-mono font-bold text-blue-500">{skill.level}%</span>
                                    </div>

                                    {/* প্রোগ্রেস বার */}
                                    <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}