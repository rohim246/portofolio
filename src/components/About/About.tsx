import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
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

        {/* Vision and mission */}
        <div className="mb-20">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-primary-400/20 bg-gradient-to-br from-primary-500/15 via-teal-500/10 to-transparent p-7 sm:p-10 lg:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative mx-auto max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/15 text-primary-300">
                  <HiSparkles size={21} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
                  Visi
                </p>
              </div>
              <p className="text-center text-xl font-medium italic leading-relaxed text-white sm:text-2xl lg:text-3xl">
                “{aboutData.visionMission.vision}”
              </p>
            </div>
          </motion.div>

          <div className="mb-8 mt-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                Langkah nyata
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Misi Saya
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-right">
              Nilai-nilai yang menjadi pegangan dalam mendampingi setiap murid
              untuk tumbuh dan menemukan potensinya.
            </p>
          </div>

          <motion.ol
            className="grid gap-4 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {aboutData.visionMission.missions.map((mission, index) => (
              <motion.li
                key={mission.title}
                variants={itemVariants}
                className="glass group flex gap-4 rounded-2xl p-5 transition-colors duration-300 hover:bg-white/[0.07] sm:p-6"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-primary-400/20 bg-primary-400/10 font-mono text-sm font-semibold text-primary-300 transition-colors group-hover:bg-primary-400/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  <span className="font-semibold text-white">
                    {mission.title}
                  </span>{" "}
                  {mission.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
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
                  id={item.id}
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