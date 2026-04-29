// app/BlogPage/[id]/page.js
// import { blogPosts } from "../data"; // ডাটা ইমপোর্ট করুন
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../page";

export default async function BlogPostDetail({ params }) {
    const { id } = await params; // Next.js 15 এ params এভাবে ব্যবহার করতে হয়
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        notFound(); // পোস্ট না পাওয়া গেলে ৪-০-৪ পেজ দেখাবে
    }

    return (
        <main className="bg-base-100 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link href="/BlogPage" className="btn btn-ghost gap-2 mb-8">
                    <ArrowLeft size={18} /> Back to Blogs
                </Link>

                <article>
                    {/* Header */}
                    <header className="mb-8">
                        <span className="badge badge-primary mb-4">{post.category}</span>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-6 text-base-content/60 border-y border-base-200 py-4">
                            <div className="flex items-center gap-2">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={post.author.avatar} alt={post.author.name} />
                                    </div>
                                </div>
                                <span className="font-bold text-base-content">{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2"><Calendar size={18}/> {post.date}</div>
                            <div className="flex items-center gap-2"><Clock size={18}/> {post.readTime}</div>
                        </div>
                    </header>

                    {/* Feature Image */}
                    <figure className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
                        <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-base-content/80">
                        <p className="text-xl font-medium mb-6 leading-relaxed italic">
                            {post.excerpt}
                        </p>
                        <div className="whitespace-pre-line">
                            {/* এখানে আপনার ব্লগের মেইন কন্টেন্ট আসবে */}
                            {post.content || "Content coming soon..."}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-base-200 flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="badge badge-outline">#{tag}</span>
                        ))}
                    </div>
                </article>
            </div>
        </main>
    );
}