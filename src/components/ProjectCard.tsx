import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      setTilt({ x, y });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
    };

    const categoryColor: Record<string, string> = {
      web: "from-blue-500 to-cyan-500",
      education: "from-emerald-500 to-teal-500",
      tools: "from-orange-500 to-amber-500",
    };

    return (
      <motion.article
        ref={ref}
        className="group relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
          transform: isHovered
            ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)`
            : "rotateX(0) rotateY(0) scale(1)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className="relative h-full rounded-2xl overflow-hidden glass transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/10"
        >
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColor[project.category] ?? "from-primary-500 to-teal-500"}`}
            >
              {project.category === "web"
                ? "Web App"
                : project.category === "education"
                  ? "Pendidikan"
                  : "Tools"}
            </span>
          </div>

          {/* Hover overlay with links */}
          <motion.div
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                aria-label={`Lihat demo ${project.title}`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                aria-label={`Lihat kode sumber ${project.title}`}
              >
                <FaGithub size={18} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300 font-mono border border-white/5 hover:border-primary-500/30 hover:text-primary-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

{/* Bottom glow on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, #06b6d4, transparent)",
          }}
        ></div>
        </div>
      </motion.article>
    );
  }
);
export default ProjectCard;
