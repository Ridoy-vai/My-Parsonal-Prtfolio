import HeroClient from './HeroClient';

const Hero = () => {
    // ডেটাগুলো সার্ভার কম্পোনেন্টে ডিফাইন করা হলো (SEO এর জন্য ভালো)
    const HeroBGimages = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920"
    ];

    const dynamicTexts = [
        "Full Stack Developer",
        "UI/UX Designer",
        "React Expert",
        "Digital Creator",
        "Problem Solver"
    ];

    return (

        <>
            {<HeroClient HeroBGimages={HeroBGimages} dynamicTexts={dynamicTexts} />}
        </>

    );
};

export default Hero;