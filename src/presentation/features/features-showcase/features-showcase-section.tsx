import { BrainCircuit, Cpu, Repeat, Share2 } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { FeatureCard } from './components/feature-card';

export const FeaturesShowcaseSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      shapeType: 'shield' as const,
      shapeFill: '#A9D6E5',
      icon: <Cpu className="w-5 h-5 text-[#2F3A3F]" />,
      badge: 'Mesin Lokal',
      title: t.features.f1Title,
      description: t.features.f1Desc,
    },
    {
      shapeType: 'clover-8' as const,
      shapeFill: '#FFD3B0',
      icon: <Repeat className="w-5 h-5 text-[#2F3A3F]" />,
      badge: 'Retensi Optimal',
      title: t.features.f2Title,
      description: t.features.f2Desc,
    },
    {
      shapeType: 'scallop-12' as const,
      shapeFill: '#C9B6E4',
      icon: <Share2 className="w-5 h-5 text-[#2F3A3F]" />,
      badge: 'Jaringan Ad-Hoc',
      title: t.features.f3Title,
      description: t.features.f3Desc,
    },
    {
      shapeType: 'pebble' as const,
      shapeFill: '#FFD59E',
      icon: <BrainCircuit className="w-5 h-5 text-[#2F3A3F]" />,
      badge: 'Generasi Cerdas',
      title: t.features.f4Title,
      description: t.features.f4Desc,
    },
  ];

  return (
    <section id="features" className="relative py-24 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#5B93AE]">
        <MaterialShape type="clover-8" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.features.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
