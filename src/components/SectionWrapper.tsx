import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Delay before animation starts (in seconds) */
  delay?: number;
}

const SectionWrapper = ({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
