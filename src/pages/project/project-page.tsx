import { useState } from 'react';

import { Layout, SectionSeparator } from '@/components';
import { projects } from '@/data/projects';
import { TechStack } from '@/data/tech-stacks';

import { ProjectCard } from './components/project-card';
import { TechStackSection } from './components/tech-stack-section';

export const ProjectPage: React.FC = () => {
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([]);

  const handleTechStackClick = (techStack: TechStack) => {
    setSelectedTechStacks((prev) =>
      prev.includes(techStack)
        ? prev.filter((key) => key !== techStack)
        : [...prev, techStack],
    );
  };

  // 필터링 로직: 선택된 tech stack이 없으면 모든 프로젝트, 있으면 선택된 tech stack을 포함하는 프로젝트만
  const filteredProjects =
    selectedTechStacks.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTechStacks.some((selectedTechStack) =>
            project.techStacks.includes(selectedTechStack),
          ),
        );

  // TODO: https://ui.shadcn.com/docs/components/pagination 이거로 페이지 늘리기

  return (
    <Layout>
      <div className="text-center py-8 sm:py-12 lg:py-16">
        <h1 className="max-w-6xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          프로젝트
        </h1>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
        <TechStackSection
          selectedTechStacks={selectedTechStacks}
          onTechStackClick={handleTechStackClick}
        />
      </div>

      <div>
        <SectionSeparator
          title={
            selectedTechStacks.length > 0
              ? `${filteredProjects.length}개의 필터된 프로젝트`
              : `총 ${projects.length}개의 프로젝트`
          }
          className="mb-8 sm:mb-12 lg:mb-16"
        />
      </div>

      <div className="pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
