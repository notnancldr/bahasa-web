import { BookOpen, CheckCircle2, Code2, Layers, Sparkles, Tag } from 'lucide-react';
import React from 'react';
import { MaterialShapeType } from '../../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';

interface FieldAnatomy {
  name: string;
  type: string;
  desc: string;
  icon: React.ReactNode;
  shapeType: MaterialShapeType;
  shapeFill: string;
}

export const EuyVisualAnatomy: React.FC = () => {
  const fields: FieldAnatomy[] = [
    {
      name: 'id',
      type: 'string (UUID)',
      desc: 'Pengidentifikasi unik untuk deck pembelajaran, selaras dengan berkas penyimpanan di disk lokal.',
      icon: <Tag className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'shield',
      shapeFill: '#A9D6E5',
    },
    {
      name: 'name & language',
      type: 'string',
      desc: 'Judul deck yang mudah dibaca dan kode dialek/negara (contoh: "id-sun", "id-jav", "ja", "es").',
      icon: <BookOpen className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'clover-8',
      shapeFill: '#FFD3B0',
    },
    {
      name: 'difficulty',
      type: 'enum: beginner | intermediate | expert',
      desc: 'Kalibrasi kemahiran yang menentukan kompleksitas kosakata dan pembobotan skor SRS.',
      icon: <CheckCircle2 className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'pebble',
      shapeFill: '#C9B6E4',
    },
    {
      name: 'rolePlay & explanation',
      type: 'string (AI System Prompt)',
      desc: 'Instruksi sistem lokal yang menggerakkan dialog kontekstual dan penjelasan kepribadian kartu.',
      icon: <Sparkles className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'scallop-12',
      shapeFill: '#FFD59E',
    },
    {
      name: 'listCards[]',
      type: 'Array of Card Objects',
      desc: 'Larik kosakata lengkap dengan fonetik, terjemahan, pelafalan audio, repetisi, dan status retensi.',
      icon: <Layers className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'shield',
      shapeFill: '#A8D5A2',
    },
    {
      name: 'card: phoneticLang & context',
      type: 'string (Optional)',
      desc: 'Panduan membaca (aksara Sunda, Jawa, IPA) dan catatan etika pergaulan sosial setempat.',
      icon: <Code2 className="w-4 h-4 text-[#2F3A3F]" />,
      shapeType: 'clover-8',
      shapeFill: '#A9D6E5',
    },
  ];

  return (
    <div className="border-y border-[rgba(125,138,143,0.22)] divide-y divide-[rgba(125,138,143,0.18)]">
      {fields.map((f, idx) => (
        <div
          key={idx}
          className="py-4.5 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 group"
        >
          <div className="flex items-center gap-4 md:w-1/3 shrink-0">
            <ShapeFrame
              type={f.shapeType}
              fill={f.shapeFill}
              className="w-10 h-10 shrink-0"
            >
              {f.icon}
            </ShapeFrame>
            <div>
              <div className="text-sm font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
                {f.name}
              </div>
              <div className="text-[11px] font-bold text-[#5B93AE] dark:text-[#A9D6E5]">
                {f.type}
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed font-medium md:w-2/3">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
};
