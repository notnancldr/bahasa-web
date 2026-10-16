import { PackageOpen } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../core/components/shape/material-shape';
import { useTranslation } from '../../../core/localization/use-translation';
import { useReleases } from '../../hooks/use-releases';
import { AppDownloadCard } from './components/app-download-card';
import { DeckCardItem } from './components/deck-card-item';
import { DownloadsFilterBar } from './components/downloads-filter-bar';

export const DownloadsSection: React.FC = () => {
  const { t } = useTranslation();
  const { deckItems, loading, filter, setFilter, searchQuery, setSearchQuery } = useReleases();

  return (
    <section id="downloads" className="relative py-12 border-b border-[rgba(125,138,143,0.18)] overflow-hidden">
      {/* Background Shape Accent */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 opacity-[0.03] dark:opacity-[0.04] pointer-events-none text-[#FFD3B0]">
        <MaterialShape type="scallop-12" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight leading-[1.15]">
            {t.downloads.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
            {t.downloads.subtitle}
          </p>
        </div>

        {/* Featured Basa Mobile App Showcase & Download Card */}
        <AppDownloadCard />

        {/* Community & Official .euy Decks Catalog */}
        <div className="pt-6 mb-6">
          <h3 className="text-2xl sm:text-3xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight">
            {t.downloads.deckCatalogTitle}
          </h3>
        </div>

        <DownloadsFilterBar
          filter={filter}
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {loading ? (
          <div className="py-16 text-center text-[#7D8A8F] font-bold text-sm animate-pulse">
            Loading available decks...
          </div>
        ) : deckItems.length === 0 ? (
          <div className="py-16 text-center rounded-3xl border border-dashed border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] p-8 space-y-3">
            <PackageOpen className="w-10 h-10 text-[#7D8A8F] mx-auto" />
            <p className="text-sm font-bold text-[#7D8A8F] dark:text-[#9AA8AD]">
              {t.downloads.noDecksFound}
            </p>
          </div>
        ) : (
          <div className="border-y border-[rgba(125,138,143,0.22)] divide-y divide-[rgba(125,138,143,0.18)]">
            {deckItems.map((deck) => (
              <DeckCardItem key={deck.id} deck={deck} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
