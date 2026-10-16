import { Download, HardDrive } from 'lucide-react';
import React from 'react';
import { EmbossedButton } from '../../../../core/components/button/embossed-button';
import { GithubIcon } from '../../../../core/components/icons/github-icon';
import { MaterialShapeType } from '../../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../../core/localization/use-translation';
import { DeckItem } from '../../../../domain/entities/deck-item.entity';

export interface DeckCardItemProps {
  deck: DeckItem;
}

export const DeckCardItem: React.FC<DeckCardItemProps> = ({ deck }) => {
  const { t } = useTranslation();

  // Dynamic assignment of authentic Material Expressive Shapes per dialect
  const getShapeForLanguage = (
    lang: string
  ): { type: MaterialShapeType; fill: string } => {
    switch (lang.toLowerCase()) {
      case 'id-sun':
        return { type: 'scallop-12', fill: '#FFD3B0' };
      case 'id-jav':
        return { type: 'shield', fill: '#A9D6E5' };
      case 'ja':
        return { type: 'clover-8', fill: '#C9B6E4' };
      default:
        return { type: 'pebble', fill: '#FFD59E' };
    }
  };

  const shapeConfig = getShapeForLanguage(deck.language);

  return (
    <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors">
      {/* Left: Material Expressive Shaped Dialect Emblem & Deck details */}
      <div className="flex items-start gap-4">
        <ShapeFrame
          type={shapeConfig.type}
          fill={shapeConfig.fill}
          className="w-12 h-12 shrink-0 mt-0.5"
        >
          <span className="text-xs font-black text-[#2F3A3F] uppercase">
            {deck.language.replace('id-', '')}
          </span>
        </ShapeFrame>

        <div>
          <h3 className="text-base sm:text-lg font-black text-[#2F3A3F] dark:text-[#E8EFF1] leading-snug tracking-tight">
            {deck.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed mt-1 max-w-xl">
            {deck.description}
          </p>
          {/* Metadata line */}
          <div className="flex flex-wrap items-center gap-2.5 mt-2.5 text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD]">
            <span className="font-bold text-[#5B93AE] dark:text-[#A9D6E5] uppercase">
              {deck.difficulty}
            </span>
            <span>•</span>
            <span>{t.downloads.cardCount(deck.cardCount)}</span>
            <span>•</span>
            <span>{deck.fileSizeFormatted}</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              {deck.sourceType === 'github_release' ? (
                <>
                  <GithubIcon className="w-3 h-3 text-[#2F3A3F] dark:text-[#FAFAF8]" />
                  <span>{deck.tag || 'Release'}</span>
                </>
              ) : (
                <>
                  <HardDrive className="w-3 h-3 text-[#5B93AE] dark:text-[#A9D6E5]" />
                  <span>Bundled</span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Download Action Dock */}
      <div className="shrink-0 self-start sm:self-center pl-16 sm:pl-0">
        <a href={deck.downloadUrl} download>
          <EmbossedButton
            variant="primary"
            size="sm"
            icon={<Download className="w-3.5 h-3.5" />}
          >
            {t.downloads.downloadBtn}
          </EmbossedButton>
        </a>
      </div>
    </div>
  );
};
