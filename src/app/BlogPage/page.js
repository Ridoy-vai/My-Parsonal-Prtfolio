// BlogPage.js (Server Component)
import BlogClient from "./BlogClient";

// app/BlogPage/data.js
export const blogPosts = [
    {
        id: 41,
        title: "Mastering Next.js 15: The Future of Web Development",
        excerpt: "Explore the newest features of Next.js 15, from improved partial pre-rendering to the new caching logic.",
        content: "Full content of the blog goes here... (আপনার ব্লগের বিস্তারিত লেখা এখানে থাকবে)",
        category: "Web Dev",
        author: { name: "Ridoy", avatar: "https://i.pravatar.cc/150?u=ridoy" },
        date: "Oct 24, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
        tags: ["Next.js", "React", "Frontend"]
    },
    // ... আপনার বাকি সব পোস্ট এখানে দিন
    {
        id: 1,
        title: "Mastering Next.js 15: The Future of Web Development",
        content: "Full content of the blog goes here... (আপনার ব্লগের বিস্তারিত লেখা এখানে থাকবে)",
        excerpt: "Explore the newest features of Next.js 15, from improved partial pre-rendering to the new caching logic.",
        category: "Web Dev",
        author: { name: "Ridoy", avatar: "https://i.pravatar.cc/150?u=ridoy" },
        date: "Oct 24, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
        tags: ["Next.js", "React", "Frontend"]
    },
    {
        id: 2,
        title: "Why TypeScript is Essential for Large Scale Apps",
        excerpt: "Static typing isn't just about catching errors; it's about developer experience and long-term maintainability.",
        category: "Programming",
        author: { name: "Anika", avatar: "https://i.pravatar.cc/150?u=anika" },
        date: "Oct 22, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000",
        tags: ["TypeScript", "JS", "Architecture"]
    },
    {
        id: 3,
        title: "AI in 2024: Beyond the Chatbot Hype",
        excerpt: "How generative AI is being integrated into production-level SaaS products today.",
        category: "AI",
        author: { name: "Zayan", avatar: "https://i.pravatar.cc/150?u=zayan" },
        date: "Oct 20, 2023",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
        tags: ["AI", "Machine Learning", "SaaS"]
    },
    {
        id: 4,
        title: "Modern UI Trends: Minimalist vs. Brutalist",
        excerpt: "Deciding the right design language for your next big project. Which one converts better?",
        category: "Design",
        author: { name: "Ridoy", avatar: "https://i.pravatar.cc/150?u=ridoy" },
        date: "Oct 18, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000",
        tags: ["UI/UX", "Design Systems", "Figma"]
    }
];

const categories = ["All", "Web Dev", "Programming", "AI", "Design"];

export default function BlogPage() {
    return (
        <main className="bg-base-200 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-8">
                {/* Blog Header */}
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                        Tech <span className="text-primary italic">Insight</span>
                    </h1>
                    <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
                        Exploring the bleeding edge of technology, code, and design.
                    </p>
                </header>

                <BlogClient posts={blogPosts} categories={categories} />
            </div>
        </main>
    );
}