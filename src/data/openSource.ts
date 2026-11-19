import { OpenSourceContribution } from '../types';

export const openSourceData: OpenSourceContribution = {
  organization: 'Oppia',
  organizationSummary:
    'An open-source global educational platform dedicated to providing free, high-quality interactive lessons to underserved learners worldwide.',
  role: 'Open Source Contributor',
  areasOfFocus: [
    'Web Accessibility (a11y)',
    'Screen-Reader UX & Parity',
    'Keyboard Traversal & Focus Management',
    'Angular & Frontend Component Refinement',
  ],
  featuredFix: {
    title: 'Eliminated Redundant Accessible Name Announcements on Account Controls',
    description:
      'Investigated and resolved a screen-reader usability bug on the "Delete My Account" action button. Assistive technologies previously announced repetitive and confusing labels due to an extraneous title attribute clashing with the button’s computed accessible name.',
    technicalDetails:
      'Audited the DOM tree using accessibility inspection tools and verified screen-reader speech outputs across NVDA and VoiceOver. Removed the redundant title attribute from the button component, ensuring clean, unambiguous accessible name computation conforming to WAI-ARIA and WCAG 2.1 Success Criteria.',
    impact:
      'Delivered a clear, distraction-free auditory experience for visually impaired users navigating sensitive account deletion workflows.',
  },
  aspirations:
    'Active participant in the Oppia development community with an aspiration towards Google Summer of Code (GSoC) 2027.',
  githubUrl: 'https://github.com/Vaishali021103',
};
