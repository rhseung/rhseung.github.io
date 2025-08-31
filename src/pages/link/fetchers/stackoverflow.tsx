import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

import { cn } from '@/utils/cn';

const API_BASE = '/api/stackexchange';

interface StackOverflowResponse {
  items: {
    reputation: number;
  }[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export const stackoverflowFetcher = async (): Promise<
  React.ReactNode | undefined
> => {
  try {
    const res = await axios.get<StackOverflowResponse>(
      `${API_BASE}/users/20864379?site=stackoverflow`,
    );
    if (!res.data) return undefined;

    const reputation = res.data.items[0]?.reputation;
    if (reputation) {
      return (
        <span
          className={cn(
            'inline-flex items-center gap-1 font-semibold',
            'px-2 py-0.5 rounded-full bg-stackoverflow/15 text-stackoverflow',
            'font-bold text-xs',
          )}
          style={{ letterSpacing: '0.01em' }}
        >
          {reputation.toLocaleString()} Reputations
        </span>
      );
    }
  } catch (err) {
    toast.error('Failed to fetch StackOverflow data', {
      description: (err as AxiosError).message,
    });
  }
};
