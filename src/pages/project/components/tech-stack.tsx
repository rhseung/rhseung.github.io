import * as React from 'react';

import { useTheme } from 'next-themes';

import { TechStack } from '@/data/tech-stacks';
import { cn } from '@/utils';

interface TechStackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  techStack: TechStack;
  isSelected?: boolean;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({
  techStack,
  isSelected = false,
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const Icon = techStack.icon;

  const currentColor =
    resolvedTheme === 'dark'
      ? (techStack.darkColor ?? techStack.color)
      : techStack.color;

  return (
    <div
      className={cn(
        'group relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer',
        'bg-white dark:bg-neutral-900 border-2 border-transparent shadow-sm',
        'hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-800/50',
        'hover:-translate-y-1 active:translate-y-0 active:scale-95',
        isSelected && 'border-2 shadow-lg -translate-y-1 scale-105',
        className,
      )}
      style={{
        borderColor: isSelected ? currentColor : undefined,
        boxShadow: isSelected
          ? `0 10px 25px -3px ${currentColor}20, 0 4px 6px -2px ${currentColor}10`
          : undefined,
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = `${currentColor}50`;
          e.currentTarget.style.boxShadow = `0 10px 25px -3px ${currentColor}15, 0 4px 6px -2px ${currentColor}10`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.boxShadow = '';
        }
      }}
      {...props}
    >
      {/* 선택 상태 표시 */}
      {isSelected && (
        <div
          className="absolute -top-1 -right-1 size-4 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center"
          style={{ backgroundColor: currentColor }}
        >
          <svg
            className="size-2 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* 아이콘 영역 */}
      <div
        className="flex items-center justify-center size-10 rounded-lg transition-all duration-300"
        style={{
          color: currentColor,
          backgroundColor: `${currentColor}25`,
        }}
      >
        {Icon ? (
          <Icon className="size-6" />
        ) : (
          <span className="text-lg font-bold">{techStack.name.charAt(0)}</span>
        )}
      </div>

      {/* 텍스트 */}
      <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center leading-tight">
        {techStack.name}
      </span>

      {/* 호버 효과 */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: currentColor }}
      />
    </div>
  );
};

interface TechStackBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  techStack: TechStack;
  size?: 'sm' | 'md';
}

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({
  techStack,
  size = 'md',
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const Icon = techStack.icon;

  const currentColor =
    resolvedTheme === 'dark'
      ? (techStack.darkColor ?? techStack.color)
      : techStack.color;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-medium transition-all duration-200 hover:scale-105',
        'border rounded-full hover:shadow-md',
        size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm',
        className,
      )}
      style={{
        color: currentColor,
        backgroundColor: `${currentColor}20`,
        borderColor: `${currentColor}40`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${currentColor}30`;
        e.currentTarget.style.boxShadow = `0 4px 12px ${currentColor}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${currentColor}20`;
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'size-3' : 'size-4'} />}
      <span>{techStack.name}</span>
    </div>
  );
};
