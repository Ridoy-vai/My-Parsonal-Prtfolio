// ContactPage.js (Server Component)
import ContactClient from "./ContactClient";

const contactInfo = {
    email: "yourname@email.com",
    phone: "+880 13-1058 5062",
    location: "Dhaka, Bangladesh",
    socials: [
        { name: "LinkedIn", link: "#", color: "hover:text-blue-500" },
        { name: "GitHub", link: "#", color: "hover:text-gray-400" },
        { name: "Twitter", link: "#", color: "hover:text-sky-400" },
    ]
};

export default function ContactPage() {
    return (
        <section className="bg-slate-950 py-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to message me. 
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                {/* Client Component for Form and Animation */}
                <ContactClient contactInfo={contactInfo} />
            </div>
        </section>
    );
}