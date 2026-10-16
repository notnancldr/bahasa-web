import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../localization/use-translation';
import { GithubIcon } from '../icons/github-icon';
import { ShapeFrame } from '../shape/shape-frame';
import { LanguageDropdown } from './language-dropdown';
import { ThemeToggle } from './theme-toggle';

interface NavItem {
  id: string;
  href: string;
  label: string;
}

export const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks: NavItem[] = [
    { id: 'about-basa', href: '#about-basa', label: t.nav.basa },
    { id: 'about-euy', href: '#about-euy', label: t.nav.aboutEuy },
    { id: 'philosophy', href: '#philosophy', label: t.nav.philosophy },
    { id: 'society', href: '#society', label: t.nav.society },
    { id: 'features', href: '#features', label: t.nav.features },
    { id: 'downloads', href: '#downloads', label: t.nav.downloads },
    { id: 'inspector', href: '#inspector', label: t.nav.inspector },
  ];

  useEffect(() => {
    const sectionIds = [
      'about-basa',
      'sampler',
      'about-euy',
      'philosophy',
      'society',
      'features',
      'downloads',
      'inspector',
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(id === 'sampler' ? 'about-basa' : id);
            return;
          }
        }
      }
      setActiveSection('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8] dark:bg-[#0F1417] border-b border-[rgba(125,138,143,0.30)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <ShapeFrame
            type="scallop-12"
            fill="#A9D6E5"
            className="w-10 h-10"
          >
            <span className="font-black text-[#2F3A3F] text-base">B</span>
          </ShapeFrame>
          <div className="flex flex-col">
            <span className="font-black text-base tracking-tight text-[#2F3A3F] dark:text-[#E8EFF1]">
              Basa <span className="text-[#5B93AE] dark:text-[#A9D6E5] text-xs font-bold">.euy</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`py-1.5 transition-colors relative ${isActive
                    ? 'text-blue-600 dark:text-blue-400 font-extrabold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full'
                    : 'text-[#7D8A8F] dark:text-[#9EABB0] hover:text-[#5B93AE] dark:hover:text-[#A9D6E5]'
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          <LanguageDropdown />
          <ThemeToggle />
          <a
            href="https://github.com/notnancldr/bahasa-flutter"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="p-2 rounded-lg border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] text-[#2F3A3F] dark:text-[#E8EFF1] hover:border-[#5B93AE] transition-colors shadow-xs inline-flex items-center justify-center"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[rgba(125,138,143,0.30)] text-[#2F3A3F] dark:text-[#E8EFF1]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-b border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#0F1417]">
          <nav className="flex flex-col space-y-1 pt-2 text-sm font-bold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-extrabold'
                      : 'text-[#2F3A3F] dark:text-[#E8EFF1] hover:bg-[rgba(125,138,143,0.12)]'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Drawer Controls Divider & Items */}
          <div className="mt-4 pt-4 border-t border-[rgba(125,138,143,0.25)] flex items-center justify-between gap-3">
            <LanguageDropdown />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="https://github.com/notnancldr/bahasa-flutter"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-lg border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] text-[#2F3A3F] dark:text-[#E8EFF1] hover:border-[#5B93AE] transition-colors shadow-xs inline-flex items-center justify-center"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
