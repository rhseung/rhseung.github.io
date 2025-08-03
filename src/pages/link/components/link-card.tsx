import { ExternalLink } from 'lucide-react';

import { useTheme } from '@/hooks/use-theme';

// TODO: @tabler/icons-react로 변경할 것

export interface LinkCardProps {
  title: string;
  username: string;
  url: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  title,
  username,
  url,
  icon,
  iconColor,
}) => {
  const { getActualTheme } = useTheme();
  const actualTheme = getActualTheme();

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 테마에 따른 기본 border 색상
  const defaultBorderColor =
    actualTheme === 'dark'
      ? 'var(--color-neutral-800)'
      : 'var(--color-neutral-200)'; // neutral-200/700

  return (
    <div
      className="flex flex-col gap-3 group bg-white dark:bg-neutral-900 border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{
        borderColor: defaultBorderColor,
        transition: 'all 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (iconColor) {
          e.currentTarget.style.borderColor = iconColor;
          e.currentTarget.style.boxShadow = `0 10px 15px -3px ${iconColor}40, 0 4px 6px -4px ${iconColor}60, inset 0 0 0 1px ${iconColor}`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = defaultBorderColor;
        e.currentTarget.style.boxShadow = '';
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
      <div className="flex flex-col gap-1">
        <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {username}
        </div>
      </div>
    </div>
  );
};
