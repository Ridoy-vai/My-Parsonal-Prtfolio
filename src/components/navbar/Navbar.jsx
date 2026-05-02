import React from 'react';
import NavLinkMap from './NavLinkMap';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';
import ScrollProgress from '../ScrollProgress';
import { ThemeSwitch } from '../theme/ThemeSwitch';


const Navbar = () => {
    const NavButtons = [
        { name: 'Home', Path: '/' },
        { name: 'About', Path: '/about' },
        { name: 'Skills', Path: '/skills' },
        { name: 'Projects', Path: '/projects' },
        { name: 'Experience', Path: '/experience' },
        { name: 'Contact', Path: '/contact' },
    ];

    return (
        <>
            {/* ─── Global glass styles injected once ─── */}
            <style>{`
                .glass-nav {
                    position: sticky;
                    top: 0;
                    z-index: 50;

                    /* glass core */
                    background: rgba(var(--glass-bg, 255 255 255) / 0.08);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);

                    /* subtle border top + bottom */
                    border-bottom: 1px solid rgba(var(--glass-border, 255 255 255) / 0.18);
                    box-shadow:
                        0 4px 24px -4px rgba(0 0 0 / 0.12),
                        inset 0 1px 0 rgba(var(--glass-border, 255 255 255) / 0.25);

                    transition: background 0.3s ease, box-shadow 0.3s ease;
                }

                /* dark theme overrides — DaisyUI sets data-theme on <html> */
                [data-theme="dark"] .glass-nav,
                [data-theme="night"] .glass-nav,
                [data-theme="dracula"] .glass-nav,
                [data-theme="halloween"] .glass-nav,
                [data-theme="forest"] .glass-nav,
                [data-theme="black"] .glass-nav,
                [data-theme="luxury"] .glass-nav,
                [data-theme="synthwave"] .glass-nav,
                [data-theme="business"] .glass-nav,
                [data-theme="coffee"] .glass-nav,
                [data-theme="dim"] .glass-nav,
                [data-theme="sunset"] .glass-nav {
                    --glass-bg: 15 15 20;
                    --glass-border: 200 200 255;
                    background: rgba(15 15 20 / 0.35);
                    box-shadow:
                        0 4px 32px -4px rgba(0 0 0 / 0.45),
                        inset 0 1px 0 rgba(200 200 255 / 0.12);
                }

                /* logo shimmer animation */
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .logo-shimmer {
                    background: linear-gradient(
                        90deg,
                        oklch(var(--p)) 0%,
                        oklch(var(--s)) 40%,
                        oklch(var(--a)) 60%,
                        oklch(var(--p)) 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                }

                /* nav link pill hover */
                .glass-nav-link {
                    position: relative;
                    padding: 0.35rem 0.85rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: oklch(var(--bc) / 0.75);
                    transition: color 0.2s, background 0.2s;
                    text-decoration: none;
                }
                .glass-nav-link:hover {
                    color: oklch(var(--bc));
                    background: rgba(var(--glass-border, 255 255 255) / 0.12);
                }
                .glass-nav-link.active {
                    color: oklch(var(--p));
                    background: oklch(var(--p) / 0.12);
                }

                /* glass input */
                .glass-input {
                    height: 2.25rem;
                    padding: 0 0.75rem;
                    border-radius: 9999px;
                    border: 1px solid rgba(var(--glass-border, 255 255 255) / 0.25);
                    background: rgba(var(--glass-bg, 255 255 255) / 0.12);
                    backdrop-filter: blur(8px);
                    color: oklch(var(--bc));
                    font-size: 0.8125rem;
                    width: 6.5rem;
                    transition: width 0.3s ease, border-color 0.2s, background 0.2s;
                    outline: none;
                }
                .glass-input::placeholder { color: oklch(var(--bc) / 0.4); }
                .glass-input:focus {
                    width: 11rem;
                    border-color: oklch(var(--p) / 0.6);
                    background: rgba(var(--glass-bg, 255 255 255) / 0.18);
                }

                /* avatar ring pulse */
                @keyframes ring-pulse {
                    0%, 100% { box-shadow: 0 0 0 2px oklch(var(--p) / 0.4); }
                    50%      { box-shadow: 0 0 0 4px oklch(var(--p) / 0.15); }
                }
                .avatar-ring {
                    border-radius: 9999px;
                    animation: ring-pulse 3s ease-in-out infinite;
                    transition: transform 0.2s;
                }
                .avatar-ring:hover { transform: scale(1.08); }

                /* glass dropdown */
                .glass-dropdown {
                    background: rgba(var(--glass-bg, 255 255 255) / 0.55) !important;
                    backdrop-filter: blur(24px) saturate(160%) !important;
                    -webkit-backdrop-filter: blur(24px) saturate(160%) !important;
                    border: 1px solid rgba(var(--glass-border, 255 255 255) / 0.2) !important;
                    box-shadow: 0 8px 32px -4px rgba(0 0 0 / 0.2) !important;
                }

                /* theme switch wrapper */
                .theme-btn {
                    width: 2.25rem;
                    height: 2.25rem;
                    border-radius: 9999px;
                    border: 1px solid rgba(var(--glass-border, 255 255 255) / 0.22);
                    background: rgba(var(--glass-bg, 255 255 255) / 0.12);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.2s;
                    color: oklch(var(--bc) / 0.8);
                }
                .theme-btn:hover {
                    background: oklch(var(--p) / 0.15);
                    transform: rotate(20deg);
                }
            `}</style>

            <div className="glass-nav">
                <div className="navbar container mx-auto px-4 md:px-8">
                    <div className="navbar-start flex items-center gap-1">

                        {/* Mobile hamburger */}
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden px-1"
                            >
                                <CiMenuKebab className="text-2xl" />
                            </div>

                            <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-white dark:bg-slate-900 rounded-box w-52">
                                <NavLinkMap NavButtons={NavButtons} />
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="btn btn-ghost p-0 ml-0"
                        >
                            <div className="h-10 w-auto">
                                <img
                                    className="h-full w-auto object-contain"
                                    src="/Technology-Logo.png"
                                    alt="logo"
                                />
                            </div>
                        </Link>

                    </div>

                    {/* ── Navbar Center: Desktop links ── */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-1">
                            <NavLinkMap NavButtons={NavButtons} linkClassName="glass-nav-link" />
                        </ul>
                    </div>

                    {/* ── Navbar End: Search + Theme + Avatar ── */}
                    <div className="navbar-end gap-2">

                        {/* Search */}
                        <div className="hidden md:block">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="glass-input"
                            />
                        </div>

                        {/* Theme switch — uncomment ThemeSwitch import above */}
                        <div className="theme-btn">
                            <ThemeSwitch />
                        </div>

                        {/* Avatar dropdown */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar avatar-ring"
                            >
                                <div className="w-9 rounded-full overflow-hidden">
                                    <img
                                        alt="User Profile"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content glass-dropdown rounded-box z-[1] mt-3 w-52 p-2"
                            >
                                <li>
                                    <Link href="/authentication" className="justify-between py-2">
                                        Profile
                                        <span className="badge badge-primary badge-sm">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin" className="py-2">Settings</Link>
                                </li>
                                <li className="mt-1 border-t border-base-200 pt-1">
                                    <button className="text-error">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ScrollProgress />
            </div>
        </>
    );
};

export default Navbar;