// EducationSection.js (Server Component)
import EducationSectionClient from "./EducationSectionClient";

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        date: "2022 - Present",
        description: "Lead development of enterprise web applications serving 100K+ users. Architected microservices infrastructure.",
        achievements: ["Improved performance by 40%", "Led a team of 5", "Implemented CI/CD"],
        tags: ["React", "Node.js", "AWS"]
    },
    {
        title: "Full Stack Developer",
        company: "StartupHub Inc",
        date: "2020 - 2022",
        description: "Developed and maintained multiple client-facing applications using the MERN stack.",
        achievements: ["Reduced API latency by 30%", "Built real-time chat system"],
        tags: ["MongoDB", "Express", "React"]
    },
    {
        title: "Junior Web Developer",
        company: "WebFlow Agency",
        date: "2018 - 2020",
        description: "Collaborated with designers to create responsive websites. Focused on frontend performance.",
        achievements: ["Built 20+ responsive sites", "Integrated headless CMS"],
        tags: ["HTML/CSS", "JavaScript"]
    }
];

const education = [
    {
        degree: "BSc in Computer Science",
        school: "Dhaka University",
        year: "2016 - 2020",
        desc: "Focus on Algorithms, Data Structures and Software Engineering."
    },
    {
        degree: "Higher Secondary Certificate",
        school: "Dhaka College",
        year: "2014 - 2016",
        desc: "Science Background with GPA 5.00/5.00"
    }
];

const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services" },
    { name: "Google UX Design Professional", issuer: "Coursera" },
    { name: "Full Stack Web Development", issuer: "Programming Hero" }
];

export default function EducationSection() {
    return (
        <EducationSectionClient 
            experiences={experiences} 
            education={education} 
            certifications={certifications} 
        />
    );
}