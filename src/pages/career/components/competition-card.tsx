import { Badge } from '@/components/ui/badge';

export interface CompetitionCardProps {
  year: string;
  name: string;
  organizer: string;
  category: string;
  result: string;
  logo?: React.ReactNode;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  year,
  name,
  organizer,
  category,
  result,
  logo,
}) => {
  const getResultVariant = (result: string) => {
    switch (result) {
      case '수상':
      case '우수상':
      case '최우수상':
        return 'default';
      case '참가':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getResultStyle = (result: string) => {
    switch (result) {
      case '수상':
      case '우수상':
      case '최우수상':
        return 'bg-primary-500 dark:bg-primary-600 text-white';
      case '참가':
        return 'bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200';
      default:
        return 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600';
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-200 ease-in-out w-fit min-w-[280px] max-w-full hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:-translate-y-0.5 hover:shadow-sm dark:hover:shadow-black/20">
      <div className="flex justify-between items-start gap-6">
        <div className="flex items-center gap-2 flex-1">
          {logo && (
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent border border-neutral-200 dark:border-neutral-600 flex-shrink-0">
              {logo}
            </div>
          )}
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 m-0 flex-1 whitespace-nowrap">
            {name}
          </h3>
        </div>
        <Badge
          variant="outline"
          className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600"
        >
          {year}
        </Badge>
      </div>
      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <div>주최: {organizer}</div>
        <div>부문: {category}</div>
      </div>
      <Badge
        variant={getResultVariant(result)}
        className={getResultStyle(result)}
      >
        {result}
      </Badge>
    </div>
  );
};
