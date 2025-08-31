import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

import { cn } from '@/utils/cn';

const API_BASE = '/api/solvedac';

export interface SolvedacResponse {
  handle: string;
  bio: string;
  verified: boolean;
  solvedCount: number;
  voteCount: number;
  class: number;
  classDecoration: string;
  rivalCount: number;
  reverseRivalCount: number;
  tier: number;
  rating: number;
  overRating: number;
  rank: number;
}

const tierName = [
  undefined,
  'Bronze V',
  'Bronze IV',
  'Bronze III',
  'Bronze II',
  'Bronze I',
  'Silver V',
  'Silver IV',
  'Silver III',
  'Silver II',
  'Silver I',
  'Gold V',
  'Gold IV',
  'Gold III',
  'Gold II',
  'Gold I',
  'Platinum V',
  'Platinum IV',
  'Platinum III',
  'Platinum II',
  'Platinum I',
  'Diamond V',
  'Diamond IV',
  'Diamond III',
  'Diamond II',
  'Diamond I',
  'Ruby V',
  'Ruby IV',
  'Ruby III',
  'Ruby II',
  'Ruby I',
  'Master',
];

const tierColor = [
  undefined,
  '#9d4900',
  '#a54f00',
  '#ad5600',
  '#b55d0a',
  '#c67739',
  '#38546e',
  '#3d5a74',
  '#435f7a',
  '#496580',
  '#4e6a86',
  '#d28500',
  '#df8f00',
  '#ec9a00',
  '#f9a518',
  '#ffb028',
  '#00c78b',
  '#00d497',
  '#27e2a4',
  '#3ef0b1',
  '#51fdbd',
  '#009ee5',
  '#00a9f0',
  '#00b4fc',
  '#2bbfff',
  '#41caff',
  '#e0004c',
  '#ea0053',
  '#f5005a',
  '#ff0062',
  '#ff3071',
  '#b300e0',
];

export const solvedacFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const res = await axios.get<SolvedacResponse>(
      `${API_BASE}/user/show?handle=${encodeURIComponent(username)}`,
    );

    const user = res.data;
    if (user) {
      const tier = tierName[user.tier] || 'Unrated';
      const color = tierColor[user.tier] || '#000000';

      return (
        <span
          className={cn(
            'inline-flex items-center gap-1 font-semibold',
            'px-2 py-0.5 rounded-full font-bold text-xs',
          )}
          style={{
            color,
            background: color ? color + '22' : 'rgba(0,0,0,0.07)',
          }}
        >
          {tier}
          <span className="font-normal opacity-85">{user.rating}</span>
        </span>
      );
    }
    return undefined;
  } catch (err) {
    toast.error('Failed to fetch Solvedac data', {
      description: (err as AxiosError).message,
    });
    return undefined;
  }
};
