// SkillsSection.js (Server Component)
import SkillsSectionClient from "./SkillsSectionClient";

const skillCategories = [
    {
        title: "Frontend",
        iconName: "Code2",
        skills: [
            { name: "React/Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Vue.js", level: 80 },
        ]
    },
    {
        title: "Backend",
        iconName: "Terminal",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "GraphQL", level: 80 },
            { name: "REST APIs", level: 95 },
        ]
    },
    {
        title: "Database & Cloud",
        iconName: "Cloud",
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "AWS", level: 75 },
            { name: "Docker", level: 80 },
        ]
    },
    {
        title: "Tools & Others",
        iconName: "Wrench",
        skills: [
            { name: "Git", level: 95 },
            { name: "Testing", level: 85 },
            { name: "CI/CD", level: 80 },
            { name: "Figma", level: 75 },
        ]
    }
];

const techStack = [
    { name: "React", iconName: "Layers" },
    { name: "Next.js", iconName: "Globe" },
    { name: "Node.js", iconName: "Terminal" },
    { name: "PostgreSQL", iconName: "Database" },
    { name: "AWS", iconName: "Cloud" },
    { name: "Docker", iconName: "Cpu" },
    { name: "Tailwind", iconName: "Code2" },
    { name: "TypeScript", iconName: "Code2" },
];

export default function SkillsSection() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Static Header for SEO */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">Skills & Expertise</h2>
                <p className="text-base-content/70">A comprehensive overview of my technical skills and the technologies I work with.</p>
            </div>

            {/* Client Logic for Animations */}
            <SkillsSectionClient 
                skillCategories={skillCategories} 
                techStack={techStack} 
            />
        </section>
    );
}