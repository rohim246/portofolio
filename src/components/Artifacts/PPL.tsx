import { motion } from "framer-motion";
import {
  HiArrowTopRightOnSquare,
  HiBookOpen,
  HiDocumentText,
} from "react-icons/hi2";
import SectionWrapper from "../SectionWrapper";
import { pplSectionData } from "./ppl.data";

const PPL = () => (
  <SectionWrapper id="ppl">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <motion.span
          className="mb-5 inline-block text-sm font-semibold uppercase tracking-widest text-accent-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {pplSectionData.subtitle}
        </motion.span>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {pplSectionData.title}
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {pplSectionData.description}
        </motion.p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        {pplSectionData.cards.map((card, index) => {
          const Icon = card.id === "modul-ajar" ? HiDocumentText : HiBookOpen;

          return (
            <motion.article
              key={card.id}
              className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.06] sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-teal-500/20 text-primary-300">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{card.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {card.resources.map((resource, resourceIndex) => (
                  <li key={resource.title}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary-400/30 hover:bg-primary-400/[0.06]"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] font-mono text-xs text-primary-300">
                          {String(resourceIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-gray-200 transition-colors group-hover:text-white">
                          {resource.title}
                        </span>
                      </span>
                      <HiArrowTopRightOnSquare
                        className="flex-shrink-0 text-gray-500 transition-colors group-hover:text-primary-300"
                        size={18}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </SectionWrapper>
);

export default PPL;
