"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

export default function ContactClient({ contactInfo }) {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            e.target.reset();
        }, 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side: Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-8 transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>

                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-blue-100 dark:bg-blue-600/10 rounded-2xl text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <IoMdMail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Email Me</p>
                                <p className="text-slate-900 dark:text-white font-medium">{contactInfo.email}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-purple-100 dark:bg-purple-600/10 rounded-2xl text-purple-600 dark:text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <FaPhone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Call Me</p>
                                <p className="text-slate-900 dark:text-white font-medium">{contactInfo.phone}</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-emerald-100 dark:bg-emerald-600/10 rounded-2xl text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                <RiMapPin2Fill size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                                <p className="text-slate-900 dark:text-white font-medium">{contactInfo.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-gray-500 mb-4 font-medium uppercase text-xs tracking-widest">Follow Me</p>
                        <div className="flex gap-4">
                            {contactInfo.socials.map((soc) => (
                                <a
                                    key={soc.name}
                                    href={soc.link}
                                    className={`p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-gray-400 ${soc.color} transition-all hover:-translate-y-1 shadow-sm`}
                                >
                                    {soc.name === "LinkedIn" && <FaLinkedin size={20} />}
                                    {soc.name === "GitHub" && <FaGithub size={20} />}
                                    {soc.name === "Twitter" && <FaXTwitter size={20} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl dark:shadow-2xl transition-colors"
            >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm text-slate-600 dark:text-gray-400 ml-1">Full Name</label>
                            <input
                                type="text"
                                required
                                placeholder="John Doe"
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-600 dark:text-gray-400 ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-slate-600 dark:text-gray-400 ml-1">Subject</label>
                        <input
                            type="text"
                            required
                            placeholder="Project Inquiry"
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-slate-600 dark:text-gray-400 ml-1">Your Message</label>
                        <textarea
                            rows="5"
                            required
                            placeholder="Tell me about your project..."
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                    >
                        {status === "loading" ? (
                            <span className="animate-pulse">Sending...</span>
                        ) : status === "success" ? (
                            "Message Sent Successfully!"
                        ) : (
                            <>
                                <IoSend size={18} /> Send Message
                            </>
                        )}
                    </button>

                    {status === "success" && (
                        <p className="text-emerald-600 dark:text-emerald-500 text-center text-sm font-medium animate-bounce">
                            Thanks! I'll get back to you shortly.
                        </p>
                    )}
                </form>
            </motion.div>
        </div>
    );
}