import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "./hero.data";

/* ── Animated floating shapes ── */
const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full opacity-20 blur-xl pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ── Typewriter ── */
const useTypewriter = (text: string, speed = 50, startDelay = 800) => {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, done };
};

/* ── Particle field ── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleField = () => {
  const particles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ── Hero ── */
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* parallax on mouse move */
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const { displayedText, done } = useTypewriter(heroData.headline, 40, 1200);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at ${50 + mousePos.x * 5}% ${50 + mousePos.y * 5}%, rgba(99,102,241,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at ${70 + mousePos.x * 3}% ${30 + mousePos.y * 3}%, rgba(139,92,246,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at ${30 + mousePos.x * 4}% ${70 + mousePos.y * 4}%, rgba(6,182,212,0.12) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating decorations */}
      <FloatingShape
        className="w-72 h-72 bg-primary-500 top-20 -left-20"
        delay={0}
      />
      <FloatingShape
        className="w-96 h-96 bg-teal-500 -top-10 right-10"
        delay={2}
      />
      <FloatingShape
        className="w-64 h-64 bg-accent-500 bottom-20 right-1/4"
        delay={4}
      />

      <ParticleField />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-28 pt-24 text-center sm:px-6 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Portrait */}
        <motion.div
          variants={itemVariants}
          className="order-1 mx-auto flex h-[min(32vh,280px)] w-full max-w-[260px] items-end justify-center sm:h-[min(48vh,440px)] sm:max-w-[340px] lg:order-2 lg:h-[min(72vh,680px)] lg:max-w-none"
        >
          <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-primary-400/[0.08] via-teal-400/[0.05] to-transparent">
            <div className="absolute bottom-0 left-1/2 h-3/4 w-4/5 -translate-x-1/2 rounded-full bg-primary-400/15 blur-3xl" />
            <img
              src="/images/foto_profile.png"
              alt="Abdur Rohim"
              className="relative z-10 h-full max-w-full object-contain object-bottom drop-shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </motion.div>

        <div className="order-2 lg:order-1">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {heroData.badgeText}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-lg font-medium text-gray-400 md:text-xl"
          >
            {heroData.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
          >
            <span className="gradient-text">{heroData.name}</span>
          </motion.h1>

          {/* Typewriter headline */}
          <motion.div variants={itemVariants} className="mb-7 min-h-10 md:min-h-12">
            <p className="text-xl font-semibold text-white/80 md:text-2xl lg:text-3xl">
              {displayedText}
              {!done && (
                <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-accent-500 align-middle" />
              )}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-gray-400 text-balance lg:mx-0 lg:text-lg"
          >
            {heroData.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-gray-300 text-balance md:text-base lg:mx-0"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start"
          >
            {heroData.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={`btn-${btn.variant} ${btn.variant === "primary" ? "" : ""}`}
                onClick={btn.variant === "primary" ? (e: React.MouseEvent) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                } : undefined}
              >
                {btn.label}
                {btn.icon && <btn.icon className={btn.variant === "primary" ? "animate-bounce" : ""} />}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-5 lg:justify-start"
          >
            {heroData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-xl glass text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;