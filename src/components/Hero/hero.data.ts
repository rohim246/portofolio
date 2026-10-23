import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";

export const heroData = {
  name: "Abdur Rohim",
  headline: "Calon Guru Profesional Informatika",
  subtitle: "Mahasiswa PPG Informatika di Universitas Negeri Yogyakarta.",
  badgeText: "Terbuka untuk kolaborasi & kesempatan baru",
  greeting: "Assalamu'alaikum, Saya",
  description: "“Inspirasi saya menjadi guru berawal dari keyakinan bahwa pendidikan adalah kunci mengembangkan potensi terbaik setiap individu. Saya ingin menjadi guru profesional yang tidak hanya mengajar, tetapi juga menginspirasi dan membantu peserta didik berkembang menjadi pribadi yang percaya diri serta berkarakter.”",
  ctaButtons: [
    {
      label: "Lihat Proyek Saya",
      href: "#projects",
      icon: HiArrowDown,
      variant: "primary",
    },
  ],
  socialLinks: [
    {
      icon: FaGithub,
      href: "https://github.com/rohim246",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/abdur-rohim",
      label: "LinkedIn",
    },
  ],
};

export type HeroData = typeof heroData;