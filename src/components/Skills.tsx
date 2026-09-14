import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "../data/skills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-sm font-semibold text-accent-500 tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Keahlian
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Teknologi & <span className="gradient-text">Kompetensi</span>
          </motion.h2>
          <motion.p
            className="section-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Menguasai berbagai teknologi modern dan kompetensi pendidikan untuk
            menciptakan solusi yang berdampak
          </motion.p>
        </div>

        {/* Skill categories grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              className="glass rounded-2xl p-8 lg:p-10 hover:bg-white/[0.06] transition-colors group"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 transition-colors">
                  <category.icon className="text-primary-400" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill tags */}
              <motion.div
                className="flex flex-wrap gap-4"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 20px ${skill.color}20`,
                    }}
                    className="group/tag flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      size={16}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover/tag:scale-110"
                    />
                    <span className="text-sm text-gray-300 font-medium group-hover/tag:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
