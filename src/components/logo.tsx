import React from 'react';

import { cn } from '@/utils/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative py-3',
        isClickable && 'cursor-pointer group',
        className,
      )}
    >
      <span
        className={cn(
          'font-extrabold tracking-[-0.03em] text-neutral-900 dark:text-neutral-50',
          sizeClasses[size],
          isClickable && [
            'transition-colors duration-300',
            'hover:text-neutral-600',
            'dark:hover:text-neutral-400',
          ],
        )}
      >
        Rhseung
      </span>
    </div>
  );
};
