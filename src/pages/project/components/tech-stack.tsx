import * as React from 'react';

import { useTheme } from 'next-themes';

import { cn } from '@/utils';

export interface TechStack {
  name: string;
  color: string;
  darkColor?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface TechStackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tech: TechStack;
  isSelected?: boolean;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({
  tech,
  isSelected = false,
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const Icon = tech.icon;

  const currentColor =
    resolvedTheme === 'dark' ? (tech.darkColor ?? tech.color) : tech.color;

  return (
    <div
      className={cn(
        'group relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer',
        'bg-white dark:bg-neutral-900 border-2 border-transparent',
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
          backgroundColor: `${currentColor}15`,
        }}
      >
        {Icon ? (
          <Icon className="size-6" />
        ) : (
          <span className="text-lg font-bold">{tech.name.charAt(0)}</span>
        )}
      </div>

      {/* 텍스트 */}
      <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center leading-tight">
        {tech.name}
      </span>

      {/* 호버 효과 */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ backgroundColor: currentColor }}
      />
    </div>
  );
};

interface TechStackCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  tech: TechStack;
  size?: 'sm' | 'md' | 'lg';
}

export const TechStackCircle: React.FC<TechStackCircleProps> = ({
  tech,
  size = 'lg',
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const Icon = tech.icon;

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full shrink-0 size-16 bg-background border border-border',
        className,
      )}
      style={{
        color:
          resolvedTheme === 'dark'
            ? (tech.darkColor ?? tech.color)
            : tech.color,
      }}
      {...props}
    >
      {Icon ? (
        <Icon className="size-8" />
      ) : (
        <span className="text-2xl">{tech.name.charAt(0)}</span>
      )}
    </div>
  );
};

interface TechStackBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tech: TechStack;
  size?: 'sm' | 'md';
}

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({
  tech,
  size = 'md',
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const Icon = tech.icon;

  const currentColor =
    resolvedTheme === 'dark' ? (tech.darkColor ?? tech.color) : tech.color;

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
        backgroundColor: `${currentColor}15`,
        borderColor: `${currentColor}30`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${currentColor}25`;
        e.currentTarget.style.boxShadow = `0 4px 12px ${currentColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${currentColor}15`;
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'size-3' : 'size-4'} />}
      <span>{tech.name}</span>
    </div>
  );
};
