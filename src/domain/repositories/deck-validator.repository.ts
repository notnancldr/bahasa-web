import { EuyDeck } from '../entities/euy-deck.entity';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  deck?: EuyDeck;
}

export interface IDeckValidatorRepository {
  validateJson(rawJson: string): ValidationResult;
  validateObject(obj: unknown): ValidationResult;
}

