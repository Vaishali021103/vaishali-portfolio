import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'zeus-learning',
    company: 'Zeus Learning',
    role: 'Software Engineer',
    period: 'June 2025 – Present',
    isCurrent: true,
    location: 'Mumbai, India',
    summary:
      'Engineering core frontend features, accessible interaction patterns, and automated test suites for educational web applications.',
    technologies: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Playwright',
      'WCAG 2.1',
      'HTML5/CSS3',
      'Git',
    ],
    engineeringContributions: [
      'Architected and implemented interactive drag-and-drop mechanics for diverse interactive question formats, ensuring fluid state synchronisation across component hierarchies.',
      'Audited and resolved complex keyboard accessibility barriers, eliminating keyboard traps, rectifying tab order sequences, and managing programmatic focus restoration during modal and drawer transitions.',
      'Identified and resolved subtle UI rendering regressions and usability hurdles across responsive viewports to enhance the daily classroom learning workflow.',
      'Engineered comprehensive end-to-end test suites using Playwright, simulating real-world learner flows and preventing regression in critical question submission and evaluation paths.',
      'Collaborated closely in cross-functional agile sprints with designers, product leads, and QA engineers to translate pedagogical requirements into maintainable, production-ready React components.',
    ],
  },
];
