import { GithubRelease, ReleaseAsset } from '../../domain/entities/github-release.entity';

interface GithubApiAssetDto {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
  created_at: string;
}

interface GithubApiReleaseDto {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  assets: GithubApiAssetDto[];
}

export class GithubApiDataSource {
  private repo: string;

  constructor(repo = 'notnancldr/bahasa-flutter') {
    this.repo = repo;
  }

  public async fetchReleases(): Promise<GithubRelease[]> {
    try {
      const response = await fetch(`https://api.github.com/repos/${this.repo}/releases`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        // May be 404 if no releases yet or rate-limited
        return [];
      }

      const rawReleases: GithubApiReleaseDto[] = await response.json();

      return rawReleases.map((release) => {
        const assets: ReleaseAsset[] = release.assets.map((asset) => ({
          id: asset.id,
          name: asset.name,
          downloadUrl: asset.browser_download_url,
          size: asset.size,
          sizeFormatted: this.formatBytes(asset.size),
          contentType: asset.content_type,
          createdAt: asset.created_at,
        }));

        return {
          id: release.id,
          tag: release.tag_name,
          name: release.name || release.tag_name,
          description: release.body || '',
          publishedAt: release.published_at,
          htmlUrl: release.html_url,
          isPrerelease: release.prerelease,
          assets,
        };
      });
    } catch {
      // Network unreachable / offline mode: return empty array gracefully
      return [];
    }
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}

