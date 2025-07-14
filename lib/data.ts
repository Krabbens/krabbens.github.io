// lib/data.ts - All CV data in TypeScript structures

export interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  initials: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  gradient: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'areas';
  icon?: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Kosma Gąsiorowski',
  tagline: 'CS, IoT @ PUT',
  location: 'Poznań, Wielkopolskie, Poland',
  email: 'osukuose@gmail.com',
  linkedin: 'kosma-gąsiorowski-3a139b239',
  initials: 'KG',
}

// Navigation Items
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Work Experience
export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Junior Salesforce Developer',
    company: 'Cloobees',
    location: 'Gdańsk, Poland',
    period: 'Oct 2022 – Jun 2024',
    duration: '1 year 9 months',
    description: 'Developed and maintained Salesforce applications, implemented custom business logic using Apex and Lightning Web Components. Collaborated with cross-functional teams to deliver scalable CRM solutions.',
  },
  {
    id: 2,
    title: 'Intern SF Developer',
    company: 'Cloobees',
    location: 'Gdańsk, Poland',
    period: 'Jul 2022 – Oct 2022',
    duration: '4 months',
    description: 'Completed internship focused on Salesforce development. Gained hands-on experience with Apex, SOQL, and Lightning components while working on real-world client projects.',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Challenge Rocket.com',
    location: 'Remote',
    period: '2022',
    duration: 'Less than a year',
    description: 'Contributed to web development projects, building responsive interfaces and implementing backend functionality. Worked in an agile environment delivering innovative digital solutions.',
  },
]

// Projects
export const projects: Project[] = [
  {
    id: 1,
    name: 'conv-neural-network',
    description: 'A machine learning library built from scratch with GPU acceleration using CUDA. Features multithreading support, Adam and SGD optimizers, and efficient convolutional neural network implementations.',
    techStack: ['C++20', 'CUDA', 'Python', 'ML'],
    githubUrl: 'https://github.com/cofftea-s-team/conv-neural-network',
    gradient: 'from-blue-500 via-cyan-500 to-purple-500',
  },
  {
    id: 2,
    name: 'qqt',
    description: 'A custom Python framework designed to simplify thread management, callback mechanisms, and QML integration with Python backends. Streamlines asynchronous operations in Qt applications.',
    techStack: ['Python', 'PyQt5', 'QML', 'Threading'],
    githubUrl: 'https://github.com/Krabbens/qqt',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
  },
  {
    id: 3,
    name: 'Kerfuffin',
    description: 'Data analysis application correlating weather patterns with air quality in the Tricity area. Built with Pandas for data processing and Matplotlib for visualization. Winner of BEST Coding Marathon.',
    techStack: ['Python', 'Qt', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/kerfuffin/kerfuffin',
    gradient: 'from-green-500 via-teal-500 to-cyan-500',
  },
]

// Education
export const education: Education[] = [
  {
    id: 1,
    degree: 'M.Sc. Eng., Computer Science',
    institution: 'Poznan University of Technology',
    period: 'Mar 2025 – Jun 2026',
    location: 'Poznań, Poland',
  },
  {
    id: 2,
    degree: 'B.Sc. Eng., Computer Science',
    institution: 'Gdansk University of Technology',
    period: '2021 – 2025',
    location: 'Gdańsk, Poland',
  },
]

// Skills
export const skills: Skill[] = [
  // Languages
  { name: 'C++20', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'CUDA', category: 'languages' },
  // Frameworks
  { name: 'PyQt5', category: 'frameworks' },
  { name: 'Qt', category: 'frameworks' },
  { name: 'Pandas', category: 'frameworks' },
  { name: 'Matplotlib', category: 'frameworks' },
  { name: 'Salesforce', category: 'frameworks' },
  // Areas
  { name: 'Data Analysis', category: 'areas' },
  { name: 'LLMOps', category: 'areas' },
  { name: 'Machine Learning', category: 'areas' },
  { name: 'IoT', category: 'areas' },
  { name: 'AI/ML', category: 'areas' },
]

// Achievements
export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'BEST Coding Marathon',
    organization: 'Winner',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'HackYeah',
    organization: 'Finalist',
    icon: '🏆',
  },
  {
    id: 3,
    title: 'Consult it 2022',
    organization: 'Laureate',
    icon: '🏆',
  },
]

// Stats for About section
export const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '+', label: 'Projects Shipped' },
  { value: 3, suffix: '', label: 'Hackathon Awards' },
]

// Tech stack for marquee
export const techStackMarquee = [
  'C++20', 'CUDA', 'Python', 'PyQt5', 'SQL', 'Pandas', 
  'Matplotlib', 'Salesforce', 'LLMOps', 'Machine Learning', 
  'IoT', 'Qt', 'QML', 'Apex', 'LWC',
]

// About section bio
export const bio = `I'm a Computer Science engineer passionate about building things from scratch — from CUDA-accelerated neural networks to custom Qt frameworks. Currently pursuing my M.Sc. at Poznan University of Technology, focused on IoT and AI/ML. I thrive at hackathons (winner of BEST Coding Marathon, HackYeah Finalist) and love pushing the boundaries of what code can do.`

// Languages
export const languages = [
  { name: 'Polish', level: 'Native' },
  { name: 'English', level: 'Professional Working' },
  { name: 'Chinese', level: 'Elementary' },
]
