"use client";

import { motion } from "framer-motion";
import { 
  Code2, Terminal, Database, Wrench, 
  Cpu, Layers, Cloud, Globe 
} from "lucide-react";

// আইকন ম্যাপার (সার্ভার থেকে আসা স্ট্রিং অনুযায়ী আইকন দেখানোর জন্য)
const IconMap = {
    Code2: <Code2 className="w-5 h-5 text-blue-500" />,
    Terminal: <Terminal className="w-5 h-5 text-green-500" />,
    Cloud: <Cloud className="w-5 h-5 text-purple-500" />,
    Wrench: <Wrench className="w-5 h-5 text-orange-500" />,
    Layers: <Layers />,
    Globe: <Globe />,
    Database: <Database />,
    Cpu: <Cpu />,
    // টেক স্ট্যাকের জন্য কালারলেস আইকন ম্যাপার
    Code2_Tech: <Code2 />,
    Terminal_Tech: <Terminal />,
    Cloud_Tech: <Cloud />,
};

export default function SkillsSectionClient({ skillCategories, techStack }) {
    return (
        <>
            {/* Main Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {skillCategories.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {IconMap[category.iconName]}
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        
                        <div className="space-y-5">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tech Stack - Card Design */}
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center p-4 bg-base-200 border border-base-300 rounded-xl shadow-md cursor-pointer hover:bg-blue-600 hover:text-white transition-colors group"
                        >
                            <div className="mb-2 text-blue-600 group-hover:text-white transition-colors">
                                {IconMap[tech.iconName]}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}