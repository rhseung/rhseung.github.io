import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/utils';

export interface TechStack {
  name: string;
  color: string;
}

const getTextColor = (backgroundColor: string): string => {
  // Remove # if present
  const hex = backgroundColor.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance using WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark backgrounds, black for light backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

export interface TechStackBadgeProps
  extends Omit<React.ComponentProps<typeof Badge>, 'variant' | 'style'>,
    VariantProps<typeof badgeVariants> {
  tech: TechStack;
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
}

const TechStackBadge: React.FC<TechStackBadgeProps> = ({
  tech,
  size = 'md',
  selected = false,
  className,
  ...props
}) => {
  const textColor = getTextColor(tech.color);

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <Badge
      variant="default"
      className={cn(
        'shadow-xs transition-all duration-200 cursor-pointer',
        'hover:shadow-md hover:brightness-110',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
        selected && [
          'ring-2',
          'ring-neutral-800 dark:ring-neutral-200',
          'shadow-md',
          'brightness-110',
        ],
        sizeClasses[size],
        className,
      )}
      style={{
        backgroundColor: tech.color,
        color: textColor,
      }}
      {...props}
    >
      {tech.name}
    </Badge>
  );
};

export { TechStackBadge };
