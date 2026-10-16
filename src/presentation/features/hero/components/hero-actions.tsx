import { Download, FileSearch, Sparkles } from 'lucide-react';
import React from 'react';
import { EmbossedButton } from '../../../../core/components/button/embossed-button';
import { useTranslation } from '../../../../core/localization/use-translation';

export const HeroActions: React.FC = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
      <EmbossedButton
        variant="primary"
        size="lg"
        icon={<Download className="w-5 h-5" />}
        onClick={() => scrollTo('downloads')}
      >
        {t.hero.ctaApp}
      </EmbossedButton>

      <EmbossedButton
        variant="neutral"
        size="lg"
        icon={<FileSearch className="w-5 h-5 text-[#7D8A8F]" />}
        onClick={() => scrollTo('inspector')}
      >
        {t.hero.ctaInspect}
      </EmbossedButton>
    </div>
  );
};
