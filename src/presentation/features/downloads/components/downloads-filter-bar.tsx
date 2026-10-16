import { Search } from 'lucide-react';
import React from 'react';
import { useTranslation } from '../../../../core/localization/use-translation';
import { FilterCategory } from '../../../hooks/use-releases';

export interface DownloadsFilterBarProps {
  filter: FilterCategory;
  setFilter: (f: FilterCategory) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const DownloadsFilterBar: React.FC<DownloadsFilterBarProps> = ({
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      {/* Search Input */}
      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 text-[#7D8A8F] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.downloads.searchPlaceholder}
          className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] text-[#2F3A3F] dark:text-[#E8EFF1] placeholder-[#7D8A8F] focus:outline-hidden focus:border-[#5B93AE]"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[rgba(125,138,143,0.12)] border border-[rgba(125,138,143,0.30)] self-stretch sm:self-auto justify-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-[#A9D6E5] text-[#2F3A3F] border border-[#5B93AE] shadow-xs'
              : 'text-[#7D8A8F] dark:text-[#9EABB0] hover:text-[#2F3A3F] dark:hover:text-[#E8EFF1]'
          }`}
        >
          {t.downloads.filterAll}
        </button>
        <button
          onClick={() => setFilter('starter')}
          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
            filter === 'starter'
              ? 'bg-[#A9D6E5] text-[#2F3A3F] border border-[#5B93AE] shadow-xs'
              : 'text-[#7D8A8F] dark:text-[#9EABB0] hover:text-[#2F3A3F] dark:hover:text-[#E8EFF1]'
          }`}
        >
          {t.downloads.filterStarter}
        </button>
        <button
          onClick={() => setFilter('github_release')}
          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
            filter === 'github_release'
              ? 'bg-[#A9D6E5] text-[#2F3A3F] border border-[#5B93AE] shadow-xs'
              : 'text-[#7D8A8F] dark:text-[#9EABB0] hover:text-[#2F3A3F] dark:hover:text-[#E8EFF1]'
          }`}
        >
          {t.downloads.filterReleases}
        </button>
      </div>
    </div>
  );
};
