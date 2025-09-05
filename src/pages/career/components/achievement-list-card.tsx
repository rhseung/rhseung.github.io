import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card className={cn('mt-6', className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};
