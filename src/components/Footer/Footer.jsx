import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { IoIosMail, IoMdSend } from 'react-icons/io';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            DEV<span className="text-blue-500">PORTFOLIO</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Full Stack Web Developer specializing in building robust, scalable web applications.
            Let's turn your ideas into high-performing digital reality.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-500"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Me</Link></li>
            <li><Link href="/projects" className="hover:text-blue-500 transition-colors">Portfolio</Link></li>
            <li><Link href="/BlogPage" className="hover:text-blue-500 transition-colors">Tech Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Tech Stack / Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-500"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            <li><span className="hover:text-blue-500 cursor-default transition-colors">Frontend Development</span></li>
            <li><span className="hover:text-blue-500 cursor-default transition-colors">Backend Architecture</span></li>
            <li><span className="hover:text-blue-500 cursor-default transition-colors">Full Stack Solutions</span></li>
            <li><span className="hover:text-blue-500 cursor-default transition-colors">Database Management</span></li>
            <li><span className="hover:text-blue-500 cursor-default transition-colors">API Integration</span></li>
          </ul>
        </div>

        {/* Column 4: Contact & Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
            Stay Updated
            <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-blue-500"></span>
          </h4>
          <p className="text-sm mb-4">Subscribe to my newsletter for tech insights.</p>
          <form className="flex mb-6 group">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-slate-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 border border-transparent focus:border-blue-500"
              required
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <IoMdSend size={18} />
            </button>
          </form>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <FaPhoneAlt size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-blue-400">+880 1234-567890</span>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <a
                href="mailto:hello@devportfolio.com?subject=Contact%20from%20Portfolio&body=Hello%20I%20want%20to%20talk%20about..."
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <IoIosMail
                  size={18}
                  className="text-blue-500 group-hover:scale-110 transition-transform"
                />
                <span className="group-hover:text-blue-400">
                  hello@devportfolio.com
                </span>
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <LuMapPin size={18} className="text-blue-500 mt-1" />
              <a
                href="https://www.google.com/maps?q=Dhaka,Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Dhaka, Bangladesh
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs sm:text-sm text-gray-500 font-medium">
          <p>© {currentYear} DevPortfolio. Crafted with Next.js & Tailwind.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors underline-offset-4 hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;