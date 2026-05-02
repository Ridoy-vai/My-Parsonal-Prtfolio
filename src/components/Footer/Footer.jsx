import Link from "next/link";
import {
  FaInstagram,
  FaPinterest,
  FaHouzz,
  FaYoutube,
  FaPhoneAlt
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoPlayCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fcfbf9] dark:bg-[#0f0e0d] text-[#2c2824] dark:text-[#e8e2d9] font-sans transition-colors duration-300">

      {/* Gold accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#c8a96e] via-[#8a6030] to-[#c8a96e]" />

      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div>
              <div className="h-8 md:h-10 lg:h-12 w-auto overflow-hidden flex items-center justify-start">
  <img
    className="h-full w-auto object-contain"
    src="/Technology-Logo.png"
    alt="logo"
  />
</div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#6c6253] dark:text-[#8a8070] mt-2 font-medium transition-colors">
                Tiles & Surfaces
              </p>
              <p className="font-serif text-xs italic text-[#877d6e] dark:text-[#5a5448] mt-1 transition-colors">
                Crafted for spaces that endure.
              </p>
            </div>

            <p className="text-sm text-[#5a544c] dark:text-[#7a7468] leading-relaxed max-w-xs transition-colors">
              Premium tile collections sourced from Italy, Spain, and Turkey — bringing artisanal craftsmanship to modern interiors since 2008.
            </p>

            <div className="flex flex-wrap gap-2">
              {["ISO Certified", "Eco Friendly", "50+ Collections"].map((b) => (
                <span key={b} className="text-[9px] tracking-widest uppercase px-3 py-1.5 border border-[#e1ded8] dark:border-[#3a3630] bg-[#f4f2eb] dark:bg-transparent text-[#6c6253] dark:text-[#8a8070] rounded-sm transition-colors">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <FooterCol title="Collections" links={["Marble Series", "Ceramic Classic", "Porcelain Pro", "Mosaic Art", "Outdoor Stone", "Wood Effect"]} />
          <FooterCol title="Company" links={["Our Story", "Showrooms", "Careers", "Press & Media", "Sustainability", "Partners"]} />
          <FooterCol title="Support" links={["Installation Guide", "Care & Maintenance", "Find a Dealer", "Sample Request", "Warranty", "Contact Us"]} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[#ebdcd0] dark:via-[#2e2b27] to-transparent mx-6 md:mx-12" />

      {/* Contact Strip */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-[#ebdcd0] dark:border-[#1e1c1a] pb-8">
          <ContactItem icon={<IoMdMail className="text-[#c8a96e]" size={18} />} label="hello@luxoratiles.com" sub="Trade & wholesale inquiries" />
          <ContactItem icon={<FaPhoneAlt className="text-[#c8a96e]" size={16} />} label="+1 (800) 529-6729" sub="Mon – Sat, 9am – 6pm" />
          <ContactItem icon={<RiMapPin2Fill className="text-[#c8a96e]" size={18} />} label="142 Tile District, NYC" sub="Visit our flagship showroom" />
          <ContactItem icon={<IoPlayCircle className="text-[#c8a96e]" size={20} />} label="Watch: Tile Trends 2025" sub="New video every Thursday" />
        </div>
      </div>

      {/* Newsletter + Social */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-[#ebdcd0] dark:border-[#1e1c1a] pb-10">
          <div className="w-full lg:max-w-lg">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#6c6253] dark:text-[#5a5448] mb-3 transition-colors">Stay Inspired</p>
            <p className="font-serif text-xl md:text-2xl text-[#1a1510] dark:text-[#e0d9ce] mb-6 transition-colors">
              Design trends, new arrivals & exclusive offers
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white dark:bg-[#1a1815] border border-[#d6cfc5] dark:border-[#2e2b27] border-r-0 text-[#1a1510] dark:text-[#e0d9ce] text-sm px-4 py-3 outline-none focus:border-[#c8a96e] transition-colors"
              />
              <button className="bg-[#c8a96e] hover:bg-[#b8995e] text-[#1a1510] text-[11px] tracking-widest uppercase font-semibold px-6 py-3 transition-all active:scale-95 shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#6c6253] dark:text-[#5a5448] transition-colors">Follow the craft</p>
            <div className="flex gap-3">
              {[
                { icon: <FaInstagram size={20} />, link: "#" },
                { icon: <FaPinterest size={20} />, link: "#" },
                { icon: <FaHouzz size={20} />, link: "#" },
                { icon: <FaYoutube size={20} />, link: "#" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.link}
                  className="w-10 h-10 border border-[#d6cfc5] dark:border-[#2e2b27] bg-white dark:bg-transparent text-[#6c6253] dark:text-[#7a7468] hover:text-[#c8a96e] dark:hover:text-[#c8a96e] hover:border-[#c8a96e] dark:hover:border-[#c8a96e] flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <span className="text-xs text-[#7c746a] dark:text-[#4a4640] transition-colors">© 2025 Luxora Tiles & Surfaces. All rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy Policy", "Terms of Use", "Cookie Settings", "Sitemap"].map((l) => (
            <Link key={l} href="#" className="text-xs text-[#7c746a] dark:text-[#4a4640] hover:text-[#c8a96e] dark:hover:text-[#c8a96e] transition-colors">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div className="space-y-5">
    <p className="text-[10px] tracking-[0.2em] uppercase text-[#6c6253] dark:text-[#5a5448] font-semibold transition-colors">{title}</p>
    <div className="flex flex-col gap-3">
      {links.map((l) => (
        <Link key={l} href="#" className="text-[13.5px] text-[#5a544c] dark:text-[#7a7468] hover:text-[#c8a96e] dark:hover:text-[#c8a96e] transition-colors">{l}</Link>
      ))}
    </div>
  </div>
);

const ContactItem = ({ icon, label, sub }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 bg-white dark:bg-[#1e1c1a] border border-[#d6cfc5] dark:border-[#2e2b27] group-hover:border-[#c8a96e] flex items-center justify-center shrink-0 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-sm text-[#4a4238] dark:text-[#a09080] font-medium leading-none mb-1 group-hover:text-[#1a1510] dark:group-hover:text-[#e8e2d9] transition-colors">{label}</p>
      <p className="text-[11px] text-[#7c746a] dark:text-[#6a6460] transition-colors">{sub}</p>
    </div>
  </div>
);

export default Footer;