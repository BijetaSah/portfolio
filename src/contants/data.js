import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: TbBrandGithubFilled,
    url: "https://github.com/BijetaSah",
    background: "bg-gray-800",
    shadowColor: "blue-500/25",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/bijeta-sah",
    background: "bg-blue-800",
    shadowColor: "blue-500/25",
  },
];
