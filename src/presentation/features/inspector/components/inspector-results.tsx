import { AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import React from 'react';
import { EmbossedButton } from '../../../../core/components/button/embossed-button';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../../core/localization/use-translation';
import { ValidationResult } from '../../../../domain/repositories/deck-validator.repository';

export interface InspectorResultsProps {
  result: ValidationResult;
  fileName: string;
  onReset: () => void;
}

export const InspectorResults: React.FC<InspectorResultsProps> = ({
  result,
  fileName,
  onReset,
}) => {
  const { t } = useTranslation();

  if (!result.isValid) {
    return (
      <div className="p-6 rounded-2xl border border-[#F4A6A6]/40 bg-[#F4A6A6]/10">
        <div className="flex items-center gap-3 text-[#2F3A3F] dark:text-[#E8EFF1] mb-4">
          <ShapeFrame type="shield" fill="#F4A6A6" className="w-10 h-10 shrink-0">
            <AlertCircle className="w-5 h-5 text-[#2F3A3F]" />
          </ShapeFrame>
          <div>
            <h3 className="text-lg font-black">{t.inspector.invalidDeck}</h3>
            <p className="text-xs text-[#7D8A8F]">Berkas: {fileName}</p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-[#2F3A3F] dark:text-[#E8EFF1] mb-6">
          {result.errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
        <EmbossedButton variant="neutral" size="sm" onClick={onReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
          {t.inspector.closePreview}
        </EmbossedButton>
      </div>
    );
  }

  const deck = result.deck!;

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl border border-[#A8D5A2]/40 bg-[#A8D5A2]/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(125,138,143,0.20)]">
          <div className="flex items-center gap-3">
            <ShapeFrame type="clover-8" fill="#A8D5A2" className="w-10 h-10 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#2F3A3F]" />
            </ShapeFrame>
            <div>
              <h3 className="text-lg font-black text-[#2F3A3F] dark:text-[#E8EFF1]">
                {t.inspector.validDeck}
              </h3>
              <p className="text-xs text-[#7D8A8F]">{fileName}</p>
            </div>
          </div>
          <EmbossedButton variant="neutral" size="sm" onClick={onReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
            {t.inspector.closePreview}
          </EmbossedButton>
        </div>

        {/* Deck metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div>
            <div className="text-[10px] uppercase font-bold text-[#7D8A8F]">Judul Deck</div>
            <div className="text-sm font-black text-[#2F3A3F] dark:text-[#E8EFF1]">{deck.name}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-[#7D8A8F]">Dialek / Bahasa</div>
            <div className="text-sm font-bold text-[#5B93AE] dark:text-[#A9D6E5] uppercase">{deck.language}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-[#7D8A8F]">Tingkat Kesulitan</div>
            <div className="text-sm font-bold capitalize text-[#2F3A3F] dark:text-[#E8EFF1]">{deck.difficulty}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-[#7D8A8F]">Jumlah Kartu</div>
            <div className="text-sm font-black text-[#2F3A3F] dark:text-[#E8EFF1]">{deck.listCards.length} Kartu</div>
          </div>
        </div>

        {deck.rolePlay && (
          <div className="mt-4 pt-4 border-t border-[rgba(125,138,143,0.20)]">
            <div className="text-[10px] uppercase font-bold text-[#7D8A8F] mb-1">{t.inspector.rolePlay}</div>
            <p className="text-xs font-medium text-[#7D8A8F] dark:text-[#9AA8AD] italic bg-[rgba(125,138,143,0.06)] p-3 rounded-xl border border-[rgba(125,138,143,0.20)]">
              "{deck.rolePlay}"
            </p>
          </div>
        )}
      </div>

      {/* Cards list preview */}
      <div>
        <h4 className="text-base font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-3">
          {t.inspector.cardsPreview} ({deck.listCards.length})
        </h4>
        <div className="border-y border-[rgba(125,138,143,0.20)] divide-y divide-[rgba(125,138,143,0.15)] max-h-96 overflow-y-auto">
          {deck.listCards.map((card, idx) => (
            <div
              key={card.idCard || idx}
              className="py-3 px-1 text-left flex items-start justify-between gap-4"
            >
              <div>
                <div className="font-extrabold text-sm text-[#2F3A3F] dark:text-[#E8EFF1]">
                  {card.defaultLanguage}
                </div>
                <div className="text-xs text-[#7D8A8F] dark:text-[#9AA8AD] mt-0.5">
                  {card.translation}
                </div>
              </div>
              {card.phoneticLang && (
                <div className="text-xs text-[#5B93AE] dark:text-[#A9D6E5] shrink-0">
                  /{card.phoneticLang}/
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
