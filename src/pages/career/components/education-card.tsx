import { Badge } from '@/components/ui/badge';

export interface EducationCardProps {
  period: string;
  institution: string;
  major: string;
  status: string;
  logo?: React.ReactNode;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  period,
  institution,
  major,
  status,
  logo,
}) => {
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
            {institution}
          </h3>
        </div>
        <Badge
          variant="outline"
          className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-600"
        >
          {period}
        </Badge>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 m-0 leading-relaxed">
        {major}
      </p>
      <Badge
        variant={status === '재학' ? 'default' : 'secondary'}
        className={
          status === '재학'
            ? 'bg-primary-500 dark:bg-primary-600 text-white'
            : 'bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200'
        }
      >
        {status}
      </Badge>
    </div>
  );
};
