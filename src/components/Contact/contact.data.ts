import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

export const contactData = {
  subtitle: "Kontak",
  title: "Mari Terhubung",
  description: "Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya",
  socialLinks: [
    {
      icon: HiEnvelope,
      label: "Email",
      value: "rohim.klaten246@gmail.com",
      href: "mailto:rohim.klaten246@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "abdur-rohim",
      href: "https://linkedin.com/in/abdur-rohim",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "rohim246",
      href: "https://github.com/rohim246",
      color: "from-gray-600 to-gray-700",
    },
  ],
  formFields: {
    name: {
      label: "Nama",
      placeholder: "Nama lengkap",
      errorMessages: {
        required: "Nama wajib diisi",
      },
    },
    email: {
      label: "Email",
      placeholder: "email@contoh.com",
      errorMessages: {
        required: "Email wajib diisi",
        invalid: "Format email tidak valid",
      },
    },
    subject: {
      label: "Subjek",
      placeholder: "Topik pesan",
      errorMessages: {
        required: "Subjek wajib diisi",
      },
    },
    message: {
      label: "Pesan",
      placeholder: "Tulis pesan Anda di sini...",
      errorMessages: {
        required: "Pesan wajib diisi",
        minLength: "Pesan minimal 10 karakter",
      },
    },
  },
  submitButton: {
    default: "Kirim Pesan",
    loading: "Mengirim...",
    success: "Pesan Terkirim!",
  },
};

export type ContactData = typeof contactData;
export type SocialLink = typeof contactData.socialLinks[0];