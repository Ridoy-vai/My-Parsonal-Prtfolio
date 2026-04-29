// AboutSection.js (Server Component)
import AboutSectionClient from "./AboutSectionClient";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS", "Docker", "PostgreSQL"];

const serviceCards = [
    {
        title: "Frontend Expert",
        desc: "React, Next.js, TypeScript, and modern CSS frameworks",
        color: "bg-blue-500",
        iconName: "Layout"
    },
    {
        title: "Backend Mastery",
        desc: "Node.js, Python, databases, and API architecture",
        color: "bg-indigo-500",
        iconName: "Database"
    },
    {
        title: "Full-Stack Vision",
        desc: "End-to-end application development and deployment",
        color: "bg-purple-500",
        iconName: "Globe"
    },
    {
        title: "Performance Focus",
        desc: "Optimized, scalable, and maintainable solutions",
        color: "bg-pink-500",
        iconName: "Zap"
    }
];

export default function AboutSection() {
    return (
        <AboutSectionClient skills={skills} serviceCards={serviceCards} />
    );
}