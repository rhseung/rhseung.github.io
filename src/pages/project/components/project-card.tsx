import { Link } from '@tanstack/react-router';

import { Button } from '@/components';
import { Project } from '@/data/projects';

import { getLinkIcon } from '../project-detail-page';
import { TechStackBadge } from './tech-stack';

export const ProjectCard: React.FC<{
  project: Project;
}> = ({ project }) => {
  const { id, title, description, techStacks, links, image } = project;

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = () => {
    // 프로젝트 상세 페이지로 이동하기 전에 스크롤 위치 저장
    sessionStorage.setItem('projectPageScrollPosition', window.scrollY.toString());
  };

  return (
    <Link to="/project/$id" params={{ id }} className="block" onClick={handleCardClick}>
      <div className="w-full flex gap-6 sm:gap-8 lg:gap-12 md:flex-row flex-col cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/10 dark:hover:shadow-black/20 rounded-2xl p-6 -m-6 hover:-translate-y-1 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30">
        <div className="w-full md:w-[400px] lg:w-[500px] border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg group-hover:shadow-neutral-900/5 dark:group-hover:shadow-black/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between min-h-[200px] md:min-h-[200px]">
          <div className="flex flex-col">
            <div className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </div>
            <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              {description}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {techStacks.map((tech) => (
                <TechStackBadge key={tech.name} techStack={tech} size="sm" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {Object.entries(links).map(([label, url]) => (
                <Button
                  key={label}
                  size="sm"
                  variant="outline"
                  className="gap-1"
                  onClick={(e) => handleLinkClick(e, url)}
                >
                  {getLinkIcon(label)}
                  <span className="text-xs sm:text-sm">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
