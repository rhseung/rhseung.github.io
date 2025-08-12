// index.ts
import type { ReactNode } from 'react';

import { baekjoonFetcher } from './baekjoon';
import { githubFetcher } from './github';
import { solvedacFetcher } from './solvedac';
import { stackoverflowFetcher } from './stackoverflow';

export type LinkService = 'github' | 'baekjoon' | 'solvedac' | 'stackoverflow';

export type LinkFetcher = (username: string) => Promise<ReactNode | undefined>;

export const linkFetchers: Record<LinkService, LinkFetcher> = {
  github: githubFetcher,
  baekjoon: baekjoonFetcher,
  solvedac: solvedacFetcher,
  stackoverflow: stackoverflowFetcher,
};
