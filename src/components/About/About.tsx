import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { profileData } from '../../data/profile';

const pillars = [
  {
    icon: Code2,
    title: 'Frontend Engineering & React Ecosystem',
    description:
      'Translating intricate requirements into modular, maintainable React components with strict TypeScript types, predictable state patterns, and responsive layouts.',
  },
  {
    icon: Eye,
    title: 'Accessibility & Universal UX',
    description:
      'Treating accessibility as a first-class engineering discipline—ensuring proper ARIA semantics, seamless keyboard navigation, tab-order hygiene, and screen-reader fidelity.',
  },
  {
    icon: ShieldCheck,
    title: 'Testing & System Reliability',
    description:
      'Safeguarding user experiences against regressions by writing automated end-to-end tests with Playwright and rigorously verifying interactive edge cases.',
  },
  {
    icon: HeartHandshake,
    title: 'Open Source & Community Growth',
    description:
      'Actively giving back through open-source contributions to Oppia, technical community leadership with Codexa, and delivering technical talks for developer meetups.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0c10] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title="About Vaishali"
          description="A Software Engineer focused on crafting accessible, performant, and resilient user interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            {profileData.fullBio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[#cbd5e1]"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Core Values checklist */}
            <div className="pt-6 border-t border-[#1a212d] grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Clean TypeScript Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>WCAG 2.1 Accessibility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Playwright E2E Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Open-Source Participation</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-[#111620] border border-[#212938] hover:border-[#333f56] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#161c28] border border-[#263143] text-[#ccff00] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white font-sans group-hover:text-[#ccff00] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
