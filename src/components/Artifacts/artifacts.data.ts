export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "education" | "education-semester-2" | "ppg-learning-reflection" | "tools";
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "refleksi-mata-kuliah-semester-1",
    title: "Refleksi Mata Kuliah Semester 1",
    description: "Kumpulan refleksi mata kuliah semester 1 dalam program PPG Informatika UNY.",
    longDescription: "Dokumen refleksi mata kuliah semester 1 yang disusun sebagai bagian dari program PPG Informatika UNY.",
    category: "education",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    techStack: ["Refleksi", "Pendidikan", "Semester 1"],
    liveUrl: "https://drive.google.com/drive/folders/1K7U9V-IMW9RRHjUF8ywSctCUTTX_Hh5h?usp=drive_link",
    featured: true,
  },
  {
    id: "refleksi-mata-kuliah-semester-2",
    title: "Refleksi Mata Kuliah Semester 2",
    description: "Kumpulan refleksi mata kuliah semester 2 dalam program PPG Informatika UNY.",
    longDescription: "Dokumen refleksi mata kuliah semester 2 yang disusun sebagai bagian dari program PPG Informatika UNY.",
    category: "education-semester-2",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    techStack: ["Refleksi", "Pendidikan", "Semester 2"],
    liveUrl: "https://drive.google.com/drive/folders/1hrM9gudPfQoqcpsEiq3sQD30iNe0BBLl?usp=drive_link",
    featured: true,
  },
  {
    id: "refleksi-pengalaman-belajar-ppg",
    title: "Refleksi Pengalaman Belajar PPG",
    description: "Refleksi pengalaman belajar selama mengikuti program PPG Informatika UNY.",
    longDescription: "Dokumen refleksi pengalaman belajar yang disusun sebagai bagian dari program PPG Informatika UNY.",
    category: "ppg-learning-reflection",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    techStack: ["Refleksi", "Pendidikan", "PPG"],
    liveUrl: "https://drive.google.com/drive/folders/13bvonDBtYj1HEejp9Lgk0XqfJ1ETvIOj?usp=drive_link",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "education", label: "Refleksi Semester 1" },
  { id: "education-semester-2", label: "Refleksi Semester 2" },
  { id: "ppg-learning-reflection", label: "Refleksi Pengalaman Belajar PPG" },
] as const;

export const artifactsSectionData = {
  subtitle: "Seminar",
  title: "Refleksi Mata Kuliah",
  description: "Kumpulan dokumen refleksi mata kuliah program PPG Informatika UNY",
};

export type ProjectsData = typeof projects;
export type CategoryType = typeof categories[number];