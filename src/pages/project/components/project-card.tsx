import { IconBrandGithub, IconLink } from '@tabler/icons-react';

import { Button } from '@/components';
import { type TechStack, TechStackBadge } from '@/pages/project';

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
      <div className="w-full md:w-[500px] border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 overflow-hidden rounded-lg">
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
              <TechStackBadge key={tech.name} tech={tech} size="sm" />
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
