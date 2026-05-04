"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (isDismissed) return;
    if (session?.user) return; // লগইন থাকলে কিছু করবে না

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 80) {
        setHasScrolled(true);

        // ৩৫ সেকেন্ড পর modal খুলবে
        setTimeout(() => {
          if (!isDismissed && !session?.user) {
            setIsOpen(true);
          }
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, hasScrolled, session]);

  const handleNo = () => { setIsOpen(false); setIsDismissed(true); };

  // বাকি সব আগের মতোই...

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(10px)", backgroundColor: "oklch(var(--bc) / 0.15)" }}
          onClick={handleNo}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 28 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 28 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm"
          >
            <RegisterCard onNo={handleNo} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Inverted theme helpers ─────────────────────────────────────────────────────
const card     = { background: "oklch(var(--bc))", color: "oklch(var(--b1))" };
const subtle   = "oklch(var(--b1) / 0.1)";
const border   = "oklch(var(--b1) / 0.1)";
const muted    = "oklch(var(--b1) / 0.45)";
const inputBg  = "oklch(var(--b1) / 0.07)";
const inputBd  = "oklch(var(--b1) / 0.14)";
const inputFocus = "oklch(var(--b1) / 0.5)";

// ── Password Field with show/hide ─────────────────────────────────────────────
function PasswordField({ muted, inputBd, inputBg, inputFocus }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: muted }}>
        Password
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-2.5 pr-11 rounded-xl border outline-none transition-colors"
          style={{ borderColor: inputBd, background: inputBg, color: "oklch(var(--b1))" }}
          onFocus={(e) => { e.target.style.borderColor = inputFocus; e.target.style.background = "oklch(var(--b1) / 0.12)"; }}
          onBlur={(e) => { e.target.style.borderColor = inputBd; e.target.style.background = inputBg; }}
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-150 hover:opacity-70"
          style={{ color: muted }}
          tabIndex={-1}
        >
          {show ? (
            // Eye-off icon
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
              <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          ) : (
            // Eye icon
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

// ── Register Card ─────────────────────────────────────────────────────────────
function RegisterCard({ onNo }) {
  return (
    <motion.div
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-3xl shadow-2xl"
      style={{ ...card, border: `1px solid ${border}` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-7 pt-7 pb-5">
        <div>
          <h2 className="text-xl font-bold" style={{ color: "oklch(var(--b1))" }}>
            Create account
          </h2>
          <p className="text-xs mt-1" style={{ color: muted }}>
            নতুন account তৈরি করুন
          </p>
        </div>
        <button
          onClick={onNo}
          className="w-8 h-8 flex items-center justify-center rounded-xl mt-0.5 transition-all active:scale-90"
          style={{ background: subtle, color: muted }}
          title="না, ধন্যবাদ"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: border, margin: "0 28px" }} />

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 px-7 py-6 max-h-[65vh] overflow-y-auto"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: muted }}>Full Name</label>
          <input
            type="text"
            placeholder="আপনার নাম লিখুন"
            className="px-4 py-2.5 rounded-xl border outline-none transition-colors"
            style={{ borderColor: inputBd, background: inputBg, color: "oklch(var(--b1))" }}
            onFocus={(e) => { e.target.style.borderColor = inputFocus; e.target.style.background = "oklch(var(--b1) / 0.12)"; }}
            onBlur={(e) => { e.target.style.borderColor = inputBd; e.target.style.background = inputBg; }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: muted }}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-2.5 rounded-xl border outline-none transition-colors"
            style={{ borderColor: inputBd, background: inputBg, color: "oklch(var(--b1))" }}
            onFocus={(e) => { e.target.style.borderColor = inputFocus; e.target.style.background = "oklch(var(--b1) / 0.12)"; }}
            onBlur={(e) => { e.target.style.borderColor = inputBd; e.target.style.background = inputBg; }}
          />
        </div>

        <PasswordField muted={muted} inputBd={inputBd} inputBg={inputBg} inputFocus={inputFocus} />

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: muted }}>Country</label>
          <select
            className="px-4 py-2.5 rounded-xl border outline-none transition-colors"
            style={{ borderColor: inputBd, background: inputBg, color: "oklch(var(--b1))" }}
            onFocus={(e) => { e.target.style.borderColor = inputFocus; }}
            onBlur={(e) => { e.target.style.borderColor = inputBd; }}
          >
            {["Bangladesh", "United States", "United Kingdom", "Canada"].map((opt) => (
              <option key={opt} style={{ background: "oklch(var(--bc))", color: "oklch(var(--b1))" }}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: muted }}>Gender</label>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-bold" style={{ color: "oklch(var(--b1) / 0.7)" }}>
              <input type="radio" name="gender" className="w-4 h-4" style={{ accentColor: "oklch(var(--b1))" }} /> Male
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm font-bold" style={{ color: "oklch(var(--b1) / 0.7)" }}>
              <input type="radio" name="gender" className="w-4 h-4" style={{ accentColor: "oklch(var(--b1))" }} /> Female
            </label>
          </div>
        </div>                  

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest px-1" style={{ color: muted }}>Message</label>
          <textarea
            placeholder="আপনার বার্তাটি এখানে লিখুন..."
            className="px-4 py-2.5 rounded-xl border outline-none transition-colors min-h-24 resize-none"
            style={{ borderColor: inputBd, background: inputBg, color: "oklch(var(--b1))" }}
            onFocus={(e) => { e.target.style.borderColor = inputFocus; e.target.style.background = "oklch(var(--b1) / 0.12)"; }}
            onBlur={(e) => { e.target.style.borderColor = inputBd; e.target.style.background = inputBg; }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 border rounded-2xl font-bold text-sm tracking-wide mt-2 transition-all duration-200 active:scale-95 shadow-md"
          style={{ background: "oklch(var(--b1))", color: "oklch(var(--bc))", borderColor: inputBd }}
        >
          Register করুন →
        </button>
      </form>
    </motion.div>
  );
}