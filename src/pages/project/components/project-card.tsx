import { IconBrandGithub, IconLink } from '@tabler/icons-react';

import { Button } from '@/components';
import { Badge } from '@/components';

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

export const ProjectCard: React.FC<{
  title: string;
  description: string;
  techStacks: TechStack[];
  links: Record<string, string>;
  image: string;
}> = ({ title, description, techStacks, links, image }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex gap-12 md:flex-row flex-col">
      <div className="w-full md:w-[500px] bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between min-h-[200px] md:min-h-[200px]">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 leading-tight">
            {title}
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
            {description}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                style={{
                  backgroundColor: tech.color,
                  color: getTextColor(tech.color),
                }}
                className="border border-transparent dark:border-neutral-800"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            {Object.entries(links).map(([label, url]) => (
              <Button
                key={label}
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => handleLinkClick(url)}
              >
                {url.includes('github.com') ? (
                  <IconBrandGithub size={12} />
                ) : (
                  <IconLink size={12} />
                )}
                <span>{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
