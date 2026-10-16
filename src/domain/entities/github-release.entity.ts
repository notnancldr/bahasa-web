export interface ReleaseAsset {
  id: number;
  name: string;
  downloadUrl: string;
  size: number;
  sizeFormatted: string;
  contentType: string;
  createdAt: string;
}

export interface GithubRelease {
  id: number;
  tag: string;
  name: string;
  description: string;
  publishedAt: string;
  htmlUrl: string;
  isPrerelease: boolean;
  assets: ReleaseAsset[];
}

