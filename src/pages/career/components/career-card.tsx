import { Badge } from '@/components/ui/badge';

export enum BadgeStatus {
  // 학력 관련
  ENROLLED = '재학',
  GRADUATED = '졸업',

  // 자격증 관련
  ACQUIRED = '취득',
  IN_PROGRESS = '준비 중',

  // 대회 관련
  WINNER = '수상',
  EXCELLENCE = '우수상',
  BEST = '최우수상',
  PARTICIPATED = '참가',

  // 기타
  ACTIVE = '활동 중',
  COMPLETED = '완료',
}

interface BadgeConfig {
  variant: 'default' | 'secondary' | 'outline';
  className: string;
}

const getBadgeConfig = (status: string): BadgeConfig => {
  switch (status) {
    case BadgeStatus.ENROLLED:
    case BadgeStatus.ACQUIRED:
    case BadgeStatus.WINNER:
    case BadgeStatus.EXCELLENCE:
    case BadgeStatus.BEST:
    case BadgeStatus.ACTIVE:
      return {
        variant: 'default',
        className: 'bg-primary-500 dark:bg-primary-600 text-white',
      };

    case BadgeStatus.GRADUATED:
    case BadgeStatus.PARTICIPATED:
    case BadgeStatus.COMPLETED:
      return {
        variant: 'secondary',
        className:
          'bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200',
      };

    case BadgeStatus.IN_PROGRESS:
    default:
      return {
        variant: 'outline',
        className:
          'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600',
      };
  }
};

export interface CareerCardProps {
  title: string;
  logo?: React.ReactNode;
  date: string;
  children: React.ReactNode;
  badges: string[];
}

export const CareerCard: React.FC<CareerCardProps> = ({
  title,
  logo,
  date,
  children,
  badges,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full h-fit">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {logo && (
          <div className="size-8 sm:size-10 flex items-center justify-center rounded-lg bg-transparent border border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            {logo}
          </div>
        )}
        <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-50 m-0 truncate">
          {title}
        </h3>
      </div>

      <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed my-3">
        {children}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => {
            const config = getBadgeConfig(badge);
            return (
              <Badge
                key={index}
                variant={config.variant}
                className={`${config.className} text-xs`}
              >
                {badge}
              </Badge>
            );
          })}
        </div>
        <Badge
          variant="outline"
          className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600 flex-shrink-0 text-xs sm:text-sm whitespace-nowrap"
        >
          {date}
        </Badge>
      </div>
    </div>
  );
};
