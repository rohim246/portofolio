export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "education" | "tools" | "non-teaching";
  image: string;
  video?: string;
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
    title: "SIP Sipaling Hadir",
    description: "Aplikasi Presensi Siswa Berbasis QR Code. Izin jadi mudah, absensi jadi cepat, dan guru bisa pantau kehadiran siswa secara real-time.",
    longDescription: "Sistem manajemen Presensi yang membantu guru dalam mengelola kelas secara efisien. Dilengkapi dengan absensi QR code, penjadwalan otomatis, analitik performa siswa berbasis data, dan notifikasi real-time untuk orang tua.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techStack: ["React.js", "BunJs", "TypeScript","Laravel", "Shadcn", "Tailwind CSS"],
    liveUrl: "https://sipaling-hadir.vercel.app/",
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
  {
    id: "dokumentasi-video",
    title: "Dokumentasi Video Pembelajaran",
    description: "Dokumentasi kegiatan pendidikan dan pembelajaran.",
    longDescription: "Video dokumentasi kegiatan pendidikan dan pembelajaran.",
    category: "education",
    image: "/images/mengajar3.jpeg",
    video: "/Videos/dokumentasi%20video.mp4",
    techStack: ["Dokumentasi", "Pendidikan"],
    featured: true,
  },
  {
    id: "perancangan-rpp",
    title: "Perancangan RPP",
    description: "Dokumen perencanaan pembelajaran.",
    longDescription: "Dokumen perancangan Rencana Pelaksanaan Pembelajaran.",
    category: "non-teaching",
    image: "https://drive.google.com/thumbnail?id=1NFKa9_Y_C4ye3TaOmgFiLVY6gMlxRBTp&sz=w600",
    techStack: ["PPL", "Perencanaan"],
    liveUrl: "https://drive.google.com/file/d/1NFKa9_Y_C4ye3TaOmgFiLVY6gMlxRBTp/view?usp=sharing",
    featured: true,
  },
  {
    id: "evaluasi-mengajar",
    title: "Evaluasi Mengajar",
    description: "Dokumentasi evaluasi kegiatan pembelajaran.",
    longDescription: "Dokumen evaluasi sebagai bahan refleksi dan perbaikan kegiatan mengajar.",
    category: "non-teaching",
    image: "https://drive.google.com/thumbnail?id=1mFIbIYnq2IXPwQbjEJ3SHLAgk5q2Oip2&sz=w600",
    techStack: ["PPL", "Evaluasi"],
    liveUrl: "https://drive.google.com/file/d/1mFIbIYnq2IXPwQbjEJ3SHLAgk5q2Oip2/view?usp=sharing",
    featured: true,
  },
  {
    id: "input-dapodik",
    title: "Input Dapodik",
    description: "Dokumentasi kegiatan input data Dapodik.",
    longDescription: "Dokumentasi kegiatan administrasi dan penginputan data Dapodik.",
    category: "non-teaching",
    image: "https://drive.google.com/thumbnail?id=1gzH3FOQmwV9NoWNo-FcMZaXN3UIPSycH&sz=w600",
    techStack: ["PPL", "Administrasi"],
    liveUrl: "https://drive.google.com/file/d/1gzH3FOQmwV9NoWNo-FcMZaXN3UIPSycH/view?usp=sharing",
    featured: true,
  },
  {
    id: "persiapan-ujian-kelas-12",
    title: "Persiapan Ujian Kelas 12",
    description: "Dokumentasi persiapan ujian untuk murid kelas 12.",
    longDescription: "Dokumentasi kegiatan persiapan ujian kelas 12.",
    category: "non-teaching",
    image: "https://drive.google.com/thumbnail?id=1bfmDGvp4_EA8HnfRi3IXuPw5yTPzeB1W&sz=w600",
    techStack: ["PPL", "Persiapan Ujian"],
    liveUrl: "https://drive.google.com/file/d/1bfmDGvp4_EA8HnfRi3IXuPw5yTPzeB1W/view?usp=sharing",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web App" },
  { id: "education", label: "Pendidikan" },
  { id: "non-teaching", label: "Non Mengajar" },
] as const;

export const gallerySectionData = {
  subtitle: "Galeri",
  title: "Dokumentasi Saya",
  description: "Kumpulan dokumentasi visual dari perjalanan saya",
};

export type ProjectsData = typeof projects;
export type CategoryType = typeof categories[number];