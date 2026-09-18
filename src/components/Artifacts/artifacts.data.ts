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
    id: "refleksi-filosofi-pendidikan",
    title: "Refleksi Filosofi Pendidikan dan Pendidikan Nilai",
    description: "Refleksi mendalam mengenai filosofi pendidikan dan implementasi pendidikan nilai dalam konteks pembelajaran modern.",
    longDescription: "Dokumen refleksi yang membahas landasan filosofis pendidikan serta bagaimana pendidikan nilai dapat diintegrasikan dalam proses pembelajaran untuk membentuk karakter peserta didik.",
    category: "education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "Pendidikan"],
    liveUrl: "https://drive.google.com/file/d/1nrFqV4w6164E1ep_lTxy1Th46OJmpeOe/view?usp=sharing",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
  {
    id: "refleksi-growth-mindset",
    title: "Refleksi Growth Mindset",
    description: "Analisis dan refleksi penerapan growth mindset dalam proses pembelajaran dan pengembangan diri.",
    longDescription: "Refleksi tentang konsep growth mindset oleh Carol Dweck dan penerapannya dalam mengembangkan kemampuan belajar serta menghadapi tantangan di dunia pendidikan.",
    category: "education",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "Psikologi Pendidikan"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
  {
    id: "refleksi-pemahaman-peserta-didik",
    title: "Refleksi Pemahaman tentang Peserta Didik dan Pembelajaran",
    description: "Kajian teoritis dan praktis memahami karakteristik peserta didik serta proses pembelajaran yang efektif.",
    longDescription: "Refleksi mendalam mengenai teori-teori pembelajaran, tahapan perkembangan peserta didik, dan strategi pembelajaran yang responsif terhadap kebutuhan individu.",
    category: "education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "Psikologi Belajar"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
  {
    id: "refleksi-pembelajaran-kreatif",
    title: "Refleksi Pembelajaran Kreatif Inovatif",
    description: "Eksplorasi model-model pembelajaran kreatif dan inovatif untuk meningkatkan keterlibatan peserta didik.",
    longDescription: "Dokumen refleksi yang mengkaji berbagai pendekatan pembelajaran kreatif seperti project-based learning, design thinking, dan metode inovatif lainnya.",
    category: "education",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "Inovasi Pembelajaran"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
  {
    id: "refleksi-pembelajaran-mendalam",
    title: "Refleksi Pembelajaran Mendalam dan Asesmen",
    description: "Studi tentang konsep pembelajaran mendalam (deep learning) dan strategi asesmen autentik.",
    longDescription: "Refleksi mengenai perbedaan surface learning vs deep learning, serta pengembangan instrumen asesmen yang mengukur pemahaman konseptual peserta didik.",
    category: "education",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "Asesmen"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
  {
    id: "refleksi-ppl-terbimbing",
    title: "Refleksi Praktik Pengalaman Lapangan (PPL) Terbimbing",
    description: "Catatan refleksi pengalaman mengajar langsung di sekolah selama program PPL terbimbing.",
    longDescription: "Dokumentasi refleksi harian dan analisis pengalaman praktik mengajar di SMA, mencakup manajemen kelas, perencanaan pembelajaran, dan evaluasi diri sebagai calon guru profesional.",
    category: "education",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    techStack: ["PDF", "Refleksi", "PPL", "Praktik Mengajar"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    sourceUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "education", label: "Refleksi Semester 1" },
] as const;

export const artifactsSectionData = {
  subtitle: "Artefak",
  title: "Refleksi Mata Kuliah Semester 1",
  description: "Kumpulan dokumen refleksi mata kuliah semester 1 program PPG Informatika UNY",
};

export type ProjectsData = typeof projects;
export type CategoryType = typeof categories[number];