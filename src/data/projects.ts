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
    title: "E-Learning Informatika",
    description:
      "Platform pembelajaran interaktif untuk siswa SMA yang menggabungkan materi informatika dengan kuis dan progress tracking.",
    longDescription:
      "Platform e-learning komprehensif yang dirancang selama PPL di SMA N 11 Yogyakarta. Menyediakan materi pembelajaran informatika interaktif, sistem kuis real-time, dashboard progress siswa, dan fitur diskusi. Dibangun dengan pendekatan mobile-first agar dapat diakses dari berbagai perangkat.",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "smart-classroom",
    title: "Smart Classroom Dashboard",
    description:
      "Dashboard manajemen kelas digital dengan fitur absensi otomatis, penjadwalan, dan analitik performa siswa.",
    longDescription:
      "Sistem manajemen kelas pintar yang membantu guru dalam mengelola kelas secara efisien. Dilengkapi dengan absensi QR code, penjadwalan otomatis, analitik performa siswa berbasis data, dan notifikasi real-time untuk orang tua.",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "code-playground",
    title: "Code Playground Edu",
    description:
      "Editor kode online untuk pembelajaran pemrograman dengan fitur live preview, template, dan panduan interaktif.",
    longDescription:
      "Code playground yang dirancang khusus untuk konteks pendidikan. Siswa dapat menulis dan menjalankan kode HTML, CSS, dan JavaScript secara langsung di browser. Dilengkapi dengan template pembelajaran bertahap dan sistem hint untuk membantu proses belajar.",
    category: "tools",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    techStack: ["React", "Monaco Editor", "Web Workers", "Firebase"],
    liveUrl: "#",
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
  {
    id: "portfolio-generator",
    title: "Student Portfolio Generator",
    description:
      "Alat bantu siswa membuat portfolio digital dengan template modern dan ekspor PDF otomatis.",
    longDescription:
      "Aplikasi web yang memudahkan siswa dalam membuat portfolio digital profesional. Menyediakan berbagai template modern, drag-and-drop editor, dan fitur ekspor ke PDF. Dirancang untuk membantu siswa menampilkan karya terbaik mereka.",
    category: "tools",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    techStack: ["Vue.js", "Pinia", "jsPDF", "Tailwind CSS"],
    sourceUrl: "https://github.com/rohim246",
    featured: false,
  },
  {
    id: "kurikulum-mapper",
    title: "Kurikulum Mapper",
    description:
      "Alat pemetaan kurikulum informatika yang membantu guru menyelaraskan materi dengan Capaian Pembelajaran.",
    longDescription:
      "Aplikasi pemetaan kurikulum yang membantu guru informatika dalam menyelaraskan rencana pembelajaran dengan Capaian Pembelajaran (CP) Kurikulum Merdeka. Dilengkapi dengan visualisasi peta konsep dan rekomendasi sumber belajar.",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    techStack: ["React", "D3.js", "Express", "MongoDB"],
    sourceUrl: "https://github.com/rohim246",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web App" },
  { id: "education", label: "Pendidikan" },
  { id: "tools", label: "Tools" },
] as const;
