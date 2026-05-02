// SkillsPage.js (Server Component)
import SkillsPageClient from "./SkillsPageClient";

const skills = [
  {
    id: 1,
    title: "Next.js",
    iconKey: "next",
    color: "bg-base-300",
    expertReason: "I specialize in building SEO-optimized, blazing-fast web applications using Server-Side Rendering (SSR) and Static Site Generation (SSG).",
    whyUse: "Next.js is the gold standard for performance. It ensures your site ranks higher on Google and provides a seamless user experience with zero lag."
  },
  {
    id: 2,
    title: "React.js",
    iconKey: "react",
    color: "bg-base-300",
    expertReason: "I have deep expertise in hooks, state management (Redux/Context API), and creating reusable component architectures.",
    whyUse: "React allows for highly interactive and dynamic user interfaces. Its component-based nature makes the codebase scalable and easy to maintain."
  },
  {
    id: 3,
    title: "JavaScript (ES6+)",
    iconKey: "js",
    color: "bg-base-300",
    expertReason: "The core of my full-stack journey. I write clean, asynchronous, and efficient logic to solve complex functional problems.",
    whyUse: "JavaScript is the engine of the web. Proper JS optimization ensures that your application logic is secure, fast, and works across all browsers."
  },
  {
    id: 4,
    title: "Tailwind CSS",
    iconKey: "tailwind",
    color: "bg-base-300",
    expertReason: "I master utility-first styling to build modern, fully responsive designs in record time without compromising on code quality.",
    whyUse: "Tailwind eliminates bloated CSS files. It ensures your website looks perfect on every device, from mobile to ultra-wide desktops."
  },
  {
    id: 5,
    title: "Custom CSS & Animations",
    iconKey: "css",
    color: "bg-base-300",
    expertReason: "When standard frameworks aren't enough, I write raw CSS for unique layouts, complex animations, and pixel-perfect designs.",
    whyUse: "Custom CSS gives your brand a unique identity. It allows for creative freedom that makes your website stand out from competitors."
  },
  {
    id: 6,
    title: "MongoDB",
    iconKey: "mongodb",
    color: "bg-base-300",
    expertReason: "I design flexible NoSQL database schemas that can handle large amounts of data while maintaining high performance.",
    whyUse: "MongoDB is built for scalability. It allows your application to grow seamlessly as your user base increases without data bottlenecks."
  },
  {
    id: 7,
    title: "Figma (UI/UX Design)",
    iconKey: "figma",
    color: "bg-base-300",
    expertReason: "I bridge the gap between design and code. I create high-fidelity prototypes in Figma before writing a single line of code.",
    whyUse: "Visualizing the product in Figma saves time and resources. It ensures that the final product is exactly what the client envisioned."
  }
];

const skillCategories = [
    {
        title: "Frontend",
        iconKey: "code2",
        skills: [
            { name: "React/Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Vue.js", level: 80 },
        ]
    },
    {
        title: "Backend",
        iconKey: "terminal",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "GraphQL", level: 80 },
            { name: "REST APIs", level: 95 },
        ]
    },
    {
        title: "Database & Cloud",
        iconKey: "cloud",
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "AWS", level: 75 },
            { name: "Docker", level: 80 },
        ]
    },
    {
        title: "Tools & Others",
        iconKey: "wrench",
        skills: [
            { name: "Git", level: 95 },
            { name: "Testing", level: 85 },
            { name: "CI/CD", level: 80 },
            { name: "Figma", level: 75 },
        ]
    }
];

const techStack = [
    { name: "React",      iconKey: "layers"    },
    { name: "Next.js",   iconKey: "globe"     },
    { name: "Node.js",   iconKey: "terminal"  },
    { name: "PostgreSQL",iconKey: "database"  },
    { name: "AWS",       iconKey: "cloud"     },
    { name: "Docker",    iconKey: "cpu"       },
    { name: "Tailwind",  iconKey: "code2"     },
    { name: "TypeScript",iconKey: "code2"     },
];

export default function SkillsPage() {
  return (
    <section className="bg-base-100 py-20 px-6 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Technical{' '}
            <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            As a Full Stack Developer, I don't just write code—I select the best technologies
            to solve real-world problems and deliver high-performing digital solutions.
          </p>
        </div>

        <SkillsPageClient
            skills={skills}
            skillCategories={skillCategories}
            techStack={techStack}
        />

        {/* CTA */}
        <div className="mt-20 text-center bg-primary/10 border border-primary/20 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-base-content mb-2">
            Need a custom solution using these technologies?
          </h3>
          <p className="text-base-content/60 mb-6">
            I am available for freelance projects and full-time opportunities.
          </p>
          <button className="btn btn-primary btn-lg rounded-full px-10 hover:scale-105 transition-transform">
            Let's Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}