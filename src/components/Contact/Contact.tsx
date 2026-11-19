import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, FileDown, ArrowUpRight } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Button } from '../UI/Button';
import { profileData } from '../../data/profile';
import { socialLinks } from '../../data/socials';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d1016] border-t border-[#171c26] relative">
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Have something interesting to build?"
            description="I'm always interested in connecting with people building meaningful products, solving interesting engineering problems and exploring opportunities to collaborate."
            align="center"
          />

          {/* Main Direct Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131722] via-[#10141d] to-[#0c0f16] border border-[#252f42] text-center shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#ccff00]/10 rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              {/* Availability tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171e2c] border border-[#26334a]">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                <span className="text-xs font-mono text-[#cbd5e1]">
                  Available for International Remote Roles
                </span>
              </div>

              {/* Email Address Display */}
              <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tracking-tight break-all">
                {profileData.email}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  href={`mailto:${profileData.email}`}
                  variant="primary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send an Email
                </Button>
                <Button
                  type="button"
                  onClick={handleCopyEmail}
                  variant="secondary"
                  size="lg"
                  icon={copied ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4" />}
                >
                  {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </Button>
                <Button
                  href={profileData.resumeUrl}
                  download="Vaishali_Sirimalla_Resume.pdf"
                  variant="outline"
                  size="lg"
                  icon={<FileDown className="w-4 h-4 text-[#ccff00]" />}
                >
                  Download Resume PDF
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social Profiles Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target={item.url.startsWith('mailto:') || item.url.startsWith('tel:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111621] border border-[#1e2535] hover:border-[#2f3b50] hover:bg-[#151b27] transition-all flex flex-col items-center justify-center text-center group focus-visible:outline-2 focus-visible:outline-[#ccff00]"
                aria-label={`Open Vaishali's ${item.label}`}
              >
                <span className="text-xs font-mono text-[#94a3b8] group-hover:text-[#ccff00] transition-colors">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#64748b] mt-1 truncate max-w-[120px]">
                  {item.displayValue}
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#64748b] mt-2 group-hover:text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
