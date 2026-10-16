import React, { useState } from 'react';
import { DeckValidatorRepositoryImpl } from '../../data/repositories/deck-validator.repository.impl';
import { ValidationResult } from '../../domain/repositories/deck-validator.repository';

const validatorRepo = new DeckValidatorRepositoryImpl();

export const useEuyValidator = () => {
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = (file: File) => {
    setIsProcessing(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const validation = validatorRepo.validateJson(text);
        setResult(validation);
      } catch (err) {
        setResult({
          isValid: false,
          errors: [`File read failure: ${(err as Error).message}`],
        });
      } finally {
        setIsProcessing(false);
      }
    };

    reader.onerror = () => {
      setResult({
        isValid: false,
        errors: ['Failed to read selected file.'],
      });
      setIsProcessing(false);
    };

    reader.readAsText(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const reset = () => {
    setResult(null);
    setFileName('');
    setIsProcessing(false);
  };

  return {
    result,
    fileName,
    isProcessing,
    processFile,
    handleFileInput,
    reset,
  };
};

