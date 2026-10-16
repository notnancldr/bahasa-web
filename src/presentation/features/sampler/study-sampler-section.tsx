import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { HeroStudySampler } from '../hero/components/hero-study-sampler';

export const StudySamplerSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="sampler" className="relative py-20 md:py-6 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#5B93AE]">
        <MaterialShape type="clover-8" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.sampler.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.sampler.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          <HeroStudySampler />
        </div>
      </div>
    </section>
  );
};

