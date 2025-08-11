import { useEffect, useState } from 'react';

import { ExternalLink } from 'lucide-react';

import { useTheme } from '@/hooks/use-theme';

import { linkFetchers } from '../fetchers';
import type { LinkService } from '../fetchers';

// TODO: @tabler/icons-react로 변경할 것

export interface LinkCardProps {
  title: string;
  username: string;
  url: string;
  icon?: React.ReactNode;
  iconColor?: string;
  extraInfo?: React.ReactNode;
  service?: LinkService;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  title,
  username,
  url,
  icon,
  iconColor,
  extraInfo,
  service,
}) => {
  const [fetchedInfo, setFetchedInfo] = useState<React.ReactNode | undefined>();

  const { getActualTheme } = useTheme();
  const actualTheme = getActualTheme();

  useEffect(() => {
    if (service && !extraInfo) {
      const fetcher = linkFetchers[service];
      if (fetcher) {
        fetcher(username).then(setFetchedInfo);
      }
    }
  }, [service, username, extraInfo]);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 테마에 따른 기본 border 색상
  const defaultBorderColor =
    actualTheme === 'dark'
      ? 'var(--color-neutral-800)'
      : 'var(--color-neutral-200)'; // neutral-200/700

  const extra = extraInfo ?? fetchedInfo;

  return (
    <div
      className="flex gap-4 items-center group bg-white dark:bg-neutral-900 border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{
        borderColor: defaultBorderColor,
        transition: 'all 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="text-2xl"
        style={{
          ...(iconColor ? { color: iconColor } : {}),
        }}
      >
        {icon || <ExternalLink />}
      </div>
      <div className="flex flex-row md:flex-col md:justify-start justify-between items-center md:items-start gap-1 w-full">
        <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {username}
          </div>
          {extra && (
            <>
              <div className="w-0.5 h-0.5 rounded-full bg-neutral-600 dark:bg-neutral-400" />
              <div className="text-sm" style={{ color: iconColor }}>
                {extra}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
