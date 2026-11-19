export interface Profile {
  name: string;
  title: string;
  currentRole: string;
  company: string;
  companyLocation: string;
  location: string;
  availability: string;
  isAvailableForRemote: boolean;
  headline: string;
  subheadline: string;
  shortBio: string;
  fullBio: string[];
  photoUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  location: string;
  summary: string;
  technologies: string[];
  engineeringContributions: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  contribution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  architectureDetails?: string[];
  badge?: string;
}

export interface OpenSourceContribution {
  organization: string;
  organizationSummary: string;
  role: string;
  areasOfFocus: string[];
  featuredFix: {
    title: string;
    description: string;
    technicalDetails: string;
    impact: string;
  };
  aspirations?: string;
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    tag?: string;
  }[];
}

export interface CommunityItem {
  id: string;
  title: string;
  roleOrContext: string;
  organization: string;
  category: 'Speaking' | 'Community Leadership' | 'Teaching' | 'Volunteering';
  period?: string;
  description: string;
  details?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'leetcode' | 'youtube' | 'phone';
  label: string;
  url: string;
  displayValue: string;
  isAction?: boolean;
}
