"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";

// কমন ডিজাইন ক্লাস
const inputClass = "w-full px-4 py-2.5 rounded-xl border outline-none transition-all duration-200 border-[oklch(var(--b1)/0.14)] bg-[oklch(var(--b1)/0.07)] text-[oklch(var(--b1))] focus:border-[oklch(var(--b1)/0.5)] placeholder:text-[oklch(var(--b1)/0.4)]";
const labelClass = "text-[11px] font-semibold uppercase tracking-widest px-1 text-[oklch(var(--b1)/0.45)]";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    // ইউজার লগইন থাকলে বা আগে ডিসমিস করলে মডাল দেখাবে না
    if (isDismissed || session?.user) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        // একবার স্ক্রোল ডিটেক্ট হলে লিসেনার রিমুভ করে দিবে
        window.removeEventListener("scroll", handleScroll);
        // ৩ সেকেন্ড পর মডাল ওপেন হবে
        setTimeout(() => {
          if (!session?.user) setIsOpen(true);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, session]);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-[oklch(var(--bc)/0.15)]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-sm"
          >
            <RegisterCard onClose={handleClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function RegisterCard({ onClose }) {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  // ফর্ম ডাটা স্টেট
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "Bangladesh",
    gender: "Male",
    message: ""
  });

  // ইনপুট হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Better Auth রেজিস্ট্রেশন ফাংশন
  const handleSubmit = async (e) => {
    e.preventDefault();

    await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.fullName,
      // অতিরিক্ত ডাটা (আপনার schema তে additionalFields হিসেবে থাকতে হবে)
      data: {
        country: formData.country,
        gender: formData.gender,
        message: formData.message,
      }
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: (ctx) => {
        setLoading(false);
        console.log("Registration Data:", formData);
        console.log("Response Context:", ctx.data);
        alert("Registration Successful!");
        onClose();
      },
      onError: (ctx) => {
        setLoading(false);
        alert(ctx.error.message || "Something went wrong!");
      }
    });
  };

  return (
    <div className="rounded-3xl shadow-2xl bg-[oklch(var(--bc))] border border-[oklch(var(--b1)/0.1)] overflow-hidden">
      {/* হেডার */}
      <div className="flex justify-between px-7 pt-7 pb-5">
        <div>
          <h2 className="text-xl font-bold text-[oklch(var(--b1))]">Create account</h2>
          <p className="text-xs text-[oklch(var(--b1)/0.5)]">সঠিক তথ্য দিয়ে রেজিস্ট্রেশন করুন</p>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors text-[oklch(var(--b1)/0.5)]">
          ✕
        </button>
      </div>

      {/* ফর্ম */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-7 py-6 max-h-[60vh] overflow-y-auto custom-scrollbar">

        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Full Name</label>
          <input 
            name="fullName" 
            required 
            value={formData.fullName} 
            onChange={handleChange} 
            type="text" 
            placeholder="আপনার নাম" 
            className={inputClass} 
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Email</label>
          <input 
            name="email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            type="email" 
            placeholder="you@example.com" 
            className={inputClass} 
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Password</label>
          <div className="relative">
            <input
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              className={inputClass}
            />
            <button 
              type="button" 
              onClick={() => setShowPass(!showPass)} 
              className="absolute right-3 top-2.5 opacity-50 hover:opacity-100 transition-opacity"
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Country</label>
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            className={inputClass}
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="United States">United States</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Gender</label>
          <div className="flex gap-6 mt-1">
            {["Male", "Female"].map(g => (
              <label key={g} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-[oklch(var(--b1)/0.7)]">
                <input 
                  type="radio" 
                  name="gender" 
                  value={g} 
                  checked={formData.gender === g} 
                  onChange={handleChange} 
                  className="w-4 h-4 accent-[oklch(var(--b1))]" 
                /> 
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="আপনার বার্তা..." 
            className={`${inputClass} min-h-20 resize-none`} 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-3.5 bg-[oklch(var(--b1))] text-[oklch(var(--bc))] rounded-2xl font-bold mt-2 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            "Register করুন →"
          )}
        </button>
      </form>
    </div>
  );
}