
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link"; // Link ইমপোর্ট করুন

export default function BlogClient({ posts, categories }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`btn btn-sm rounded-full px-6 border-none transition-all ${
                                activeCategory === cat 
                                ? "btn-primary shadow-lg scale-105" 
                                : "bg-base-100 hover:bg-base-300"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input input-bordered w-full pl-12 rounded-full focus:input-primary transition-all"
                    />
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div key={post.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="card lg:card-side bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all group overflow-hidden">
                            {/* ... ইমেজ সেকশন আগের মতোই ... */}
                            <figure className="lg:w-2/5 relative h-64 lg:h-auto">
                                <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4"><span className="badge badge-primary font-bold py-3">{post.category}</span></div>
                            </figure>
                            
                            <div className="card-body lg:w-3/5 p-8">
                                <div className="flex items-center gap-4 text-xs text-base-content/50 mb-3">
                                    <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                
                                <h2 className="card-title text-2xl font-bold group-hover:text-primary transition-colors leading-tight mb-4">
                                    {post.title}
                                </h2>
                                
                                <p className="text-base-content/70 text-sm line-clamp-3 mb-6">{post.excerpt}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    {/* Author Info */}
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={post.author.avatar} alt={post.author.name} />
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold">{post.author.name}</span>
                                    </div>

                                    {/* রিড মোর বাটনে লিঙ্ক অ্যাড করা হয়েছে */}
                                    <Link href={`/BlogPage/${post.id}`} className="btn btn-ghost btn-sm group/btn text-primary">
                                        Read More <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            {/* Empty State */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-24">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold">No articles found</h3>
                    <p className="text-base-content/60">Try searching with different keywords or categories.</p>
                </div>
            )}

            {/* Newsletter Section */}
            <section className="mt-24 p-12 bg-primary rounded-[40px] text-primary-content text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10"><Tag size={200} /></div>
                <h3 className="text-3xl font-black mb-4">Subscribe to the Newsletter</h3>
                <p className="mb-8 opacity-80 max-w-md mx-auto italic">Get the latest tech news and coding tips delivered to your inbox every week.</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
                    <input type="email" placeholder="email@example.com" className="input input-bordered text-base-content rounded-full w-full" />
                    <button className="btn btn-neutral rounded-full px-8">Join Now</button>
                </div>
            </section>
        </>
    );
}