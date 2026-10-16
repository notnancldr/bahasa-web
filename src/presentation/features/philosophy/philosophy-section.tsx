import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { PhilosophyCard } from './components/philosophy-card';

export const PhilosophySection: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      number: '01',
      shapeType: 'scallop-12' as const,
      shapeFill: '#A9D6E5',
      title: t.philosophy.p1Title,
      description: t.philosophy.p1Desc,
      accentColor: 'text-[#5B93AE] dark:text-[#A9D6E5]',
    },
    {
      number: '02',
      shapeType: 'shield' as const,
      shapeFill: '#FFD3B0',
      title: t.philosophy.p2Title,
      description: t.philosophy.p2Desc,
      accentColor: 'text-[#FFD3B0] dark:text-[#FFD3B0]',
    },
    {
      number: '03',
      shapeType: 'clover-8' as const,
      shapeFill: '#C9B6E4',
      title: t.philosophy.p3Title,
      description: t.philosophy.p3Desc,
      accentColor: 'text-[#C9B6E4] dark:text-[#C9B6E4]',
    },
    {
      number: '04',
      shapeType: 'pebble' as const,
      shapeFill: '#A8D5A2',
      title: t.philosophy.p4Title,
      description: t.philosophy.p4Desc,
      accentColor: 'text-[#A8D5A2] dark:text-[#A8D5A2]',
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#C9B6E4]">
        <MaterialShape type="scallop-12" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.philosophy.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* Continuous Asymmetrical Horizon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
          {pillars.map((item) => (
            <PhilosophyCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
