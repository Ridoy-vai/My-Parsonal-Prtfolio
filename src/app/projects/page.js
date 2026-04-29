// ProjectGallery.js (Server Component)
import ProjectGalleryClient from "./ProjectGalleryClient";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Full Stack",
        description: "A full-stack e-commerce solution with real-time inventory management.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
        tags: ["React", "Node.js", "PostgreSQL"],
        demo: "#",
        code: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        category: "Frontend",
        description: "A collaborative project management tool with real-time updates.",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000",
        tags: ["Next.js", "TypeScript", "Prisma"],
        demo: "#",
        code: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        category: "Frontend",
        description: "A beautiful weather application with location-based forecasts.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
        tags: ["Vue.js", "Weather API", "Charts.js"],
        demo: "#",
        code: "#"
    },
    {
        id: 4,
        title: "Finance Tracker",
        category: "Backend",
        description: "Secure API for tracking daily expenses and financial reports.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000",
        tags: ["Express", "MongoDB", "JWT"],
        demo: "#",
        code: "#"
    },
    {
        id: 5,
        title: "Fitness Mobile App",
        category: "Mobile",
        description: "Cross-platform mobile app for workout tracking and health tips.",
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1000",
        tags: ["React Native", "Firebase"],
        demo: "#",
        code: "#"
    }
];


export default function ProjectGallery() {
    return (
        <section className="py-20 px-6 container mx-auto bg-slate-950 min-h-screen">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    My Creative <span className="text-blue-500">Portfolio</span>
                </h2>
            </div>

            {/* Client Logic Component */}
            <ProjectGalleryClient projects={projects} />
        </section>
    );
}