import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Building high-performance, accessible, and responsive user interfaces.',
    skills: [
      { name: 'React.js', isPrimary: true, tag: 'Core' },
      { name: 'TypeScript', isPrimary: true, tag: 'Core' },
      { name: 'JavaScript (ES6+)', isPrimary: true, tag: 'Core' },
      { name: 'HTML5', isPrimary: false },
      { name: 'CSS3', isPrimary: false },
      { name: 'Tailwind CSS', isPrimary: false },
      { name: 'Bootstrap', isPrimary: false },
    ],
  },
  {
    category: 'Backend & Systems',
    description: 'Architecting scalable server-side endpoints, queues, and APIs.',
    skills: [
      { name: 'Node.js', isPrimary: false },
      { name: 'Express.js', isPrimary: false },
      { name: 'Django', isPrimary: false },
      { name: 'RESTful APIs', isPrimary: false },
      { name: 'Bull Queue & Redis', isPrimary: false },
    ],
  },
  {
    category: 'Programming Languages',
    description: 'Strong foundations in object-oriented and functional paradigms.',
    skills: [
      { name: 'Java', isPrimary: true, tag: 'Strong Foundation' },
      { name: 'TypeScript', isPrimary: true, tag: 'Primary' },
      { name: 'JavaScript', isPrimary: true, tag: 'Primary' },
      { name: 'Python (Basics)', isPrimary: false },
      { name: 'C', isPrimary: false },
      { name: 'SQL', isPrimary: false },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Designing persistent document and relational schemas.',
    skills: [
      { name: 'MongoDB & Atlas', isPrimary: false },
      { name: 'MySQL', isPrimary: false },
      { name: 'Firebase', isPrimary: false },
      { name: 'Redis', isPrimary: false },
    ],
  },
  {
    category: 'Quality, Testing & Accessibility',
    description: 'Ensuring resilience, test coverage, and universal usability.',
    skills: [
      { name: 'Playwright (E2E Testing)', isPrimary: true, tag: 'In Production' },
      { name: 'Web Accessibility (WCAG 2.1)', isPrimary: true, tag: 'Core Focus' },
      { name: 'Keyboard Navigation & Focus Management', isPrimary: false },
      { name: 'Screen-Reader Testing (NVDA / VoiceOver)', isPrimary: false },
      { name: 'Cypress', isPrimary: false },
    ],
  },
  {
    category: 'Engineering Practices & Tooling',
    description: 'Professional development workflows, versioning, and environment setup.',
    skills: [
      { name: 'Git & GitHub', isPrimary: false },
      { name: 'Data Structures & Algorithms', isPrimary: true, tag: 'Foundation' },
      { name: 'UI Engineering & Component Systems', isPrimary: true, tag: 'Specialty' },
      { name: 'Responsive Web Design', isPrimary: false },
      { name: 'VS Code', isPrimary: false },
      { name: 'MySQL Workbench', isPrimary: false },
      { name: 'Docker (Foundations)', isPrimary: false },
    ],
  },
];
