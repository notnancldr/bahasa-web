import { ArrowDownToLine, Database, Flame, QrCode, ShieldCheck, Smartphone, Sparkles, Wifi } from 'lucide-react';
import React from 'react';
import { MaterialShape } from '../../../../core/components/shape/material-shape';
import { useTranslation } from '../../../../core/localization/use-translation';

export const HeroAppShowcase: React.FC = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* Ambient Material Shape Silhouettes */}
      <div className="absolute -top-10 -right-6 w-40 h-40 opacity-15 dark:opacity-10 pointer-events-none text-[#5B93AE]">
        <MaterialShape type="clover-8" className="w-full h-full" />
      </div>
      <div className="absolute -bottom-8 -left-8 w-44 h-44 opacity-15 dark:opacity-10 pointer-events-none text-[#FFD3B0]">
        <MaterialShape type="scallop-12" className="w-full h-full" />
      </div>

      {/* Main Tactile App Frame */}
      <div className="relative z-10 rounded-2xl border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] shadow-md overflow-hidden">
        {/* Device Top Bar */}
        <div className="px-5 py-3.5 border-b border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.06)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#5B93AE] dark:bg-[#A9D6E5] flex items-center justify-center text-white dark:text-[#2F3A3F] font-black text-xs">
              B
            </div>
            <div>
              <p className="text-xs font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
                Basa Mobile App
              </p>
              <p className="text-[10px] text-[#7D8A8F] dark:text-[#9AA8AD] font-medium">
                v0.1.0 · Android APK & Open Ecosystem
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#A8D5A2]/20 border border-[#A8D5A2]/50 text-[10px] font-bold text-[#4B7347] dark:text-[#A8D5A2]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Offline</span>
          </div>
        </div>

        {/* App Showcase Content */}
        <div className="p-6 space-y-5">
          {/* Active Learning Status Preview */}
          <div className="p-4 rounded-xl border border-[rgba(125,138,143,0.25)] bg-white/70 dark:bg-[#0F1417]/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5]">
                Dek Aktif · Kosakata Sunda
              </span>
              <div className="flex items-center gap-1 text-[11px] font-black text-[#FFD59E]">
                <Flame className="w-3.5 h-3.5 fill-[#FFD59E]" />
                <span>12 Hari Beruntun</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-lg font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
                  Kumaha Damang?
                </p>
                <p className="text-xs text-[#7D8A8F] dark:text-[#9AA8AD]">
                  /ku-ma-ha da-mang/ · Apa kabar?
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-[#5B93AE] dark:text-[#A9D6E5]">94%</span>
                <p className="text-[10px] text-[#7D8A8F] dark:text-[#9AA8AD]">Retensi SRS</p>
              </div>
            </div>

            {/* SRS Progress Bar */}
            <div className="w-full bg-[rgba(125,138,143,0.20)] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#5B93AE] dark:bg-[#A9D6E5] h-full w-[94%]" />
            </div>
          </div>

          {/* App Core Architectural Pillars */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.04)] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2F3A3F] dark:text-[#E8EFF1]">
                <Database className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />
                <span>SQLite Mandiri</span>
              </div>
              <p className="text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed">
                Database Drift lokal di penyimpanan ponsel tanpa cloud.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.04)] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2F3A3F] dark:text-[#E8EFF1]">
                <Wifi className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />
                <span>P2P Wi-Fi Sync</span>
              </div>
              <p className="text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed">
                Server Shelf lokal untuk transfer profil via Wi-Fi & QR.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.04)] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2F3A3F] dark:text-[#E8EFF1]">
                <Smartphone className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />
                <span>Format .euy</span>
              </div>
              <p className="text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed">
                Ekspor-impor kartu JSON terbuka tanpa ketergantungan.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.04)] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2F3A3F] dark:text-[#E8EFF1]">
                <Sparkles className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />
                <span>Roleplay AI</span>
              </div>
              <p className="text-[11px] text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed">
                Simulasi percakapan interaktif berbasis persona budaya.
              </p>
            </div>
          </div>

          {/* Quick Download CTA inside frame */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-[rgba(125,138,143,0.20)]">
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-[#7D8A8F]" />
              <span className="text-xs text-[#7D8A8F] dark:text-[#9AA8AD]">
                Tersedia APK Android Siap Pakai
              </span>
            </div>
            <button
              onClick={() => scrollTo('downloads')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#5B93AE] text-white hover:bg-[#48788e] transition-colors"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>{t.downloads.downloadApkBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

