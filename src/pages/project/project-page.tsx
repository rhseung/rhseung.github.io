import { useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';

import datetimeBanner from '@/assets/thumbnails/datetime.png';
import fliggleBanner from '@/assets/thumbnails/fliggle.png';
import glanceBanner from '@/assets/thumbnails/glance.png';
import gsaBotBanner from '@/assets/thumbnails/gsa-bot.png';
import idpBanner from '@/assets/thumbnails/idp.png';
import neatBanner from '@/assets/thumbnails/neat.png';
import particlesBanner from '@/assets/thumbnails/particles.png';
import patternBanner from '@/assets/thumbnails/pattern.png';
import pingpongBanner from '@/assets/thumbnails/pingpong.png';
import rhseungBanner from '@/assets/thumbnails/rhseung.png';
import siunitsBanner from '@/assets/thumbnails/siunits.png';
import yoloBanner from '@/assets/thumbnails/yolo.png';
import { Layout } from '@/components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { ProjectCard } from './components/project-card';
import { type TechStack } from './components/tech-stack-badge';
import { TechStackCategoryCard } from './components/tech-stack-category-card';

interface Project {
  title: string;
  description: string;
  techStacks: TechStack[];
  links: Record<string, string>;
  image: string;
}

const techStacks: Record<string, TechStack> = {
  // Frontend
  React: { name: 'React', color: '#58C4DC' },
  Nextjs: { name: 'Next.js', color: '#000000' },
  TypeScript: { name: 'TypeScript', color: '#3178C6' },
  JavaScript: { name: 'JavaScript', color: '#f3e14f' },
  HTML: { name: 'HTML', color: '#d35836' },
  CSS: { name: 'CSS', color: '#447ebe' },
  TailwindCss: { name: 'Tailwind CSS', color: '#38BDF8' },
  VanillaExtract: { name: 'Vanilla Extract', color: '#ee80a5' },
  StyledComponents: { name: 'Styled Components', color: '#DB7093' },
  TanstackRouter: { name: 'Tanstack Router', color: '#58af66' },
  ReactRouter: { name: 'React Router', color: '#CA4245' },
  ReactQuery: { name: 'React Query', color: '#FF4154' },
  I18Next: { name: 'i18next', color: '#26A69A' },
  OpenApiTypeScript: { name: 'OpenAPI TypeScript', color: '#3f76f3' },
  Vite: { name: 'Vite', color: '#7895f7' },

  // Backend
  NodeJs: { name: 'Node.js', color: '#3E863D' },
  Nestjs: { name: 'Nest.js', color: '#EA2845' },
  Python: { name: 'Python', color: '#3776AB' },
  Flask: { name: 'Flask', color: '#000000' },
  Java: { name: 'Java', color: '#ED8B00' },
  Prisma: { name: 'Prisma', color: '#16A394' },
  MySQL: { name: 'MySQL', color: '#4479A1' },

  // Mobile Frontend
  Flutter: { name: 'Flutter', color: '#135C9C' },
  Dart: { name: 'Dart', color: '#2678BC' },

  // Low-level / Systems
  C: { name: 'C', color: '#34475C' },
  Cpp: { name: 'C++', color: '#00599C' },
  SFML: { name: 'SFML', color: '#92d23e' },

  // Mobile/Desktop UI
  Kotlin: { name: 'Kotlin', color: '#7F52FF' },
  Swing: { name: 'Swing', color: '#e72d2c' },

  // AI/ML & Data
  PyTorch: { name: 'PyTorch', color: '#e74a2b' },
  TensorFlow: { name: 'TensorFlow', color: '#ff6f00' },
  Keras: { name: 'Keras', color: '#d00000' },
  OpenCV: { name: 'OpenCV', color: '#050505' },
  ScikitLearn: { name: 'Scikit-learn', color: '#f89939' },
  NumPy: { name: 'NumPy', color: '#4d77cf' },
  Pandas: { name: 'Pandas', color: '#150458' },
  Matplotlib: { name: 'Matplotlib', color: '#11557c' },
  Seaborn: { name: 'Seaborn', color: '#4c72b0' },
  Altair: { name: 'Altair', color: '#1f77b4' },
  Jupyter: { name: 'Jupyter', color: '#f37626' },

  // Package Managers/Build Tools
  Npm: { name: 'Npm', color: '#CB3837' },
  Yarn: { name: 'Yarn', color: '#4F8DB5' },
  Bun: { name: 'Bun', color: '#F9F0E1' },
  PyPI: { name: 'PyPI', color: '#3375aa' },

  // Design/Documentation
  Figma: { name: 'Figma', color: '#FF7237' },
  LaTeX: { name: 'LaTeX', color: '#008080' },
} as const;

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

const projects: Project[] = [
  // {
  //   title: '지글, 지스트를 위한 공지 통합 플랫폼',
  //   description:
  //     '지스트의 모든 공지를 지글을 사용해서 한눈에 보세요. 모집, 행사, 일반 공지 뿐만 아니라 학사공지까지 지글에서 전부 볼 수 있습니다.',
  //   techStacks: [
  //     techStacks.Flutter,
  //     techStacks.Nextjs,
  //     techStacks.Nestjs,
  //     techStacks.Prisma,
  //     techStacks.Figma,
  //     techStacks.TailwindCss,
  //     techStacks.Yarn,
  //   ],
  //   links: {
  //       Frontend: 'https://github.com/gsainfoteam/ziggle-fe',
  //       Site: 'https://ziggle.gistory.me',
  //     },
  //   image: ziggleBanner,
  // },
  {
    title: '지스트의 통합 계정 시스템, IdP',
    description:
      '지스트의 통합 계정 시스템으로, 지스트의 모든 서비스에 로그인할 수 있는 계정을 제공합니다. 또한, OAuth를 지원하여 외부 서비스에서도 사용할 수 있습니다.',
    techStacks: [
      techStacks.React,
      techStacks.TypeScript,
      techStacks.TanstackRouter,
      techStacks.TailwindCss,
      techStacks.OpenApiTypeScript,
      techStacks.Vite,
      techStacks.I18Next,
      techStacks.ReactQuery,
      techStacks.Bun,
      techStacks.Figma,
    ],
    links: {
      Frontend: 'https://github.com/gsainfoteam/idp-fe',
      Site: 'https://idp.gistory.me',
    },
    image: idpBanner,
  },
  {
    title: '광주과학고등학교를 위한 카톡봇',
    description:
      'Node.js와 윈도우 서버에 Nox Android Emulator로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다. 카카오톡의 정보를 이벤트 리스너 형식으로 받아와서 처리하며, 명령어 관리 모듈, 자연어 처리 날짜 파싱 모듈, cron 스케줄러를 사용하여 주기적으로 정보를 업데이트합니다.',
    techStacks: [
      techStacks.NodeJs,
      techStacks.Npm,
      techStacks.TypeScript,
      techStacks.JavaScript,
    ],
    links: {
      GitHub: 'https://github.com/GSAStudentCouncil/gsa-bot',
    },
    image: gsaBotBanner,
  },
  {
    title: 'Constraint 기반 물리엔진 설계, Particles',
    description:
      '2차원 강체에 관련된 물리엔진으로 현실을 컴퓨터에서 시뮬레이션해보세요. 2024년 R&E 프로젝트로, 관련 논문과 이론을 참고하여 SFML과 C++로 구현하였습니다.',
    techStacks: [techStacks.Cpp, techStacks.SFML],
    links: {
      GitHub: 'https://github.com/rhseung/particles',
    },
    image: particlesBanner,
  },
  {
    title: '컴퓨터 비전과 하드웨어를 융합한 탁구 로봇',
    description:
      '2025년 AI창의융합경진대회의 탁구로봇 트랙에 참가한 프로젝트로, OpenCV와 C++로 구현하였으며, 탁구공을 인식하고 라켓을 제어하여 탁구를 칠 수 있습니다. 하드웨어는 모델링하여 3D 프린팅으로 제작하였습니다.',
    techStacks: [techStacks.Cpp, techStacks.OpenCV],
    links: {
      GitHub: 'https://github.com/studio-void/hinguri-pingpong',
    },
    image: pingpongBanner,
  },
  {
    title: 'YOLOv3 재구현하기',
    description:
      '2023년 R&E 프로젝트로, YOLOv3의 레이어를 PyTorch로 재구현하였습니다. GPU가 필요하여 고등학교 내 RTX 그래픽 카드가 달린 리눅스 서버에서 학습하였습니다. 코드가 일부 깃허브에 올리지 못하고 유실되어 완전한 재구현은 아니지만, YOLOv3의 구조를 이해하는 데 도움이 됩니다.',
    techStacks: [techStacks.Python, techStacks.PyTorch, techStacks.OpenCV],
    links: {
      GitHub: 'https://github.com/gsa-projects/2023-rne',
    },
    image: yoloBanner,
  },
  {
    title: 'Python의 물리학 실험 단위 계산 라이브러리, siunits',
    description:
      '물리학 실험으로 얻은 데이터를 처리할 때 가장 많이 하는 실수이자 번거로운 단위 계산을 도와주는 라이브러리입니다. 단위를 고려한 Symbolic한 계산을 지원하며, 단위 변환과 연산을 쉽게 할 수 있습니다.',
    techStacks: [techStacks.PyPI, techStacks.Python],
    links: {
      GitHub: 'https://github.com/rhseung/siunits',
      PyPI: 'https://pypi.org/project/rhseung.units/',
    },
    image: siunitsBanner,
  },
  {
    title: '자연어 날짜 파싱을 위한 라이브러리, DateTime',
    description:
      'NLP를 사용하지 않고, 정규표현식과 빌더 패턴을 사용하여 자연어로 입력된 날짜를 파싱하는 라이브러리입니다. 다양한 날짜 형식을 지원하며, 한국어와 영어를 지원합니다. 언어의 패턴을 모듈화하여 정규표현식을 응용하여 꽤 훌륭한 성능을 보여줍니다.',
    techStacks: [techStacks.Npm, techStacks.TypeScript],
    links: {
      GitHub: 'https://github.com/essentialib/datetime',
      npm: 'https://www.npmjs.com/package/@essentialib/datetime',
    },
    image: datetimeBanner,
  },
  {
    title: '정규표현식을 빌더 패턴으로 생성할 수 있는 라이브러리, Pattern',
    description:
      '정규표현식은 매우 간편하지만 또한 매우 복잡합니다. 이 라이브러리는 빌더 패턴을 사용하여 정규표현식을 생성할 수 있도록 도와줍니다. 복잡한 정규표현식을 쉽게 작성할 수 있습니다.',
    techStacks: [techStacks.Npm, techStacks.TypeScript],
    links: {
      GitHub: 'https://github.com/essentialib/pattern',
      npm: 'https://www.npmjs.com/package/@essentialib/pattern',
    },
    image: patternBanner,
  },
  {
    title: '마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드, Glance',
    description:
      '마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드입니다. 마인크래프트의 UI를 개선하고, 편리한 기능을 추가합니다.',
    techStacks: [techStacks.Java, techStacks.Kotlin],
    links: {
      GitHub: 'https://github.com/rhseung-mods/glance',
      Modrinth: 'https://modrinth.com/mod/glance',
    },
    image: glanceBanner,
  },
  {
    title: 'NEAT 알고리즘으로 최적화 신경망 구현해보기',
    description:
      'Java의 SPRING 프레임워크를 사용하여 연습 겸 NEAT 알고리즘을 구현한 프로젝트입니다. NEAT 알고리즘을 사용하여 최적화된 신경망을 생성합니다. 아직 미완성인 프로젝트입니다.',
    techStacks: [techStacks.Java, techStacks.Swing],
    links: {
      GitHub: 'https://github.com/gsa-projects/artificial-aquarium',
    },
    image: neatBanner,
  },
  {
    title: '이 사이트, rhseung.me',
    description:
      '이 사이트는 제 개인 블로그이자 포트폴리오입니다. 제 개발 경험과 프로젝트를 소개합니다.',
    techStacks: [
      techStacks.React,
      techStacks.TypeScript,
      techStacks.TanstackRouter,
      techStacks.TailwindCss,
      techStacks.VanillaExtract,
      techStacks.Bun,
      techStacks.Vite,
    ],
    links: {
      GitHub: 'https://github.com/rhseung/rhseung.github.io',
      Site: 'https://rhseung.me',
    },
    image: rhseungBanner,
  },
  {
    title: '연습용 SNS 앱 개발 프로젝트, Fliggle',
    description:
      '모바일 프론트엔드 및 백엔드 개발 연습을 위한 SNS 앱입니다. Flutter와 Nest.js를 사용하여 개발하였습니다.',
    techStacks: [
      techStacks.Dart,
      techStacks.Flutter,
      techStacks.Nestjs,
      techStacks.Prisma,
      techStacks.Figma,
    ],
    links: {
      Frontend: 'https://github.com/rhseung/toonflix-fe',
      Backend: 'https://github.com/rhseung/toonflix-be',
      Swagger: 'https://toonflix-be.vercel.app/api/',
    },
    image: fliggleBanner,
  },
];

export const ProjectPage: React.FC = () => {
  // TODO: https://ui.shadcn.com/docs/components/pagination 이거로 페이지 늘리기
  // TODO: https://ui.shadcn.com/docs/components/select 이거로 필터링 기능 추가 및 테크 스택 자랑 섹션을 위에 달아두기
  // TODO: 각 프로젝트 카드마다 자세히 보기 기능 및 페이지 추가

  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([]);

  const handleTechStackClick = (techStack: TechStack) => {
    setSelectedTechStacks((prev) =>
      prev.includes(techStack)
        ? prev.filter((key) => key !== techStack)
        : [...prev, techStack],
    );
  };

  const handleCategoryToggle = (categoryTechs: TechStack[]) => {
    // 카테고리의 모든 배지가 선택되어 있는지 확인
    const allSelected = categoryTechs.every((tech) =>
      selectedTechStacks.includes(tech),
    );

    if (allSelected) {
      // 모두 선택되어 있으면 모두 해제
      setSelectedTechStacks((prev) =>
        prev.filter((tech) => !categoryTechs.includes(tech)),
      );
    } else {
      // 일부 또는 전부 해제되어 있으면 모두 선택
      setSelectedTechStacks((prev) => {
        const newSet = new Set([...prev, ...categoryTechs]);
        return Array.from(newSet);
      });
    }
  };

  const categorizedTechStacks = new Set(
    Object.values(techStackCategories).flat(),
  );

  const miscTechStacks = Object.values(techStacks).filter(
    (tech) => !categorizedTechStacks.has(tech),
  );

  const finalTechStackCategories = {
    ...techStackCategories,
    ...(miscTechStacks.length > 0 && { Misc: miscTechStacks }),
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

  return (
    <Layout>
      <div className="text-center py-8 sm:py-12 lg:py-16">
        <h1 className="max-w-7xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          프로젝트
        </h1>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 justify-center items-center text-center">
            제가 할 수 있는 기술 스택들
          </h2>
          <h3 className="text-sm sm:text-md text-neutral-500 dark:text-neutral-500 justify-center items-center text-center">
            기술 스택을 클릭하여 필터링할 수 있습니다.
          </h3>
        </div>
        <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          {/* 모든 화면 크기에서 Carousel 레이아웃 사용 */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Object.entries(finalTechStackCategories).map(
                ([category, techList]) => (
                  <CarouselItem
                    key={category}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <TechStackCategoryCard
                      category={category}
                      techList={techList}
                      selectedTechStacks={selectedTechStacks}
                      onTechStackClick={handleTechStackClick}
                      onCategoryToggle={handleCategoryToggle}
                    />
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStacks={project.techStacks}
                links={project.links}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
