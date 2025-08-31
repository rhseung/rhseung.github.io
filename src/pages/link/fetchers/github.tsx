import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

import { cn } from '@/utils/cn';

const API_BASE = 'https://api.github.com';

interface GitHubContributionResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
}

export const githubFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const today = new Date();
    const lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${lastYear.toISOString()}", to: "${today.toISOString()}") {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const res = await axios.post<GitHubContributionResponse>(
      `${API_BASE}/graphql`,
      { query },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN!}`,
        },
      },
    );

    const total =
      res.data.data.user.contributionsCollection.contributionCalendar
        .totalContributions;

    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 font-semibold',
          'px-2 py-0.5 rounded-full font-bold text-xs bg-github-inverse text-github',
        )}
        style={{ letterSpacing: '0.01em' }}
      >
        {total} Contributions
      </span>
    );
  } catch (err) {
    toast.error('Failed to fetch GitHub contributions', {
      description: (err as AxiosError).message,
    });
  }
};
