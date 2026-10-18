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
      <a
        href="https://github.com/notnancldr/bahasa-flutter/releases/download/v0.1.0/app-arm64-v8a-release.apk"
        download
      >
        <EmbossedButton
          variant="primary"
          size="lg"
          icon={<Download className="w-5 h-5" />}
        >
          {t.hero.ctaApp}
        </EmbossedButton>
      </a>

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
