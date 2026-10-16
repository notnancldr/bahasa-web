import { EuyCard, EuyDeck } from '../../domain/entities/euy-deck.entity';
import { IDeckValidatorRepository, ValidationResult } from '../../domain/repositories/deck-validator.repository';

export class DeckValidatorRepositoryImpl implements IDeckValidatorRepository {
  public validateJson(rawJson: string): ValidationResult {
    try {
      const parsed = JSON.parse(rawJson);
      return this.validateObject(parsed);
    } catch (e) {
      return {
        isValid: false,
        errors: [`JSON Syntax Error: ${(e as Error).message}`],
      };
    }
  }

  public validateObject(obj: unknown): ValidationResult {
    const errors: string[] = [];

    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return {
        isValid: false,
        errors: ['Expected a valid JSON object root.'],
      };
    }

    const deck = obj as Record<string, unknown>;

    // Check required deck attributes
    if (!deck.id || typeof deck.id !== 'string') errors.push('Missing or invalid "id" (string required).');
    if (!deck.name || typeof deck.name !== 'string') errors.push('Missing or invalid "name" (string required).');
    if (!deck.language || typeof deck.language !== 'string') errors.push('Missing or invalid "language" (string required).');

    const validDifficulties = ['beginner', 'intermediate', 'expert'];
    if (!deck.difficulty || !validDifficulties.includes(deck.difficulty as string)) {
      errors.push('Invalid "difficulty". Must be "beginner", "intermediate", or "expert".');
    }

    if (deck.rolePlay !== undefined && typeof deck.rolePlay !== 'string') {
      errors.push('"rolePlay" must be a string if provided.');
    }

    if (!Array.isArray(deck.listCards)) {
      errors.push('Missing or invalid "listCards" (array of cards required).');
    } else {
      deck.listCards.forEach((cardItem: unknown, idx: number) => {
        if (!cardItem || typeof cardItem !== 'object') {
          errors.push(`Card #${idx + 1} must be an object.`);
          return;
        }

        const card = cardItem as Record<string, unknown>;
        if (!card.idCard || typeof card.idCard !== 'string') {
          errors.push(`Card #${idx + 1}: Missing or invalid "idCard".`);
        }
        if (!card.defaultLanguage || typeof card.defaultLanguage !== 'string') {
          errors.push(`Card #${idx + 1}: Missing or invalid "defaultLanguage".`);
        }
        if (!card.translation || typeof card.translation !== 'string') {
          errors.push(`Card #${idx + 1}: Missing or invalid "translation".`);
        }
      });
    }

    if (errors.length > 0) {
      return { isValid: false, errors };
    }

    const formattedDeck: EuyDeck = {
      id: String(deck.id),
      name: String(deck.name),
      language: String(deck.language),
      difficulty: deck.difficulty as EuyDeck['difficulty'],
      rolePlay: deck.rolePlay ? String(deck.rolePlay) : undefined,
      explanationRolePlay: deck.explanationRolePlay ? String(deck.explanationRolePlay) : undefined,
      listCards: (deck.listCards as Record<string, unknown>[]).map((c): EuyCard => ({
        idCard: String(c.idCard),
        defaultLanguage: String(c.defaultLanguage),
        translation: String(c.translation),
        phoneticLang: c.phoneticLang ? String(c.phoneticLang) : undefined,
        additionalContext: c.additionalContext ? String(c.additionalContext) : undefined,
        reps: typeof c.reps === 'number' ? c.reps : 0,
        correctAnswer: typeof c.correctAnswer === 'number' ? c.correctAnswer : 0,
        finalScore: typeof c.finalScore === 'number' ? c.finalScore : 0,
      })),
    };

    return {
      isValid: true,
      errors: [],
      deck: formattedDeck,
    };
  }
}

