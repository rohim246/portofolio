import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiDocumentText } from "react-icons/hi2";

export const heroData = {
  name: "Abdur Rohim",
  headline: "Calon Guru Profesional Informatika",
  subtitle: "Mahasiswa PPG Informatika di Universitas Negeri Yogyakarta.",
  badgeText: "Terbuka untuk kolaborasi & kesempatan baru",
  greeting: "Assalamu'alaikum, Saya",
  ctaButtons: [
    {
      label: "Lihat Proyek Saya",
      href: "#projects",
      icon: HiArrowDown,
      variant: "primary",
    },
    {
      label: "Hubungi Saya",
      href: "#contact",
      icon: HiDocumentText,
      variant: "secondary",
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