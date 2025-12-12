import { TbBrandGithubFilled } from "react-icons/tb";
import {
  FaLinkedin,
  FaCode,
  FaPaintBrush,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";

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

export const aboutSection = {
  title: "About Me",
  description:
    "Frontend Developer who loves turning ideas into clean, fast, and visually appealing user interfaces. I specialize in building modern web applications using Next.js, React, TypeScript, Tailwind CSS, ReactQuery and Redux, with a strong focus on performance, accessibility, and smooth user experience.",
  moreDescription:
    "I’m constantly learning, improving, and experimenting with new technologies—and I love building things that feel good to use. Whether it's crafting clean code, designing intuitive UI, or optimizing performance, I aim to create experiences that users enjoy and remember.",
  whatIDo: [
    {
      icon: FaCode,
      title: "Clean Code",
      text: "I write readable, maintainable, and scalable code using best practices.",
    },
    {
      icon: FaPaintBrush,
      title: "Beautiful UI",
      text: "I focus on creating aesthetic and user-friendly designs with attention to detail.",
    },
    {
      icon: FaBolt,
      title: "High Performance",
      text: "I ensure fast, optimized, and smooth performance in every project I build.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      text: "I build interfaces that look stunning on every screen size and device.",
    },
  ],
};

export const skills = [
  { name: "HTML", level: 90, background: "bg-blue-500" },
  { name: "CSS", level: 85, background: "bg-teal-500" },
  { name: "Tailwind CSS", level: 85, background: "bg-indigo-500" },
  { name: "JavaScript", level: 80, background: "bg-yellow-500" },
  { name: "React", level: 80, background: "bg-purple-500" },
  { name: "Next.js", level: 75, background: "bg-green-500" },
  { name: "TypeScript", level: 70, background: "bg-emerald-500" },
  { name: "Styled Components", level: 75, background: "bg-lime-500" },
  { name: "Redux", level: 70, background: "bg-pink-800" },
  { name: "React Query", level: 65, background: "bg-cyan-500" },
  { name: "Context API", level: 80, background: "bg-blue-500" },
  { name: "Git", level: 80, background: "bg-slate-500" },
  { name: "GitHub", level: 85, background: "bg-sky-500" },
  { name: "Figma", level: 70, background: "bg-violet-300" },
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "Collegepur",
    duration: "Aug 2025 – Nov 2025",
    description: [
      "Awarded 'Intern of the Week' twice for exceptional performance",
      "Migrated legacy UI to Next.js with TypeScript for improved maintainability and performance",
      "Implemented core features and state management using Redux",
      "Built and refined the admin panel for content and user management using React, Context API",
    ],
  },

  {
    role: "Frontend Developer Intern",
    company: "LearnLine (Edustation)",
    duration: "Nov 2025 – Jan 2026",
    description: [
      "Developed a custom CMS for course and content management using Next.js and TypeScript",
      "Leveraged AI tools to speed up content generation and workflow automation",
      "Collaborated with the team to maintain best practices and improve developer experience",
    ],
  },
];
