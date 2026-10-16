import React from 'react';
import { useTranslation } from '../../../core/localization/use-translation';
import { useEuyValidator } from '../../hooks/use-euy-validator';
import { InspectorDropzone } from './components/inspector-dropzone';
import { InspectorResults } from './components/inspector-results';

export const InspectorSection: React.FC = () => {
  const { t } = useTranslation();
  const { result, fileName, isProcessing, processFile, reset } = useEuyValidator();

  return (
    <section id="inspector" className="py-20 border-t border-[rgba(125,138,143,0.30)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] tracking-tight">
            {t.inspector.title}
          </h2>
          <p className="text-base text-[#7D8A8F] dark:text-[#9EABB0] font-medium leading-relaxed">
            {t.inspector.subtitle}
          </p>
        </div>

        {result ? (
          <InspectorResults result={result} fileName={fileName} onReset={reset} />
        ) : (
          <InspectorDropzone onFileSelected={processFile} isProcessing={isProcessing} />
        )}
      </div>
    </section>
  );
};
