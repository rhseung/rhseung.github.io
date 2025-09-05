import { TechStack, techStacks } from '@/data/tech-stacks';

import { TechStackBadge, TechStackCard } from './tech-stack';

const techStackCategories = {
  'Programming Languages': [
    // Web Languages
    techStacks.TypeScript,
    techStacks.JavaScript,
    techStacks.HTML,
    techStacks.CSS,
    // General Purpose
    techStacks.Python,
    techStacks.Java,
    // Systems Programming
    techStacks.C,
    techStacks.Cpp,
    // Mobile/Modern
    techStacks.Dart,
    techStacks.Kotlin,
  ],
  Frontend: [
    // Core Framework
    techStacks.React,
    techStacks.Nextjs,
    // Styling
    techStacks.TailwindCss,
    techStacks.VanillaExtract,
    techStacks.StyledComponents,
    // Routing
    techStacks.TanstackRouter,
    techStacks.ReactRouter,
    // State Management & API
    techStacks.ReactQuery,
    // Utilities
    techStacks.I18Next,
    techStacks.OpenApiTypeScript,
    // Build Tools
    techStacks.Vite,
    // Mobile
    techStacks.Flutter,
  ],
  'Backend & Database': [
    // Runtime
    techStacks.NodeJs,
    // Frameworks
    techStacks.Nestjs,
    techStacks.Flask,
    // Database & ORM
    techStacks.Prisma,
    techStacks.MySQL,
  ],
  'AI/ML & Data Analysis': [
    // Deep Learning Frameworks
    techStacks.PyTorch,
    techStacks.TensorFlow,
    techStacks.Keras,
    // Machine Learning
    techStacks.ScikitLearn,
    // Computer Vision
    techStacks.OpenCV,
    // Data Processing
    techStacks.NumPy,
    techStacks.Pandas,
    // Visualization
    techStacks.Matplotlib,
    techStacks.Seaborn,
    techStacks.Altair,
    // Development Environment
    techStacks.Jupyter,
  ],
};

export const TechStackSection: React.FC<{
  selectedTechStacks: TechStack[];
  onTechStackClick: (techStack: TechStack) => void;
}> = ({ selectedTechStacks, onTechStackClick }) => {
  return (
    <>
      <div className="flex flex-col gap-4 text-center">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            기술 스택
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            다양한 기술을 활용하여 프로젝트를 개발합니다. 관심 있는 기술을
            클릭해서 관련 프로젝트를 확인해보세요.
          </p>
        </div>

        {selectedTechStacks.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mr-2">
              선택된 기술:
            </span>
            {selectedTechStacks.map((tech) => (
              <div key={tech.name} className="relative group">
                <TechStackBadge techStack={tech} size="sm" className="pr-6" />
                <button
                  onClick={() => onTechStackClick(tech)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full p-0.5 transition-colors opacity-60 hover:opacity-100"
                >
                  <svg
                    className="size-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <button
              onClick={() => selectedTechStacks.forEach(onTechStackClick)}
              className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 underline transition-colors ml-2"
            >
              모두 지우기
            </button>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-sm sm:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="space-y-8">
          {Object.entries(techStackCategories).map(([category, techList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center">
                {category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4">
                {techList.map((tech) => (
                  <div key={tech.name} onClick={() => onTechStackClick(tech)}>
                    <TechStackCard
                      techStack={tech}
                      isSelected={selectedTechStacks.includes(tech)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
