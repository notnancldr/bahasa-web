import { DeckItem } from '../../domain/entities/deck-item.entity';

export class StarterDecksDataSource {
  private static starterDecks: DeckItem[] = [
    {
      id: 'deck-sun-001',
      name: 'Sundanese Conversational Slang & Greetings',
      language: 'id-sun',
      difficulty: 'beginner',
      cardCount: 5,
      fileSizeFormatted: '1.8 KB',
      description: 'Master everyday informal Sundanese greetings, warm etiquette, and the famous "Euy!" colloquial phrase.',
      downloadUrl: '/sample-decks/sundanese-slang.euy',
      sourceType: 'starter',
      tag: 'Starter Pack',
    },
    {
      id: 'deck-jp-001',
      name: 'Everyday Japanese Survival Essentials',
      language: 'ja',
      difficulty: 'beginner',
      cardCount: 5,
      fileSizeFormatted: '2.1 KB',
      description: 'Crucial polite Japanese vocabulary for dining, commuting, and everyday greetings in Tokyo.',
      downloadUrl: '/sample-decks/everyday-japanese.euy',
      sourceType: 'starter',
      tag: 'Starter Pack',
    },
    {
      id: 'deck-es-001',
      name: 'Spanish Travel & Street Navigation',
      language: 'es',
      difficulty: 'intermediate',
      cardCount: 4,
      fileSizeFormatted: '1.9 KB',
      description: 'High-frequency expressions for asking directions, ordering tapas, and everyday social pleasantries in Spain.',
      downloadUrl: '/sample-decks/spanish-travel.euy',
      sourceType: 'starter',
      tag: 'Starter Pack',
    },
    {
      id: 'deck-en-001',
      name: 'Colloquial English Idioms & Nuance',
      language: 'en',
      difficulty: 'intermediate',
      cardCount: 4,
      fileSizeFormatted: '2.0 KB',
      description: 'Colorful figurative expressions and idioms commonly used in modern conversation.',
      downloadUrl: '/sample-decks/english-idioms.euy',
      sourceType: 'starter',
      tag: 'Starter Pack',
    },
  ];

  public getStarterDecks(): DeckItem[] {
    return StarterDecksDataSource.starterDecks;
  }
}

