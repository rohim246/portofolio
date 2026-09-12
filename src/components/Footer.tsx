import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope, HiChevronUp } from "react-icons/hi2";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #06b6d4, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + credit */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-xs">
              AR
            </div>
            <div>
              <p className="text-sm text-white font-medium">Abdur Rohim</p>
              <p className="text-xs text-gray-500">
                © {currentYear} — Dibuat dengan ❤️ dan React
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/rohim246",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/abdur-rohim",
                label: "LinkedIn",
              },
              {
                icon: HiEnvelope,
                href: "mailto:rohim.klaten246@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Kembali ke atas"
          >
            <HiChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
