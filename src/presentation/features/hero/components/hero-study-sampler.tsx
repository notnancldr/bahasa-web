import { CheckCircle2, Flame, HardDrive, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { MaterialShape } from '../../../../core/components/shape/material-shape';
import { useTranslation } from '../../../../core/localization/use-translation';

interface SrsRating {
  interval: string;
  label: string;
  tokenBg: string;
  tokenBorder: string;
  tokenColor: string;
}

export const HeroStudySampler: React.FC = () => {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const mock = t.hero.mockCard;

  const ratings: SrsRating[] = [
    {
      interval: '10m',
      label: 'Ulangi',
      tokenBg: 'hover:bg-[#F4A6A6]/20 bg-[#F4A6A6]/10',
      tokenBorder: 'border-[#F4A6A6]/60',
      tokenColor: 'text-[#F4A6A6]',
    },
    {
      interval: '1h',
      label: 'Sulit',
      tokenBg: 'hover:bg-[#FFD59E]/20 bg-[#FFD59E]/10',
      tokenBorder: 'border-[#FFD59E]/60',
      tokenColor: 'text-[#FFD59E]',
    },
    {
      interval: '1d',
      label: 'Baik',
      tokenBg: 'hover:bg-[#A9D6E5]/25 bg-[#A9D6E5]/15',
      tokenBorder: 'border-[#5B93AE]/60',
      tokenColor: 'text-[#5B93AE] dark:text-[#A9D6E5]',
    },
    {
      interval: '4d',
      label: 'Mudah',
      tokenBg: 'hover:bg-[#A8D5A2]/25 bg-[#A8D5A2]/15',
      tokenBorder: 'border-[#A8D5A2]/60',
      tokenColor: 'text-[#A8D5A2]',
    },
  ];

  const playPronunciation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(mock.word);
      speechSynthesis.speak(utterance);
    }
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  const handleRate = (interval: string) => {
    setSelectedRating(interval);
  };

  const handleReset = () => {
    setRevealed(false);
    setSelectedRating(null);
  };

  return (
    <div className="relative w-full max-w-2xl select-none">
      {/* Background Expressive Shape Silhouettes (Subtle Material Loom) */}
      <div className="absolute -top-12 -right-8 w-44 h-44 opacity-20 dark:opacity-10 pointer-events-none text-[#FFD3B0]">
        <MaterialShape type="clover-8" className="w-full h-full" />
      </div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-15 dark:opacity-10 pointer-events-none text-[#C9B6E4]">
        <MaterialShape type="pebble" className="w-full h-full" />
      </div>

      {/* Main Specimen Loom Canvas (Card-free open architecture) */}
      <div className="relative z-10 space-y-6">
        {/* Editorial Topline: Streak & Offline Protocol */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[rgba(125,138,143,0.25)]">
          <div className="flex items-center gap-2.5">
            {/* Soft Shield Shape Badge for Streak */}
            <div className="relative w-9 h-9 flex items-center justify-center text-[#FFD59E]">
              <MaterialShape
                type="shield"
                className="w-full h-full absolute inset-0 text-[#FFD59E]/25"
              />
              <Flame className="w-4 h-4 fill-[#FFD59E] relative z-10" />
            </div>
            <div>
              <p className="text-xs font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight">
                12 Hari Beruntun
              </p>
              <p className="text-[10px] text-[#7D8A8F] dark:text-[#9AA8AD]">
                Target: 20 kartu / hari
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(125,138,143,0.08)] border border-[rgba(125,138,143,0.20)] text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD]">
            <HardDrive className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />
            <span>SQLite Lokal · 100% Offline</span>
          </div>
        </div>

        {/* The Scalloped Audio Portal & Vocabulary Specimen */}
        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8 py-2">
          {/* Material 12-Point Scalloped Interactive Audio Portal */}
          <div className="relative shrink-0">
            <div
              className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center cursor-pointer"
              onClick={playPronunciation}
              role="button"
              aria-label="Dengarkan pengucapan audio"
            >
              {/* Outer scalloped sunburst */}
              <MaterialShape
                type="scallop-12"
                className={`w-full h-full absolute inset-0 transition-colors duration-150 ${
                  isPlayingAudio
                    ? 'text-[#5B93AE] dark:text-[#A9D6E5]'
                    : 'text-[#A9D6E5]/40 dark:text-[#5B93AE]/30'
                }`}
              />
              {/* Inner core scalloped sunburst */}
              <MaterialShape
                type="scallop-12"
                className="w-20 h-20 sm:w-24 sm:h-24 absolute text-[#A9D6E5] dark:text-[#5B93AE] drop-shadow-sm"
              />
              {/* Center Audio Trigger Icon */}
              <div className="relative z-10 text-[#2F3A3F] dark:text-[#FAFAF8] flex flex-col items-center justify-center">
                <Volume2 className="w-7 h-7 sm:w-8 sm:h-8" />
                <span className="text-[9px] font-bold tracking-wider mt-0.5 uppercase opacity-80">
                  Audio
                </span>
              </div>
            </div>
          </div>

          {/* Lexical Specimen Information */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5] tracking-wider uppercase">
                {mock.deckTitle}
              </span>
              <span className="text-[#7D8A8F] opacity-40">·</span>
              <span className="text-xs text-[#7D8A8F] dark:text-[#9AA8AD]">
                Tingkat {mock.level}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight">
              {mock.word}
            </h3>

            <p className="text-sm sm:text-base text-[#7D8A8F] dark:text-[#9AA8AD] font-semibold">
              {mock.phonetic}
            </p>
          </div>
        </div>

        {/* Revealed Meaning & Morphological Context */}
        {revealed ? (
          <div className="space-y-4 pt-2 animate-fadeIn">
            <div className="p-5 rounded-xl bg-[rgba(125,138,143,0.07)] dark:bg-[rgba(255,255,255,0.03)] border-l-4 border-l-[#5B93AE] border border-[rgba(125,138,143,0.20)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Terjemahan & Nuansa Budaya</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#2F3A3F] dark:text-[#E8EFF1] leading-snug">
                {mock.meaning}
              </p>
              <p className="text-xs sm:text-sm text-[#7D8A8F] dark:text-[#9AA8AD] mt-2 leading-relaxed">
                {mock.context}
              </p>
            </div>

            {/* SRS Spaced Repetition Response Bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-[#7D8A8F] dark:text-[#9AA8AD]">
                  Algoritma Spaced Repetition (SRS):
                </span>
                {selectedRating && (
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-xs text-[#5B93AE] dark:text-[#A9D6E5] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Ulangi simulasi</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {ratings.map((r) => {
                  const isSelected = selectedRating === r.interval;
                  return (
                    <button
                      key={r.interval}
                      onClick={() => handleRate(r.interval)}
                      className={`min-h-[44px] px-3 py-2.5 rounded-lg border text-xs flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                        r.tokenBorder
                      } ${r.tokenBg} ${
                        isSelected
                          ? 'ring-2 ring-offset-2 ring-[#5B93AE]'
                          : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <span className={`font-black ${r.tokenColor}`}>{r.interval}</span>
                      <span className="text-[11px] font-medium text-[#2F3A3F] dark:text-[#E8EFF1]">
                        {r.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selectedRating && (
                <div className="mt-3.5 p-3 rounded-lg bg-[#A8D5A2]/15 border border-[#A8D5A2]/40 flex items-center gap-2.5 text-xs text-[#2F3A3F] dark:text-[#E8EFF1]">
                  <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0" />
                  <span>
                    Interval <strong>{selectedRating}</strong> dijadwalkan secara lokal di SQLite ponsel Anda tanpa sinkronisasi cloud.
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Reveal Action Dock */
          <div className="pt-2">
            <button
              onClick={() => setRevealed(true)}
              className="w-full min-h-[50px] rounded-lg border-2 border-dashed border-[#5B93AE]/40 dark:border-[#A9D6E5]/40 hover:border-[#5B93AE] dark:hover:border-[#A9D6E5] bg-[rgba(169,214,229,0.08)] hover:bg-[rgba(169,214,229,0.15)] text-[#5B93AE] dark:text-[#A9D6E5] font-bold text-sm tracking-wide transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{mock.flipToReveal}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
