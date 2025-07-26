import { ProjectCard } from "./components/project-card";
import * as pageStyles from "./styles/project-page.css";
import {
  projectPageLightTheme,
  projectPageDarkTheme,
} from "./styles/project-page.theme.css";
import { useTheme } from "@/hooks";
import { Separator } from "@/components";
import { cn } from "@/utils";

export const ProjectPage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(projectPageLightTheme, projectPageDarkTheme);

  // TODO: https://ui.shadcn.com/docs/components/pagination 이거로 페이지 늘리기

  const projects = [
    {
      title: "지글, 지스트를 위한 공지 통합 플랫폼",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Flutter", "Next.js", "Nest.js", "Prisma"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/ziggle.png",
    },
    {
      title: "광주과학고등학교를 위한 카톡봇",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/gsa-bot.png",
    },
    {
      title: "지스트의 통합 계정 시스템, IdP",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Tanstack Router", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/idp.png",
    },
    {
      title: "Constraint 기반 물리엔진 설계, Particles",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/particles.png",
    },
    {
      title: "컴퓨터 비전과 하드웨어를 융합한 탁구 로봇",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/pingpong.png",
    },
    {
      title: "YOLOv3의 레이어 단위 재구현",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/yolo.png",
    },
    {
      title: "자연어 날짜 파싱을 위한 라이브러리, DateTime",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/datetime.png",
    },
    {
      title: "Python의 물리학 실험 단위 계산 라이브러리, siunits",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/siunits.png",
    },
  ];

  return (
    <div className={themeClass}>
      <div className={pageStyles.titleSection}>
        <h1 className={cn(pageStyles.container, pageStyles.pageTitle)}>
          프로젝트
        </h1>
      </div>
      <Separator />
      <div className={pageStyles.section}>
        <div className={pageStyles.container}>
          <div className={pageStyles.cardContainer}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
