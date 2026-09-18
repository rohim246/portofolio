import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { aboutData, type TimelineItem } from "./about.data";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-sm font-semibold text-accent-500 tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {aboutData.subtitle}
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {aboutData.title}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Info card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 mb-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                  <aboutData.profile.icon className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{aboutData.profile.name}</h3>
                  <p className="text-sm text-gray-400">{aboutData.profile.role}</p>
                </div>
              </div>

              {aboutData.profile.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 leading-relaxed mb-4 text-balance">
                  {paragraph}
                </p>
              ))}

              {/* Quick facts */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-6">
                {aboutData.profile.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <fact.icon className="text-accent-500 flex-shrink-0" size={18} />
                    <span className="text-sm text-gray-400">{fact.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center hover:bg-white/[0.06] transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-teal-500/30 to-transparent" />

            <div className="space-y-12">
              {aboutData.timeline.map((item: TimelineItem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-3 top-1 w-7 h-7 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center ring-4 ring-dark-900`}
                  >
                    <item.icon className="text-white" size={14} />
                  </div>

                  <div className="glass rounded-xl p-6 hover:bg-white/[0.06] transition-colors group">
                    <span className="text-xs font-mono text-accent-500 tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold mt-1 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary-400/80 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;