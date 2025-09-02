import * as React from 'react';

import { useTheme } from 'next-themes';

import { cn } from '@/utils';

export interface TechStack {
  name: string;
  color: string;
  darkColor?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const getTextColor = (hexColor: string): string => {
  const hex = hexColor.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#FFFFFF';
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
}

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({
  tech,
  ...props
}) => {
  const Icon = tech.icon;

  return (
    <div
      className="flex items-center gap-2 px-2.5 py-1 border border-border rounded-md text-sm"
      style={{ backgroundColor: tech.color, color: getTextColor(tech.color) }}
      {...props}
    >
      {Icon && <Icon className="size-3" />}
      <span>{tech.name}</span>
    </div>
  );
};
