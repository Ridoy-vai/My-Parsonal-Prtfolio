// import NotFoundClient from '@/components/NotFoundClient';

import NotFoundClient from "@/components/NotFoundClient";

export const metadata = {
    title: "404 - Page Not Found",
    description: "You have reached the edge of the universe.",
};

const NotFound = () => {
    // ৪-৫টি মাস্টার লেভেল ব্যাকগ্রাউন্ড ইমেজ (Space/Abstract থিম)
    const images = [
        "https://images.unsplash.com/photo-1439794451292-808080a25690?q=80&w=1920",
        "https://images.unsplash.com/photo-1506318137071-a8e063b4b6a1?q=80&w=1920",
        "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1920",
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1920",
        "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1920"
    ];

    return (
        <main>
            <NotFoundClient images={images} />
        </main>
    );
};

export default NotFound;