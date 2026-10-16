import { BookOpen, Database, Sparkles } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../core/localization/use-translation';
import { EuyCulturalNote } from './components/euy-cultural-note';
import { EuySchemaViewer } from './components/euy-schema-viewer';
import { EuyVisualAnatomy } from './components/euy-visual-anatomy';

export const AboutEuySection: React.FC = () => {
  const { t } = useTranslation();

  const layers = [
    {
      shapeType: 'clover-8' as const,
      shapeFill: '#FFD3B0',
      icon: <BookOpen className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Lapisan 01',
      title: 'Manifest & Kode Dialek',
      desc: 'Menyimpan metadata bahasa daerah (seperti id-sun, id-jav), tingkat kemahiran, dan prompt kepribadian AI.',
    },
    {
      shapeType: 'shield' as const,
      shapeFill: '#A9D6E5',
      icon: <Database className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Lapisan 02',
      title: 'Leksikon SQLite Terisolasi',
      desc: 'Setiap deck dapat diekstraksi menjadi tabel relasional SQLite mandiri yang dapat dibaca tanpa internet.',
    },
    {
      shapeType: 'scallop-12' as const,
      shapeFill: '#C9B6E4',
      icon: <Sparkles className="w-5 h-5 text-[#2F3A3F]" />,
      tag: 'Lapisan 03',
      title: 'Fonetik & Nuansa Budaya',
      desc: 'Menyematkan transkripsi fonetik (IPA/aksara tradisional) serta konteks sosial etika pergaulan tutur.',
    },
  ];

  return (
    <section id="about-euy" className="relative py-12 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-10 -left-20 w-80 h-80 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#A9D6E5]">
        <MaterialShape type="clover-8" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.aboutEuy.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.aboutEuy.description}
          </p>
        </div>

        {/* 3-Layer Format Dissection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {layers.map((layer) => (
            <div
              key={layer.tag}
              className="p-6 rounded-2xl bg-[rgba(125,138,143,0.06)] border border-[rgba(125,138,143,0.20)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ShapeFrame
                    type={layer.shapeType}
                    fill={layer.shapeFill}
                    className="w-12 h-12"
                  >
                    {layer.icon}
                  </ShapeFrame>
                  <span className="text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5]">
                    {layer.tag}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-2">
                  {layer.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed font-medium">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Tribute Callout */}
        <EuyCulturalNote />

        {/* Visual Anatomy of Deck */}
        <div className="my-16">
          <div className="mb-6">
            <h3 className="text-xl font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
              {t.aboutEuy.tabVisual}
            </h3>
          </div>
          <EuyVisualAnatomy />
        </div>

        {/* Interactive Schema & Sample Viewer */}
        <div className="pt-4">
          <div className="mb-6">
            <h3 className="text-xl font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
              {t.aboutEuy.tabSchema}
            </h3>
          </div>
          <EuySchemaViewer />
        </div>
      </div>
    </section>
  );
};
