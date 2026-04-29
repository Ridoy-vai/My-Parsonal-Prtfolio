// FutureProjectSection.js (Server Component)
import FutureProjectClient from "./FutureProjectClient";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        demo: "#",
        code: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase"],
        demo: "#",
        code: "#"
    },
    {
        title: "Social Media App",
        description: "A modern social platform with real-time messaging, content sharing, and social features.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
        tags: ["React Native", "Node.js", "Socket.io", "AWS"],
        demo: "#",
        code: "#"
    }
];

export default function FutureProjectSection() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header - Static for SEO */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent mb-4">
                    Featured Projects
                </h2>
                <p className="text-base-content/70 max-w-2xl mx-auto">
                    A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
                </p>
            </div>

            {/* Client Component for Grid & Animations */}
            <FutureProjectClient projects={projects} />
        </section>
    );
}