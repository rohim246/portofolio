export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "education" | "tools";
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "e-learning-platform",
    title: "Praktek Pembelajaran Informatika",
    description: "Penerapan modul ajar informatika di SMA N 11 Yogyakarta",
    longDescription: "Penerapan modul ajar informatika di SMA N 11 Yogyakarta dengan pendekatan pembelajaran modern dan interaktif serta menerapkan pembelajaran mendalam.",
    category: "education",
    image: "/images/mengajar1.jpeg",
    techStack: ["Dokumentasi", "Pendidikan"],
    liveUrl: "#",
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "smart-classroom",
    title: "Smart Classroom Dashboard",
    description: "Dashboard manajemen kelas digital dengan fitur absensi otomatis, penjadwalan, dan analitik performa siswa.",
    longDescription: "Sistem manajemen kelas pintar yang membantu guru dalam mengelola kelas secara efisien. Dilengkapi dengan absensi QR code, penjadwalan otomatis, analitik performa siswa berbasis data, dan notifikasi real-time untuk orang tua.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "kurikulum-mapper",
    title: "Pembelajaran Informatika",
    description: "Penerapan kurikulum informatika dengan Capaian Pembelajaran.",
    longDescription: "Pemetaan kurikulum yang membantu guru informatika dalam menyelaraskan rencana pembelajaran dengan Capaian Pembelajaran (CP) Kurikulum Merdeka. Dilengkapi dengan rekomendasi sumber belajar.",
    category: "education",
    image: "/images/mengajar2.jpeg",
    techStack: ["Dokumentasi", "Pendidikan"],
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "dokumentasi-pendidikan",
    title: "Dokumentasi Pembelajaran",
    description: "Dokumentasi kegiatan pendidikan dan pembelajaran interaktif.",
    longDescription: "Kumpulan dokumentasi foto-foto kegiatan pendidikan, pengajaran, dan implementasi kurikulum.",
    category: "education",
    image: "/images/mengajar3.jpeg",
    techStack: ["Dokumentasi", "Pendidikan"],
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web App" },
  { id: "education", label: "Pendidikan" },
] as const;

export const gallerySectionData = {
  subtitle: "Galeri",
  title: "Karya",
  description: "Kumpulan karya dan dokumentasi visual dari perjalanan proyek saya",
};

export type ProjectsData = typeof projects;
export type CategoryType = typeof categories[number];