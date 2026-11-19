import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Mail, MapPin, Briefcase, Sparkles, Terminal } from 'lucide-react';
import { Container } from '../UI/Container';
import { Button } from '../UI/Button';
import { Badge } from '../UI/Badge';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Background Architectural Noise & Grids */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />
      
      {/* Atmospheric Subtle Accent Glow */}
      <div
        className="absolute top-1/4 right-10 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121620] border border-[#232b3b] mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]" />
              </span>
              <span className="text-xs font-mono text-[#cbd5e1] font-medium tracking-tight">
                {profileData.availability}
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#94a3b8] uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>{profileData.title}</span>
                <span>·</span>
                <span className="text-[#cbd5e1]">{profileData.company}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08]">
                {profileData.name}
              </h1>
            </motion.div>

            {/* Compelling Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f1f5f9] tracking-tight mb-6 max-w-2xl leading-tight"
            >
              "{profileData.headline}"
            </motion.p>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-xl mb-8"
            >
              {profileData.subheadline}
            </motion.p>

            {/* Meta Tags: Location & Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#94a3b8] font-mono mb-10 pb-6 border-b border-[#1b212d] w-full"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#11151e] border border-[#202735]">
                <Briefcase className="w-3.5 h-3.5 text-[#ccff00]" />
                Zeus Learning, Mumbai
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#11151e] border border-[#202735]">
                <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
                {profileData.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#11151e] border border-[#202735] text-[#cbd5e1]">
                <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
                React.js · TypeScript · Accessibility
              </span>
            </motion.div>

            {/* Primary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                View Projects
              </Button>
              <Button
                href={profileData.resumeUrl}
                download="Vaishali_Sirimalla_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={<FileDown className="w-4 h-4 text-[#ccff00]" />}
                className="w-full sm:w-auto justify-center font-mono text-sm"
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto justify-center"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Thoughtful Editorial Persona Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Decorative Tech Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#181d29] via-[#121620] to-[#0d1017] p-2 border border-[#273245] shadow-2xl shadow-black/60">
                {/* Header bar simulating engineering viewport */}
                <div className="flex items-center justify-between px-4 py-2.5 mb-2 border-b border-[#212938] text-xs font-mono text-[#94a3b8]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                  </div>
                  <span className="text-[11px] text-[#64748b]">profile.config.ts</span>
                  <span className="text-[#ccff00] font-semibold text-[11px]">ACTIVE</span>
                </div>

                {/* Main Media/Portrait Frame */}
                <div className="relative overflow-hidden rounded-xl bg-[#0b0e14] border border-[#1e2533] aspect-[4/4.8] flex flex-col justify-end">
                  <img
                    src={profileData.photoUrl}
                    alt="Vaishali Sirimalla - Software Engineer"
                    className="w-full h-full object-cover select-none"
                    loading="eager"
                  />

                  {/* Overlaid Editorial Meta Strip */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/90 to-transparent">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-bold">Vaishali Sirimalla</span>
                      <span className="text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded border border-[#ccff00]/20">
                        CGPA 9.5
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] mt-1 font-mono">
                      B.Tech IT · Somaiya '25 · SDE at Zeus Learning
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Metadata Bar */}
                <div className="mt-3 p-3 rounded-lg bg-[#0e1219] border border-[#1c2433] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="sm">
                      React 19
                    </Badge>
                    <Badge variant="default" size="sm">
                      TypeScript
                    </Badge>
                    <Badge variant="default" size="sm">
                      Playwright
                    </Badge>
                  </div>
                  <span className="text-[11px] font-mono text-[#64748b]">Mumbai, IN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
