import { Heart } from 'lucide-react';
import React from 'react';
import { GithubIcon } from '../../../core/components/icons/github-icon';
import { ShapeFrame } from '../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../core/localization/use-translation';

export const FooterSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FAFAF8] dark:bg-[#0F1417] border-t border-[rgba(125,138,143,0.30)] py-16 text-[#7D8A8F] dark:text-[#9EABB0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(125,138,143,0.20)]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <ShapeFrame
                type="scallop-12"
                fill="#A9D6E5"
                className="w-9 h-9"
              >
                <span className="font-black text-[#2F3A3F] text-sm">B</span>
              </ShapeFrame>
              <span className="font-black text-base text-[#2F3A3F] dark:text-[#E8EFF1]">
                Basa <span className="text-[#5B93AE] dark:text-[#A9D6E5] text-xs font-bold">.euy</span>
              </span>
            </div>
            <p className="text-xs text-[#7D8A8F] dark:text-[#9EABB0] max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-[11px] text-[#7D8A8F]">
              {t.footer.openSourceDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2F3A3F] dark:text-[#E8EFF1]">
              {t.footer.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <li><a href="#about-basa" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.aboutBasa}</a></li>
              <li><a href="#about-euy" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.aboutEuy}</a></li>
              <li><a href="#philosophy" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.philosophy}</a></li>
              <li><a href="#society" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.society}</a></li>
              <li><a href="#features" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.features}</a></li>
              <li><a href="#downloads" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.downloads}</a></li>
              <li><a href="#inspector" className="hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors">{t.nav.inspector}</a></li>
            </ul>
          </div>

          {/* External links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2F3A3F] dark:text-[#E8EFF1]">
              {t.footer.resources}
            </h4>
            <div className="space-y-2 text-xs font-semibold">
              <a
                href="https://github.com/notnancldr/bahasa-flutter"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#5B93AE] dark:hover:text-[#A9D6E5] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <div>
                <span className="text-[11px] text-[#7D8A8F] block mt-1">
                  License: MIT / Open Commons
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7D8A8F] gap-4">
          <p>© 2026 Basa Project. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>{t.footer.builtWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-[#F4A6A6] fill-[#F4A6A6]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
