import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

import { cn } from '@/utils';

import { SolvedacResponse } from './solvedac';

const API_BASE = '/api/solvedac';

export const baekjoonFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const res = await axios.get<SolvedacResponse>(
      `${API_BASE}/user/show?handle=${encodeURIComponent(username)}`,
    );

    const { solvedCount } = res.data;
    if (solvedCount) {
      return (
        <span
          className={cn(
            'inline-flex items-center gap-1 font-semibold',
            'px-2 py-0.5 rounded-full font-bold text-xs',
            'text-baekjoon bg-baekjoon/15',
          )}
        >
          {solvedCount} Solved
        </span>
      );
    }
  } catch (err) {
    toast.error('Failed to fetch Baekjoon data', {
      description: (err as AxiosError).message,
    });
  }
};
