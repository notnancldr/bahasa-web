import { Bot, Database, Flame, Wifi } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { BasaPillarCard } from './components/basa-pillar-card';

export const AboutBasaSection: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      shapeType: 'shield' as const,
      shapeFill: '#A9D6E5',
      number: '01',
      icon: <Database className="w-5 h-5 text-[#2F3A3F]" />,
      title: t.aboutBasa.pillar1Title,
      description: t.aboutBasa.pillar1Desc,
    },
    {
      shapeType: 'clover-8' as const,
      shapeFill: '#FFD3B0',
      number: '02',
      icon: <Wifi className="w-5 h-5 text-[#2F3A3F]" />,
      title: t.aboutBasa.pillar2Title,
      description: t.aboutBasa.pillar2Desc,
    },
    {
      shapeType: 'scallop-12' as const,
      shapeFill: '#C9B6E4',
      number: '03',
      icon: <Bot className="w-5 h-5 text-[#2F3A3F]" />,
      title: t.aboutBasa.pillar3Title,
      description: t.aboutBasa.pillar3Desc,
    },
    {
      shapeType: 'pebble' as const,
      shapeFill: '#FFD59E',
      number: '04',
      icon: <Flame className="w-5 h-5 text-[#2F3A3F]" />,
      title: t.aboutBasa.pillar4Title,
      description: t.aboutBasa.pillar4Desc,
    },
  ];

  return (
    <section id="about-basa" className="relative py-24 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#FFD3B0]">
        <MaterialShape type="shield" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
              {t.aboutBasa.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
              {t.aboutBasa.description}
            </p>
            <div className="flex items-center gap-6 pt-2 text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5]">
              <div>
                <span className="font-black text-lg block text-[#2F3A3F] dark:text-[#E8EFF1]">100%</span>
                <span>Kedaulatan Lokal</span>
              </div>
              <div className="w-px h-8 bg-[rgba(125,138,143,0.25)]" />
              <div>
                <span className="font-black text-lg block text-[#2F3A3F] dark:text-[#E8EFF1]">0 KB</span>
                <span>Data Dikirim ke Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars using authentic Material Expressive Shapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <BasaPillarCard key={pillar.number} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
