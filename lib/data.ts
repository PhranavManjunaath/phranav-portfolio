export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Technical Journal", href: "#journal" },
  { label: "Get in Touch", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/PhranavManjunaath" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/phranav-manjunath-1857bb395",
  },
  { label: "Email", href: "mailto:phranavmp@gmail.com" },
];

export const metrics = [
  { value: "3+", label: "End-to-End Projects Built" },
  { value: "4", label: "Programming Languages — Python, C, Java, JavaScript" },
  { value: "2023–2027", label: "B.Tech Artificial Intelligence & Data Science" },
];

export const techTicker = [
  "Python",
  "C",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "MySQL",
  "SQLite",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "NumPy",
  "Pandas",
  "Machine Learning",
  "Git",
  "GitHub",
];

export type Project = {
  id: string;
  domain: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    domain: "Computer Vision & ML",
    title: "AI-Based Exam Hall Cheating Detection",
    description:
      "Currently developing an AI system to detect suspicious activity in exams, exploring computer vision and machine learning for real-world proctoring.",
    stack: ["Python", "Machine Learning", "Computer Vision"],
  },
  {
    id: "02",
    domain: "Full-Stack Web",
    title: "Athlete-Centric Calorie & Physique Tracker",
    description:
      "A practical fitness tool to manage workouts, calorie intake, macros, and progressive overload using Python and web technologies.",
    stack: ["Python", "Web Development", "JavaScript"],
  },
  {
    id: "03",
    domain: "Developer Tool",
    title: "Internship Tracker",
    description:
      "Built to organize internship applications — tracking status and deadlines so searching and applying stays manageable.",
    stack: ["Web Technologies", "GitHub", "Problem Solving"],
  },
  {
    id: "04",
    domain: "Open Source",
    title: "trackertool — GitHub Project",
    description:
      "Personal GitHub project (formerly Shreya), now open-sourced as trackertool — a sandbox for improving development skills and solving real problems with Python.",
    stack: ["Git", "GitHub", "Python"],
    href: "https://github.com/PhranavManjunaath/trackertool",
  },
];

export const journal = [
  {
    title: "Training a Model to Recognize Suspicious Exam Behavior",
    tag: "Computer Vision",
    readTime: "5 min read",
  },
  {
    title: "Designing a Fitness Tracker People Actually Open",
    tag: "Full-Stack",
    readTime: "4 min read",
  },
  {
    title: "Tracking Internship Applications Without Losing Your Mind",
    tag: "Developer Tools",
    readTime: "3 min read",
  },
];