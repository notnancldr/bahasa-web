import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { HeroActions } from './components/hero-actions';
import { HeroAppShowcase } from './components/hero-app-showcase';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36 border-b border-[rgba(125,138,143,0.18)]">
      {/* Ambient Material Shape Silhouettes in Background */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[700px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#5B93AE]">
        <MaterialShape type="scallop-12" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Expressive Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Span 6): Typographic Masthead & Tactile Action Docks */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.12]">
              {t.hero.headline}{' '}
              <span className="relative inline-block text-[#5B93AE] dark:text-[#A9D6E5]">
                {t.hero.headlineHighlight}
                {/* Subtle expressive decorative underline stamp */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#FFD3B0] dark:text-[#5B93AE]/40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Editorial Subheadline */}
            <p className="text-base sm:text-lg text-[#7D8A8F] dark:text-[#9AA8AD] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <HeroActions />

            {/* Editorial Offline-First Metrics Dock */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-[#7D8A8F] dark:text-[#9AA8AD]">
              <span>Zero Cloud Telemetry</span>
              <span>·</span>
              <span>100% On-Device SQLite</span>
              <span>·</span>
              <span>Peer-to-Peer Wi-Fi Sync</span>
            </div>
          </div>

          {/* Right Column (Span 6): Basa App Showcase Specimen */}
          {/* <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroAppShowcase />
          </div> */}
        </div>
      </div>
    </section>
  );
};
