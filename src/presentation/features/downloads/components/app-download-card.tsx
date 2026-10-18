import { Download, HardDrive, ShieldCheck, Smartphone, Wifi } from 'lucide-react';
import React from 'react';
import { EmbossedButton } from '../../../../core/components/button/embossed-button';
import { GithubIcon } from '../../../../core/components/icons/github-icon';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../../core/localization/use-translation';

export const AppDownloadCard: React.FC = () => {
  const { t } = useTranslation();

  const appHighlights = [
    { icon: <HardDrive className="w-4 h-4 text-[#5B93AE] dark:text-[#A9D6E5]" />, label: 'SQLite On-Device' },
    { icon: <Wifi className="w-4 h-4 text-[#5B93AE] dark:text-[#A9D6E5]" />, label: 'P2P Wi-Fi Sync' },
    { icon: <ShieldCheck className="w-4 h-4 text-[#5B93AE] dark:text-[#A9D6E5]" />, label: 'Zero Cloud Tracking' },
    { icon: <Smartphone className="w-4 h-4 text-[#5B93AE] dark:text-[#A9D6E5]" />, label: 'Android 8.0+' },
  ];

  return (
    <div className="relative mb-12 p-6 sm:p-8 rounded-2xl border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] shadow-sm">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left: App Identity & Description */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3.5">
            <ShapeFrame
              type="scallop-12"
              fill="#5B93AE"
              className="w-12 h-12 shrink-0"
            >
              <span className="font-black text-white text-lg">B</span>
            </ShapeFrame>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight">
                  {t.downloads.appDownloadTitle}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-md font-bold bg-[#5B93AE]/15 text-[#5B93AE] dark:text-[#A9D6E5] border border-[#5B93AE]/30">
                  APK
                </span>
              </div>
              <p className="text-xs font-semibold text-[#7D8A8F] dark:text-[#9AA8AD]">
                {t.downloads.appVersion}
              </p>
            </div>
          </div>

          <p className="text-sm text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed font-medium">
            {t.downloads.appDownloadSubtitle}
          </p>

          {/* Highlights Grid */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {appHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(125,138,143,0.20)] bg-[rgba(125,138,143,0.06)] text-xs font-semibold text-[#2F3A3F] dark:text-[#E8EFF1]"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
          <a
            href="https://github.com/notnancldr/bahasa-flutter/releases/download/v0.1.0/app-arm64-v8a-release.apk"
            download
            className="w-full sm:w-auto"
          >
            <EmbossedButton
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<Download className="w-5 h-5" />}
            >
              {t.downloads.downloadApkBtn}
            </EmbossedButton>
          </a>

          <a
            href="https://github.com/notnancldr/bahasa-flutter/releases"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <EmbossedButton
              variant="neutral"
              size="lg"
              className="w-full justify-center"
              icon={<GithubIcon className="w-4 h-4 text-[#7D8A8F]" />}
            >
              {t.downloads.viewReleasesBtn}
            </EmbossedButton>
          </a>
        </div>
      </div>
    </div>
  );
};
