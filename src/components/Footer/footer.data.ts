import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

export const footerData = {
  logo: {
    initials: "AR",
    name: "Abdur Rohim",
    copyright: "Dibuat dengan ❤️ dan React",
  },
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
    {
      icon: HiEnvelope,
      href: "mailto:rohim.klaten246@gmail.com",
      label: "Email",
    },
  ],
};

export type FooterData = typeof footerData;
export type SocialLink = typeof footerData.socialLinks[0];