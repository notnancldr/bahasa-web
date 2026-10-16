import { GraduationCap, Lock, Radio, Sparkles } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { SocietyImpactCard } from './components/society-impact-card';

export const SocietySection: React.FC = () => {
  const { t } = useTranslation();

  const impacts = [
    {
      shapeType: 'scallop-12' as const,
      shapeFill: '#FFD3B0',
      icon: <Sparkles className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Revitalisasi',
      title: t.society.e1Title,
      description: t.society.e1Desc,
    },
    {
      shapeType: 'shield' as const,
      shapeFill: '#A9D6E5',
      icon: <GraduationCap className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Keadilan Akses',
      title: t.society.e2Title,
      description: t.society.e2Desc,
    },
    {
      shapeType: 'clover-8' as const,
      shapeFill: '#C9B6E4',
      icon: <Radio className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Desentralisasi',
      title: t.society.e3Title,
      description: t.society.e3Desc,
    },
    {
      shapeType: 'pebble' as const,
      shapeFill: '#FFD59E',
      icon: <Lock className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Kedaulatan Digital',
      title: t.society.e4Title,
      description: t.society.e4Desc,
    },
  ];

  return (
    <section id="society" className="relative py-24 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 h-80 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#FFD59E]">
        <MaterialShape type="pebble" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.society.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.society.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
          {impacts.map((item, idx) => (
            <SocietyImpactCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
