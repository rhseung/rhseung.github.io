import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/utils';

import { TechStack, TechStackCircle } from './tech-stack';

export const TechStackSection: React.FC<{
  techStackCategories: Record<string, TechStack[]>;
  selectedTechStacks: TechStack[];
  onTechStackClick: (techStack: TechStack) => void;
}> = ({ techStackCategories, selectedTechStacks, onTechStackClick }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 justify-center items-center text-center">
          제가 할 수 있는 기술 스택들
        </h2>
        <h3 className="text-sm sm:text-md text-neutral-500 dark:text-neutral-500 justify-center items-center text-center">
          기술 스택을 클릭하여 필터링할 수 있습니다.
        </h3>
      </div>
      <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-8">
        {Object.entries(techStackCategories).map(([category, techList]) => (
          <div key={category} className="flex flex-col gap-4">
            <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-50 text-center">
              {category}
            </h4>
            <div className="flex gap-2 flex-wrap justify-center">
              {techList.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        'cursor-pointer transition-all duration-200',
                        selectedTechStacks.includes(tech)
                          ? 'scale-105'
                          : 'hover:scale-105 opacity-90 hover:opacity-100',
                      )}
                      onClick={() => onTechStackClick(tech)}
                    >
                      <TechStackCircle
                        tech={tech}
                        className={
                          selectedTechStacks.includes(tech)
                            ? 'border-blue-500 border-2'
                            : ''
                        }
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
