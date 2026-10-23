import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
import { navbarData } from "./navbar.data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navbarData.navLinks.flatMap((link) =>
      link.children ? link.children.map((child) => child.id) : [link.id],
    );
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
      window.requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (!target) return;

        const navbarHeight =
          document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
        const top =
          target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      });
    }
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdownOpen(false);
  };

  const isLinkActive = (link: (typeof navbarData.navLinks)[number]) =>
    link.id === activeSection ||
    Boolean(link.children?.some((child) => child.id === activeSection));

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="relative group flex items-center gap-2"
            aria-label="Go to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/50 transition-shadow duration-300">
              {navbarData.logo.initials}
            </div>
            <span className="hidden sm:block font-semibold text-white tracking-tight">
              {navbarData.logo.fullName}
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navbarData.navLinks.map((link) => {
              const active = isLinkActive(link);
              if (link.children) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.id}
                      onClick={() => setOpenDropdown(link.id)}
                      onFocus={() => setOpenDropdown(link.id)}
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg bg-white/10"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      <HiChevronDown
                        className={`relative z-10 transition-transform ${openDropdown === link.id ? "rotate-180" : ""}`}
                        size={14}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.id && (
                        <motion.div
                          className="absolute left-0 top-full z-50 w-44 pt-2"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16 }}
                        >
                          <div className="glass-strong rounded-lg p-1 shadow-xl">
                            {link.children.map((child) => (
                              <a
                                key={child.id}
                                href={`#${child.id}`}
                                onClick={(event) => {
                                  event.preventDefault();
                                  scrollTo(child.id);
                                }}
                                className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${activeSection === child.id ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo(navbarData.ctaButton.href.replace("#", ""))}
              className="btn-primary text-sm !px-5 !py-2.5"
            >
              {navbarData.ctaButton.label}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-strong border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navbarData.navLinks.map((link, i) => {
                const active = isLinkActive(link);
                if (link.children) {
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        aria-expanded={mobileDropdownOpen}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${active ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                      >
                        {link.label}
                        <HiChevronDown
                          className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                          size={16}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            className="ml-4 mt-1 border-l border-white/10 pl-3"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {link.children.map((child) => (
                              <a
                                key={child.id}
                                href={`#${child.id}`}
                                onClick={(event) => {
                                  event.preventDefault();
                                  scrollTo(child.id);
                                }}
                                className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${activeSection === child.id ? "text-white" : "text-gray-400 hover:text-white"}`}
                              >
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${active ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.button
                onClick={() => scrollTo(navbarData.ctaButton.href.replace("#", ""))}
                className="btn-primary w-full justify-center text-sm mt-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navbarData.navLinks.length * 0.05 }}
              >
                {navbarData.ctaButton.label}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;