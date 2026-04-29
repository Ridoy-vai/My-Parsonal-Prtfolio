// AboutSection.js (Server Component)
import AboutSectionClient from "./AboutSectionClient";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS", "Docker", "PostgreSQL"];

const serviceCards = [
    {
        title: "Frontend Expert",
        desc: "React, Next.js, TypeScript, and modern CSS frameworks",
        iconType: "layout",
        color: "bg-blue-500"
    },
    {
        title: "Backend Mastery",
        desc: "Node.js, Python, databases, and API architecture",
        iconType: "database",
        color: "bg-indigo-500"
    },
    {
        title: "Full-Stack Vision",
        desc: "End-to-end application development and deployment",
        iconType: "globe",
        color: "bg-purple-500"
    },
    {
        title: "Performance Focus",
        desc: "Optimized, scalable, and maintainable solutions",
        iconType: "zap",
        color: "bg-pink-500"
    }
];

export default function AboutSection() {
    return (
        <AboutSectionClient skills={skills} serviceCards={serviceCards} />
    );
}