import { HeartHandshake } from 'lucide-react';
import React from 'react';
import { useTranslation } from '../../../../core/localization/use-translation';

export const EuyCulturalNote: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="border-l-4 border-[#FFD3B0] pl-6 sm:pl-8 py-3 my-12">
      <div className="flex items-center gap-3 mb-2">
        <HeartHandshake className="w-5 h-5 text-[#5B93AE] dark:text-[#A9D6E5]" />
        <h3 className="text-lg font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
          {t.aboutEuy.culturalNoteTitle}
        </h3>
      </div>
      <p className="text-sm sm:text-base text-[#7D8A8F] dark:text-[#9EABB0] leading-relaxed font-medium max-w-4xl">
        {t.aboutEuy.culturalNoteDesc}
      </p>
    </div>
  );
};
