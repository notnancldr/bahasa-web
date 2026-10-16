import { DeckDifficulty } from './euy-deck.entity';

export type DeckSourceType = 'starter' | 'github_release';

export interface DeckItem {
  id: string;
  name: string;
  language: string;
  difficulty: DeckDifficulty;
  cardCount: number;
  fileSizeFormatted: string;
  description: string;
  downloadUrl: string;
  sourceType: DeckSourceType;
  tag?: string;
  rawDeckData?: unknown;
}

