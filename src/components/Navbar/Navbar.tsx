import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { Container } from '../UI/Container';
import { Button } from '../UI/Button';
import { profileData } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Open Source', href: '#open-source', id: 'open-source' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Community', href: '#community', id: 'community' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0d11]/90 backdrop-blur-md border-b border-[#1c222e] py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="wide">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#ccff00] rounded-lg p-1"
            aria-label="Vaishali Sirimalla - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#141822] border border-[#273041] flex items-center justify-center font-mono font-bold text-sm text-[#ccff00] group-hover:border-[#ccff00]/50 transition-colors">
              VS
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-sm sm:text-base font-sans group-hover:text-[#ccff00] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-[#94a3b8]">
                {profileData.title} · Zeus Learning
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#12161f]/70 border border-[#202735] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs xl:text-sm font-medium px-3 py-1 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'text-[#0b0d11] bg-[#ccff00] font-semibold'
                      : 'text-[#94a3b8] hover:text-white hover:bg-[#1a212d]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA: Resume */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={profileData.resumeUrl}
              variant="outline"
              size="sm"
              download="Vaishali_Sirimalla_Resume.pdf"
              icon={<FileDown className="w-3.5 h-3.5" />}
              iconPosition="left"
              className="font-mono text-xs"
            >
              Resume PDF
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="text-xs"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={profileData.resumeUrl}
              download="Vaishali_Sirimalla_Resume.pdf"
              className="p-2 text-[#94a3b8] hover:text-[#ccff00] rounded-lg border border-[#202735] bg-[#12161f]"
              aria-label="Download Resume PDF"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#cbd5e1] hover:text-white rounded-lg border border-[#202735] bg-[#12161f] focus-visible:outline-2 focus-visible:outline-[#ccff00]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-3 p-4 bg-[#10141d] border border-[#222a38] rounded-2xl shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-medium rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#181f2c]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#1c222e] flex flex-col gap-2">
              <Button
                href={profileData.resumeUrl}
                download="Vaishali_Sirimalla_Resume.pdf"
                variant="outline"
                size="md"
                icon={<FileDown className="w-4 h-4" />}
                className="w-full justify-center text-xs"
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                onClick={closeMobileMenu}
                variant="primary"
                size="md"
                className="w-full justify-center text-xs"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
