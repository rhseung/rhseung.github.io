import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { type TechStack, TechStackBadge } from './tech-stack-badge';

export interface TechStackCategoryCardProps {
  category: string;
  techList: TechStack[];
  selectedTechStacks: TechStack[];
  onTechStackClick: (tech: TechStack) => void;
  onCategoryToggle: (categoryTechs: TechStack[]) => void;
}

export const TechStackCategoryCard: React.FC<TechStackCategoryCardProps> = ({
  category,
  techList,
  selectedTechStacks,
  onTechStackClick,
  onCategoryToggle,
}) => {
  // 텍스트 길이에 따라 row당 배지 개수를 동적으로 결정
  const getOptimalLayout = (techList: TechStack[]) => {
    const rows: TechStack[][] = [];
    let currentIndex = 0;

    while (currentIndex < techList.length) {
      const remaining = techList.slice(currentIndex);

      // 다음 3개 배지의 텍스트 길이를 확인
      const next3 = remaining.slice(0, 3);
      const totalLength = next3.reduce(
        (sum, tech) => sum + tech.name.length,
        0,
      );
      const avgLength = totalLength / next3.length;

      // 평균 길이가 8자 이상이거나, 하나라도 15자 이상이면 2개씩
      const hasLongName = next3.some((tech) => tech.name.length > 15);
      const shouldUse2 = avgLength > 8 || hasLongName;

      if (shouldUse2 || remaining.length === 2) {
        // 2개씩 배치
        rows.push(remaining.slice(0, 2));
        currentIndex += 2;
      } else {
        // 3개씩 배치
        rows.push(remaining.slice(0, 3));
        currentIndex += 3;
      }
    }

    return rows;
  };

  const optimizedRows = getOptimalLayout(techList);

  // 카테고리의 모든 배지가 선택되어 있는지 확인
  const allSelected = techList.every((tech) =>
    selectedTechStacks.includes(tech),
  );
  const someSelected = techList.some((tech) =>
    selectedTechStacks.includes(tech),
  );

  return (
    <div className="flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 transition-all duration-300 hover:shadow-lg h-fit">
      <Button
        variant="ghost"
        onClick={() => onCategoryToggle(techList)}
        className="text-base font-semibold mb-4 h-auto py-1"
      >
        <span className="flex items-center justify-center gap-2">
          {category}
          {someSelected && (
            <Badge variant="default" className="text-xs font-medium">
              {allSelected
                ? '전체'
                : `${techList.filter((tech) => selectedTechStacks.includes(tech)).length}`}
            </Badge>
          )}
        </span>
      </Button>
      <div className="flex flex-col gap-2 flex-grow justify-start">
        {optimizedRows.map((rowTechs, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {rowTechs.map((tech, index) => (
              <TechStackBadge
                key={`${category}-${rowIndex}-${index}`}
                tech={tech}
                size="md"
                selected={selectedTechStacks.includes(tech)}
                className="flex-grow justify-center text-center rounded-md"
                onClick={() => onTechStackClick(tech)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
