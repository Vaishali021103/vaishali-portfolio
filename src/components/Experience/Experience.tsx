import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Layers, ShieldCheck } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Badge } from '../UI/Badge';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0d1016] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          description="Real-world engineering impact, frontend feature architecture, and automated testing in production environments."
        />

        <div className="space-y-12">
          {experienceData.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-[#121620] border border-[#21293a] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden group hover:border-[#2f3b52] transition-colors"
            >
              {/* Subtle accent border highlight on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ccff00]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Role Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1c2331]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-sans tracking-tight">
                      {job.role}
                    </span>
                    <Badge variant="accent" size="sm">
                      Current Position
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-[#94a3b8]">
                    <span className="text-[#e2e8f0] font-semibold text-base sm:text-lg font-sans flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#ccff00]" />
                      {job.company}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#94a3b8]">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#94a3b8]">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Summary paragraph */}
              <p className="mt-6 text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
                {job.summary}
              </p>

              {/* Engineering Contributions Deep-dive */}
              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#94a3b8] font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ccff00]" />
                  Core Engineering Contributions & Technical Ownership
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.engineeringContributions.map((contribution, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#0e1219] border border-[#1b2230] hover:border-[#2a354b] transition-colors flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0 mt-1" />
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        {contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Spotlight: Accessibility & Automation */}
              <div className="mt-8 pt-6 border-t border-[#1c2331] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#141924]/60 border border-[#202837] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#ccff00]" />
                  <div>
                    <span className="text-xs font-mono uppercase text-[#cbd5e1] block font-semibold">
                      Accessibility Engineering
                    </span>
                    <span className="text-xs text-[#94a3b8]">
                      WCAG 2.1 compliance, focus rings, keyboard traps prevention, and screen-reader testing
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#141924]/60 border border-[#202837] flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#ccff00]" />
                  <div>
                    <span className="text-xs font-mono uppercase text-[#cbd5e1] block font-semibold">
                      Automated E2E Testing
                    </span>
                    <span className="text-xs text-[#94a3b8]">
                      Playwright test suites verifying complex user flows and drag-and-drop question mechanics
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
