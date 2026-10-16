import { FileUp, UploadCloud } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { EmbossedButton } from '../../../../core/components/button/embossed-button';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';
import { useTranslation } from '../../../../core/localization/use-translation';

export interface InspectorDropzoneProps {
  onFileSelected: (file: File) => void;
  isProcessing: boolean;
}

export const InspectorDropzone: React.FC<InspectorDropzoneProps> = ({
  onFileSelected,
  isProcessing,
}) => {
  const { t } = useTranslation();
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative rounded-xl border-2 border-dashed p-8 md:p-14 text-center transition-colors ${
        isDragOver
          ? 'border-[#5B93AE] bg-[#A9D6E5]/15 dark:bg-[#1F292E]'
          : 'border-[rgba(125,138,143,0.30)] bg-[rgba(125,138,143,0.04)]'
      }`}
    >
      <input
        type="file"
        ref={fileInputRef}
        accept=".euy,.json"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            onFileSelected(e.target.files[0]);
          }
        }}
      />

      {/* Material 3 Expressive Shield Keystone Frame */}
      <div className="flex justify-center mb-5">
        <ShapeFrame
          type="shield"
          fill="#A9D6E5"
          className="w-16 h-16"
        >
          <UploadCloud className="w-7 h-7 text-[#2F3A3F]" />
        </ShapeFrame>
      </div>

      <h3 className="text-lg sm:text-xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-1">
        {isDragOver ? t.inspector.dragActive : t.inspector.dropzoneTitle}
      </h3>
      <p className="text-xs text-[#7D8A8F] dark:text-[#9AA8AD] font-medium mb-6">
        {t.inspector.dropzoneSubtitle} (Maksimal 5MB)
      </p>

      <EmbossedButton
        variant="primary"
        size="md"
        disabled={isProcessing}
        icon={<FileUp className="w-4 h-4" />}
        onClick={() => fileInputRef.current?.click()}
      >
        {isProcessing ? 'Memvalidasi...' : t.inspector.browseFiles}
      </EmbossedButton>
    </div>
  );
};
