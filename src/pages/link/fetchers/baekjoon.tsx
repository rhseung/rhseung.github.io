import { cn } from '@/utils';

const API_BASE = '/api/solvedac';

export const baekjoonFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const res = await fetch(
      `${API_BASE}/user/show?handle=${encodeURIComponent(username)}`,
    );
    if (!res.ok) return undefined;
    const user = await res.json();

    if (user) {
      const solvedCount = user.solvedCount;
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
    return undefined;
  } catch {
    return undefined;
  }
};
