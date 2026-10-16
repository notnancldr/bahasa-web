export type DeckDifficulty = 'beginner' | 'intermediate' | 'expert';

export interface EuyCard {
  idCard: string;
  defaultLanguage: string;
  translation: string;
  phoneticLang?: string;
  additionalContext?: string;
  reps: number;
  correctAnswer: number;
  finalScore: number;
}

export interface EuyDeck {
  id: string;
  name: string;
  language: string;
  difficulty: DeckDifficulty;
  rolePlay?: string;
  explanationRolePlay?: string;
  listCards: EuyCard[];
}

