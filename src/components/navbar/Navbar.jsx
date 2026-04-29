import React from 'react';
import NavLinkMap from './NavLinkMap';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';
import ScrollProgress from '../ScrollProgress';
// import { ThemeSwitch } from './ThemeSwitch';

const Navbar = () => {
    // ন্যাভিগেশন বাটনগুলোর লিস্ট (স্পেলিং ঠিক করা হয়েছে)
    const NavButtons = [
        {
            name: 'Home',
            Path: '/'
        },
        {
            name: 'About',
            Path: '/about'
        },
        {
            name: 'Skills',
            Path: '/skills'
        },
        {
            name: 'Projects',
            Path: '/projects'
        },
        {
            name: 'Experience',
            Path: '/experience'
        },
        {
            name: 'Contact',
            Path: '/contact'
        },
    ];

    return (
        <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-md">
            <div className="navbar container mx-auto px-4 md:px-8">
                {/* Navbar Start: Mobile Menu & Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <CiMenuKebab className="text-xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200">
                            <NavLinkMap NavButtons={NavButtons} />
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tighter">
                        ༄𝐑𝐢𝐝𝐨𝐲 ᭄✿࿐
                    </Link>
                </div>

                {/* Navbar Center: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                        <NavLinkMap NavButtons={NavButtons} />
                    </ul>
                </div>

                {/* Navbar End: Search, Theme & Profile */}
                <div className="navbar-end gap-3">
                    {/* Search Bar */}
                    <div className="form-control hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-24 md:w-auto h-10 focus:input-primary transition-all"
                        />
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary/20">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Profile"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200">
                            <li>
                                <Link href="/authentication" className="justify-between py-2">
                                    Profile
                                    <span className="badge badge-primary badge-sm">New</span>
                                </Link>
                            </li>
                            <li><Link href="/settings" className="py-2">Settings</Link></li>
                            <li className="mt-1 border-t border-base-200 pt-1">
                                <button className="text-error">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollProgress/>
        </div>
    );
};

export default Navbar;