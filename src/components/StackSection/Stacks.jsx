"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiRedis, SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";

// ── Skill Data ───────────────────────────────────────────────────────────────

const allSkills = [
  { name: "React",      Icon: FaReact,       color: "#61DAFB" },
  { name: "Next.js",    Icon: SiNextdotjs,   color: null      }, // theme-aware
  { name: "TypeScript", Icon: SiTypescript,  color: "#3178C6" },
  { name: "Tailwind",   Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js",    Icon: FaNodeJs,      color: "#339933" },
  { name: "Express",    Icon: SiExpress,     color: null      }, // theme-aware
  { name: "Python",     Icon: FaPython,      color: "#3776AB" },
  { name: "REST API",   Icon: TbApi,         color: "#FF6B35" },
  { name: "PostgreSQL", Icon: SiPostgresql,  color: "#336791" },
  { name: "MongoDB",    Icon: SiMongodb,     color: "#47A248" },
  { name: "Prisma",     Icon: SiPrisma,      color: null      }, // theme-aware
  { name: "Redis",      Icon: SiRedis,       color: "#D82C20" },
  { name: "AWS",        Icon: FaAws,         color: "#FF9900" },
  { name: "Docker",     Icon: FaDocker,      color: "#2496ED" },
  { name: "Git",        Icon: FaGitAlt,      color: "#F05032" },
  { name: "Vercel",     Icon: SiVercel,      color: null      }, // theme-aware
];

// ── SkillCard ────────────────────────────────────────────────────────────────

const SkillCard = ({ skill }) => {
  const { Icon, color } = skill;

  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="flex-shrink-0 flex flex-col items-center justify-center mx-2 sm:mx-3
        bg-base-200 border border-base-300 hover:border-primary/50
        rounded-2xl cursor-pointer group transition-colors duration-200"
      style={{ width: "110px", height: "90px" }}
    >
      {/* Icon */}
      <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
        <Icon
          size={30}
          style={{
            color: color ?? "oklch(var(--bc))",
          }}
        />
      </div>

      {/* Name */}
      <span
        className="text-[10px] sm:text-[11px] font-semibold text-base-content/60
          group-hover:text-base-content transition-colors duration-200 text-center leading-tight px-1"
        style={{ maxWidth: "90px", wordBreak: "break-word" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

// ── Stacks Section ───────────────────────────────────────────────────────────

export default function Stacks() {
  return (
    <section
      className="py-12 sm:py-20 bg-base-100 relative"
      style={{ overflowX: "hidden" }}
    >
      {/* Header */}
      <div className="container mx-auto px-4 mb-8 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          My Tech Stack
        </h2>
        <p className="text-sm sm:text-base text-base-content/60 max-w-md mx-auto">
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Marquee */}
      <div style={{ overflowX: "hidden", maxWidth: "100vw", width: "100%" }}>
        <Marquee gradient={false} speed={40} pauseOnHover className="py-3">
          {allSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}