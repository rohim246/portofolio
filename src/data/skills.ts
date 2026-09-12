import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiVuedotjs,
  SiFirebase,
  SiVite,
  SiPrisma,
} from "react-icons/si";
import {
  HiAcademicCap,
  HiLightBulb,
  HiUserGroup,
  HiPresentationChartBar,
} from "react-icons/hi2";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconType;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiHtml5, color: "#1572B6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: SiGit,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    id: "education",
    title: "Kompetensi Pendidikan",
    icon: HiAcademicCap,
    skills: [
      { name: "Desain Pembelajaran", icon: HiLightBulb, color: "#FBBF24" },
      { name: "Asesmen Digital", icon: HiPresentationChartBar, color: "#34D399" },
      { name: "Manajemen Kelas", icon: HiUserGroup, color: "#818CF8" },
      { name: "Kurikulum Merdeka", icon: HiAcademicCap, color: "#F472B6" },
    ],
  },
];
