import * as React from 'react';

import { cn } from '@/utils';

interface SectionSeparatorProps {
  title: string;
  className?: string;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  className,
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-neutral-50 dark:bg-neutral-950 px-6 py-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 whitespace-nowrap">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
