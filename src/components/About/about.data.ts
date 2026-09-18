import { HiAcademicCap, HiBriefcase, HiMapPin, HiSparkles } from "react-icons/hi2";

export const aboutData = {
  title: "Identitas & Filosofi Pendidik",
  subtitle: "Tentang Saya",
  profile: {
    name: "Abdur Rohim",
    role: "Calon Guru & Developer",
    icon: HiSparkles,
    description: [
      "Saya adalah lulusan S1 Teknologi Pendidikan dari Universitas Negeri Yogyakarta yang memiliki minat dan kompetensi dalam bidang pendidikan serta teknologi informasi. Saat ini saya sedang menempuh Pendidikan Profesi Guru (PPG) Jurusan Informatika dengan komitmen untuk mengembangkan kemampuan profesional sebagai pendidik yang adaptif, inovatif, dan mampu mengikuti perkembangan teknologi di era digital.",
      "Saya memiliki kemampuan dalam pembelajaran berbasis teknologi, komunikasi yang baik, serta semangat belajar yang tinggi dalam meningkatkan kualitas pendidikan. Dengan latar belakang akademik dan pengalaman pembelajaran yang saya miliki, saya siap berkontribusi secara profesional dalam lingkungan pendidikan maupun pengembangan teknologi pembelajaran.",
    ],
    quickFacts: [
      { icon: HiMapPin, label: "Klaten, Jawa Tengah" },
      { icon: HiAcademicCap, label: "PPG UNY" },
    ],
  },
  stats: [
    { value: "5+", label: "Proyek" },
    { value: "PPL", label: "SMA N 11 YK" },
    { value: "∞", label: "Semangat" },
  ],
  timeline: [
    {
      year: "2026",
      title: "Mahasiswa PPG Informatika",
      institution: "Universitas Negeri Yogyakarta",
      description: "Menjalani Pendidikan Profesi Guru (PPG) untuk menjadi guru informatika profesional. Mengasah kemampuan pedagogik, merancang pembelajaran inovatif, dan memperdalam kompetensi teknologi pendidikan.",
      icon: HiAcademicCap,
      color: "from-primary-500 to-teal-500",
    },
    {
      year: "2026",
      title: "Praktik Pengalaman Lapangan (PPL)",
      institution: "SMA N 11 Yogyakarta",
      description: "Melaksanakan praktik mengajar langsung di kelas. Mengembangkan media pembelajaran interaktif, menerapkan asesmen berbasis teknologi, dan mengelola kelas dengan pendekatan yang inklusif dan humanis.",
      icon: HiBriefcase,
      color: "from-emerald-500 to-teal-500",
    },
    {
      year: "2015 – 2020",
      title: "Sarjana Pendidikan",
      institution: "Universitas Negeri Yogyakarta",
      description: "Membangun fondasi kuat di bidang ilmu komputer dan pedagogi. Aktif mengeksplorasi pengembangan web modern, berkontribusi dalam proyek penelitian, dan mengikuti berbagai kompetisi teknologi.",
      icon: HiAcademicCap,
      color: "from-orange-500 to-amber-500",
    },
  ],
};

export type AboutData = typeof aboutData;

export type TimelineItem = typeof aboutData.timeline[0];
export type StatItem = typeof aboutData.stats[0];