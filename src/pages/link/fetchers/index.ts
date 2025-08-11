// index.ts
import type { ReactNode } from 'react';

import { baekjoonFetcher } from './baekjoon';
import { githubFetcher } from './github';
import { instagramFetcher } from './instagram';
import { modrinthFetcher } from './modrinth';
import { npmFetcher } from './npm';
import { pypiFetcher } from './pypi';
import { solvedacFetcher } from './solvedac';
import { stackoverflowFetcher } from './stackoverflow';
import { velogFetcher } from './velog';

export type LinkService =
  | 'github'
  | 'instagram'
  | 'npm'
  | 'velog'
  | 'pypi'
  | 'modrinth'
  | 'baekjoon'
  | 'solvedac'
  | 'stackoverflow';
export type LinkFetcher = (username: string) => Promise<ReactNode | undefined>;

export const linkFetchers: Record<LinkService, LinkFetcher> = {
  github: githubFetcher,
  instagram: instagramFetcher,
  npm: npmFetcher,
  velog: velogFetcher,
  pypi: pypiFetcher,
  modrinth: modrinthFetcher,
  baekjoon: baekjoonFetcher,
  solvedac: solvedacFetcher,
  stackoverflow: stackoverflowFetcher,
};
