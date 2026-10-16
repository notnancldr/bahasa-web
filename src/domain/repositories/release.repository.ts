import { DeckItem } from '../entities/deck-item.entity';
import { GithubRelease } from '../entities/github-release.entity';

export interface IReleaseRepository {
  fetchGithubReleases(): Promise<GithubRelease[]>;
  getStarterDecks(): Promise<DeckItem[]>;
  getAllDeckItems(): Promise<DeckItem[]>;
}

