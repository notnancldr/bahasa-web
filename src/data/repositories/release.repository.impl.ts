import { DeckItem } from '../../domain/entities/deck-item.entity';
import { GithubRelease } from '../../domain/entities/github-release.entity';
import { IReleaseRepository } from '../../domain/repositories/release.repository';
import { GithubApiDataSource } from '../datasources/github-api.datasource';
import { StarterDecksDataSource } from '../datasources/starter-decks.datasource';

export class ReleaseRepositoryImpl implements IReleaseRepository {
  private githubDataSource: GithubApiDataSource;
  private starterDataSource: StarterDecksDataSource;

  constructor(
    githubDataSource = new GithubApiDataSource(),
    starterDataSource = new StarterDecksDataSource()
  ) {
    this.githubDataSource = githubDataSource;
    this.starterDataSource = starterDataSource;
  }

  public async fetchGithubReleases(): Promise<GithubRelease[]> {
    return this.githubDataSource.fetchReleases();
  }

  public async getStarterDecks(): Promise<DeckItem[]> {
    return this.starterDataSource.getStarterDecks();
  }

  public async getAllDeckItems(): Promise<DeckItem[]> {
    const starterDecks = await this.getStarterDecks();
    const releases = await this.fetchGithubReleases();

    const releaseDecks: DeckItem[] = [];

    releases.forEach((release) => {
      release.assets.forEach((asset) => {
        if (asset.name.endsWith('.euy') || asset.name.endsWith('.json')) {
          releaseDecks.push({
            id: `release-${release.id}-${asset.id}`,
            name: this.formatReleaseDeckName(asset.name),
            language: this.guessLanguageFromAsset(asset.name),
            difficulty: 'intermediate',
            cardCount: 20, // default placeholder for remote release asset
            fileSizeFormatted: asset.sizeFormatted,
            description: release.description || `Community release from tag ${release.tag}`,
            downloadUrl: asset.downloadUrl,
            sourceType: 'github_release',
            tag: release.tag,
          });
        }
      });
    });

    return [...starterDecks, ...releaseDecks];
  }

  private formatReleaseDeckName(assetName: string): string {
    return assetName
      .replace(/\.(euy|json)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  private guessLanguageFromAsset(assetName: string): string {
    const lower = assetName.toLowerCase();
    if (lower.includes('sunda') || lower.includes('sun')) return 'id-sun';
    if (lower.includes('japan') || lower.includes('ja')) return 'ja';
    if (lower.includes('span') || lower.includes('es')) return 'es';
    if (lower.includes('french') || lower.includes('fr')) return 'fr';
    if (lower.includes('german') || lower.includes('de')) return 'de';
    if (lower.includes('indo') || lower.includes('id')) return 'id';
    return 'en';
  }
}

