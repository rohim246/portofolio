export const navbarData = {
  logo: {
    initials: "AR",
    fullName: "Abdur Rohim",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Proyek" },
    { id: "about", label: "Tentang" },
    { id: "gallery", label: "Galeri" },
    {
      id: "artifacts",
      label: "Artefak",
      children: [
        { id: "ppl", label: "PPL" },
        { id: "seminar", label: "Seminar" },
      ],
    },
    { id: "contact", label: "Kontak" },
  ],
  ctaButton: {
    label: "Hubungi Saya",
    href: "#contact",
  },
};

export type NavbarData = typeof navbarData;
export type NavLink = (typeof navbarData.navLinks)[number];