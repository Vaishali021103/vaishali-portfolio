import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container } from '../UI/Container';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#090b0f] border-t border-[#161a24] text-xs font-mono text-[#64748b]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Colophon */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-7 h-7 rounded bg-[#131720] border border-[#222a3a] flex items-center justify-center font-bold text-[#ccff00]">
              VS
            </div>
            <div>
              <span className="text-[#cbd5e1] font-semibold font-sans">
                {profileData.name}
              </span>
              <span className="mx-2">·</span>
              <span>{profileData.title}</span>
            </div>
          </div>

          {/* Architecture note */}
          <div className="text-center text-[#94a3b8]">
            Crafted with React, TypeScript, Tailwind CSS & Framer Motion
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11151e] border border-[#1e2534] hover:text-[#ccff00] hover:border-[#2d384e] transition-colors focus-visible:outline-2 focus-visible:outline-[#ccff00]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#121620] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© {new Date().getFullYear()} Vaishali Sirimalla. All rights reserved.</span>
          <span className="text-[#475569]">
            Designed with high contrast & universal accessibility standards.
          </span>
        </div>
      </Container>
    </footer>
  );
};
