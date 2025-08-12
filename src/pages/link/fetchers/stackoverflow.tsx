import { cn } from '@/utils/cn';

const API_BASE = '/api/stackexchange';

export const stackoverflowFetcher = async (): Promise<
  React.ReactNode | undefined
> => {
  try {
    const res = await fetch(`${API_BASE}/users/20864379?site=stackoverflow`);
    if (!res.ok) return undefined;
    const data = await res.json();
    const user = data.items?.[0];

    if (user) {
      const { reputation, badge_counts } = user;
      return (
        <span className="inline-flex items-center gap-1 font-semibold">
          <span
            className={cn(
              'px-2 py-0.5 rounded-full bg-stackoverflow/15 text-stackoverflow',
              'font-bold text-xs',
            )}
            style={{ letterSpacing: '0.01em' }}
          >
            {reputation.toLocaleString()} rep
          </span>
          <span
            className={cn(
              'px-1.5 py-0.5 rounded-full font-bold',
              'bg-so-gold/15 text-so-gold text-xs',
            )}
            title="Gold badge"
          >
            G: {badge_counts.gold}
          </span>
          <span
            className={cn(
              'px-1.5 py-0.5 rounded-full font-bold',
              'bg-so-silver/15 text-so-silver text-xs',
            )}
            title="Silver badge"
          >
            S: {badge_counts.silver}
          </span>
          <span
            className={cn(
              'px-1.5 py-0.5 rounded-full font-bold',
              'bg-so-bronze/15 text-so-bronze text-xs',
            )}
            title="Bronze badge"
          >
            B: {badge_counts.bronze}
          </span>
        </span>
      );
    }
    return undefined;
  } catch {
    return undefined;
  }
};
