// SkillsSection.js (Server Component)
import SkillsSectionClient from "./SkillsSectionClient";
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
const IconMap = {
    Code2: <Code2 className="text-blue-500" size={24} />,
    Terminal: <Terminal className="text-green-500" size={24} />,
    Cloud: <Cloud className="text-sky-500" size={24} />,
    Wrench: <Wrench className="text-orange-500" size={24} />,
    Database: <Database className="text-purple-500" size={24} />,
    Server: <Server className="text-pink-500" size={24} />,
    Layers: <Layers className="text-indigo-500" size={24} />,
    Cpu: <Cpu className="text-yellow-500" size={24} />,
};

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
                IconMap={IconMap}
            />
        </section>
    );
}