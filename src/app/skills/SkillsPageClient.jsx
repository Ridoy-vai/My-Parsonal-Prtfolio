"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si';
import { 
  Code2, Terminal, Database, Wrench, 
  Cpu, Layers, Cloud, Globe 
} from "lucide-react";

// আইকন ম্যাপিং
const iconMap = {
  next: <SiNextdotjs className="text-white" />,
  react: <FaReact className="text-blue-400" />,
  js: <SiJavascript className="text-yellow-400" />,
  tailwind: <SiTailwindcss className="text-cyan-400" />,
  css: <FaCss3Alt className="text-blue-600" />,
  mongodb: <SiMongodb className="text-green-500" />,
  figma: <FaFigma className="text-pink-500" />,
  code2: <Code2 className="w-5 h-5 text-blue-500" />,
  terminal: <Terminal className="w-5 h-5 text-green-500" />,
  cloud: <Cloud className="w-5 h-5 text-purple-500" />,
  wrench: <Wrench className="w-5 h-5 text-orange-500" />,
  layers: <Layers />,
  globe: <Globe />,
  database: <Database />,
  cpu: <Cpu />,
};

export default function SkillsPageClient({ skills, skillCategories, techStack }) {
  return (
    <>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div 
            key={skill.id} 
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-3 rounded-xl ${skill.color} text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                {iconMap[skill.iconKey]}
              </div>
              <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-1">My Expertise</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.expertReason}</p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-emerald-500 font-semibold text-sm uppercase tracking-wider mb-1">Why it matters?</h4>
                <p className="text-gray-400 text-sm leading-relaxed italic">"{skill.whyUse}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap[category.iconKey]}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((s, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                      <span className="font-medium">{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-md cursor-pointer hover:bg-blue-600 hover:text-white transition-colors group"
            >
              <div className="mb-2 text-blue-500 group-hover:text-white transition-colors">
                {iconMap[tech.iconKey]}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:text-white">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}