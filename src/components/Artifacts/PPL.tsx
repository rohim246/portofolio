import { motion } from "framer-motion";
import {
  HiArrowTopRightOnSquare,
  HiBookOpen,
  HiComputerDesktop,
  HiDocumentText,
  HiClipboardDocumentCheck,
  HiExclamationTriangle,
  HiSparkles,
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
          const Icon =
            card.id === "modul-ajar"
              ? HiDocumentText
              : card.id === "materi-ajar"
                ? HiBookOpen
                : card.id === "media-pembelajaran"
                  ? HiComputerDesktop
                  : HiClipboardDocumentCheck;

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

      <motion.article
        className="glass mt-10 overflow-hidden rounded-3xl border border-primary-400/15"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55 }}
      >
        <div className="border-b border-white/[0.08] bg-gradient-to-r from-primary-500/10 via-teal-500/[0.06] to-transparent px-6 py-7 sm:px-9 sm:py-9">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-400/15 text-primary-300">
              <HiSparkles size={23} aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
              Refleksi Praktik
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            {pplSectionData.analysisReflection.title}
          </h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 sm:text-base">
            {pplSectionData.analysisReflection.introduction}{" "}
            <span className="font-semibold text-primary-200">
              {pplSectionData.analysisReflection.school}
            </span>
            .
          </p>
        </div>

        <div className="space-y-10 p-6 sm:p-9">
          <section aria-labelledby="ppl-analysis-heading">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-primary-400 to-teal-400" />
              <h4 id="ppl-analysis-heading" className="text-lg font-bold text-white">
                Analisis Pembelajaran
              </h4>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {pplSectionData.analysisReflection.analysis.map((aspect, index) => (
                <div
                  key={aspect.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6"
                >
                  <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-400/10 font-mono text-xs font-semibold text-primary-300">
                    0{index + 1}
                  </span>
                  <h5 className="mb-2 font-semibold text-white">{aspect.title}</h5>
                  <p className="text-sm leading-7 text-gray-400">
                    {aspect.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ppl-challenges-heading">
            <div className="mb-5 flex items-center gap-3">
              <HiExclamationTriangle
                className="text-amber-300"
                size={21}
                aria-hidden="true"
              />
              <h4 id="ppl-challenges-heading" className="text-lg font-bold text-white">
                {pplSectionData.analysisReflection.challengesTitle}
              </h4>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-amber-300/10 bg-amber-300/[0.04] p-5 sm:p-6">
                <h5 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-200">
                  Hambatan
                </h5>
                <p className="text-sm leading-7 text-gray-300">
                  {pplSectionData.analysisReflection.challenge}
                </p>
              </div>
              <div className="rounded-2xl border border-primary-300/10 bg-primary-300/[0.04] p-5 sm:p-6">
                <h5 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Solusi & Mitigasi
                </h5>
                <p className="text-sm leading-7 text-gray-300">
                  {pplSectionData.analysisReflection.mitigation}
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="ppl-reflection-heading">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-teal-400 to-accent-400" />
              <h4 id="ppl-reflection-heading" className="text-lg font-bold text-white">
                {pplSectionData.analysisReflection.reflectionTitle}
              </h4>
            </div>
            <p className="mb-5 max-w-5xl text-sm leading-7 text-gray-300 sm:text-base">
              {pplSectionData.analysisReflection.reflection}
            </p>
            <div className="grid gap-3 lg:grid-cols-3">
              {pplSectionData.analysisReflection.followUps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 sm:p-5"
                >
                  <h5 className="mb-2 text-sm font-semibold text-teal-200">
                    {item.title}
                  </h5>
                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.article>
    </div>
  </SectionWrapper>
);

export default PPL;
