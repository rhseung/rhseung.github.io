import { cn } from '@/utils';

export interface AchievementListProps {
  title: string;
  achievements: React.ReactNode[];
  className?: string;
}

export const AchievementList: React.FC<AchievementListProps> = ({
  title,
  achievements,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 mt-6',
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 flex-shrink-0" />
            <div>{achievement}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
