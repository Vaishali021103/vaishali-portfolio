import React from 'react';
import { motion } from 'framer-motion';
import { Globe, GitPullRequest, Accessibility, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import { GithubIcon } from '../UI/Icons';
import { openSourceData } from '../../data/openSource';

export const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="py-24 bg-[#0d1016] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Open Source Involvement"
          title="Beyond the code I write at work."
          description="Contributing to global educational platforms, auditing screen-reader UX, and advancing web accessibility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Case Study: Oppia (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-2xl bg-[#111621] border border-[#202737] p-6 sm:p-8 lg:p-10 shadow-xl"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1c2230]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#18202e] border border-[#27354b] flex items-center justify-center text-[#ccff00]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white font-sans">
                      {openSourceData.organization}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {openSourceData.role}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94a3b8] mt-0.5">
                    Global Interactive Educational Foundation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={openSourceData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161c28] border border-[#232c3c] text-xs font-mono text-[#cbd5e1] hover:text-[#ccff00] transition-colors focus-visible:outline-2 focus-visible:outline-[#ccff00]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Org summary */}
            <p className="mt-6 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              {openSourceData.organizationSummary}
            </p>

            {/* Focus areas */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider font-mono text-[#94a3b8] font-semibold block mb-3">
                Areas of Technical Contribution:
              </span>
              <div className="flex flex-wrap gap-2">
                {openSourceData.areasOfFocus.map((area) => (
                  <Badge key={area} variant="default" size="sm">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Contribution Box */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#0b0e14] border border-[#1e2535]">
              <div className="flex items-center gap-2 mb-3">
                <Accessibility className="w-5 h-5 text-[#ccff00]" />
                <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                  {openSourceData.featuredFix.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                {openSourceData.featuredFix.description}
              </p>

              <div className="p-3.5 rounded-lg bg-[#111621] border border-[#1b2230] text-xs font-mono text-[#cbd5e1] space-y-1.5">
                <div className="text-[#ccff00] font-semibold">
                  Technical Implementation & Audit:
                </div>
                <p className="text-[#94a3b8] leading-relaxed">
                  {openSourceData.featuredFix.technicalDetails}
                </p>
              </div>

              <div className="mt-3 flex items-start gap-2 text-xs text-[#cbd5e1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Impact: </strong>
                  {openSourceData.featuredFix.impact}
                </span>
              </div>
            </div>

            {/* Aspirations Notice */}
            {openSourceData.aspirations && (
              <div className="mt-6 p-4 rounded-xl bg-[#141a26]/60 border border-[#212b3e] flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#ccff00]" />
                <p className="text-xs sm:text-sm text-[#cbd5e1]">
                  <strong className="text-white">Aspiration: </strong>
                  {openSourceData.aspirations}
                </p>
              </div>
            )}
          </motion.div>

          {/* Right Column: Open Source Principles & GitHub link (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Why Open Source Card */}
            <div className="p-6 rounded-2xl bg-[#111621] border border-[#202737] space-y-4">
              <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <GitPullRequest className="w-4 h-4 text-[#ccff00]" />
                Why Open Source Matters to Me
              </h4>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Contributing to public codebases allows me to work with global engineering standards, understand large distributed software architectures, and advocate for accessibility that directly benefits real users around the world.
              </p>
              <div className="pt-3 border-t border-[#1c2331] text-xs font-mono text-[#cbd5e1] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                  <span>Public Pull Request Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                  <span>Community Discussion & Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                  <span>Cross-Browser Screen-Reader Testing</span>
                </div>
              </div>
            </div>

            {/* Direct GitHub Profile Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141924] to-[#0f131a] border border-[#232c3e] text-center space-y-4">
              <GithubIcon className="w-8 h-8 text-[#ccff00] mx-auto" />
              <div>
                <h4 className="text-base font-bold text-white font-sans">
                  GitHub Profile & Activity
                </h4>
                <p className="text-xs text-[#94a3b8] mt-1 font-mono">
                  @Vaishali021103
                </p>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Inspect public repositories, commits, and collaborative contributions directly on GitHub.
              </p>
              <Button
                href={openSourceData.githubUrl}
                external
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full justify-center text-xs"
              >
                Visit GitHub Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
