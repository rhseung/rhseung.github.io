// github.ts
// Fetcher for GitHub profile extra info
import { cn } from '@/utils/cn';

export function grassColor(n: number): string {
  if (n === 0) return 'bg-[#ebedf0] dark:bg-[#161b22]';
  if (n <= 1) return 'bg-[#9be9a8] dark:bg-[#0e4429]';
  if (n <= 3) return 'bg-[#40c463] dark:bg-[#006d32]';
  if (n <= 6) return 'bg-[#30a14e] dark:bg-[#26a641]';
  return 'bg-[#216e39] dark:bg-[#39d353]';
}

export const githubFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public`,
    );
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      if (Array.isArray(events)) {
        // Prepare 7-day contribution array (Sun~Sat, today last)
        const days = Array(7).fill(0);
        const now = new Date();
        for (let i = 0; i < 7; i++) {
          const day = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - (6 - i),
          );
          const dayStr = day.toISOString().slice(0, 10);
          // Count all contribution events for this day (PushEvent, PullRequestEvent, IssuesEvent, etc)
          days[i] = events.filter(
            (e: any) => e.created_at.slice(0, 10) === dayStr,
          ).length;
        }
        return (
          <div className="flex items-center gap-0.5">
            {days.map((n, i) => (
              <div
                key={i}
                title={`${n} contribution${n !== 1 ? 's' : ''}`}
                className={cn(
                  'w-4 h-4 rounded-sm border border-neutral-200 dark:border-neutral-800 transition-colors inline-block',
                  grassColor(n),
                  i !== 6 && 'mr-[2px]',
                )}
              />
            ))}
          </div>
        );
      }
    }
    return undefined;
  } catch {
    return undefined;
  }
};
