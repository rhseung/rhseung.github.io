import { ProjectCard, type ProjectType } from "./components/project-card";
import * as pageStyles from "./styles/project-page.css";
import {
  projectPageLightTheme,
  projectPageDarkTheme,
} from "./styles/project-page.theme.css";
import { useTheme } from "@/hooks";
import { Separator } from "@/components";
import { cn } from "@/utils";

import ziggleBanner from "@/assets/thumbnails/ziggle.png";
import gsaBotBanner from "@/assets/thumbnails/gsa-bot.png";
import idpBanner from "@/assets/thumbnails/idp.png";
import particlesBanner from "@/assets/thumbnails/particles.png";
import pingpongBanner from "@/assets/thumbnails/pingpong.png";
import yoloBanner from "@/assets/thumbnails/yolo.png";
import siunitsBanner from "@/assets/thumbnails/siunits.png";
import datetimeBanner from "@/assets/thumbnails/datetime.png";
import patternBanner from "@/assets/thumbnails/pattern.png";
import glanceBanner from "@/assets/thumbnails/glance.png";
import neatBanner from "@/assets/thumbnails/neat.png";
import rhseungBanner from "@/assets/thumbnails/rhseung.png";
import fliggleBanner from "@/assets/thumbnails/fliggle.png";

const techStacks = {
  Flutter: { name: "Flutter", color: "#135C9C" },
  Nextjs: { name: "Next.js", color: "#000000" },
  Nestjs: { name: "Nest.js", color: "#EA2845" },
  Prisma: { name: "Prisma", color: "#16A394" },
  Figma: { name: "Figma", color: "#FF7237" },
  TailwindCss: { name: "Tailwind CSS", color: "#38BDF8" },
  NodeJs: { name: "Node.js", color: "#3E863D" },
  Yarn: { name: "Yarn", color: "#4F8DB5" },
  Npm: { name: "Npm", color: "#CB3837" },
  Bun: { name: "Bun", color: "#F9F0E1" },
  React: { name: "React", color: "#58C4DC" },
  TypeScript: { name: "TypeScript", color: "#3178C6" },
  TanstackRouter: { name: "Tanstack Router", color: "#58af66" },
  VanillaExtract: { name: "Vanilla Extract", color: "#ee80a5" },
  OpenApiTypeScript: { name: "OpenAPI TypeScript", color: "#3f76f3" },
  Vite: { name: "Vite", color: "#7895f7" },
  Kotlin: { name: "Kotlin", color: "#7F52FF" },
  Java: { name: "Java", color: "#ED8B00" },
  Python: { name: "Python", color: "#3776AB" },
  C: { name: "C", color: "#34475C" },
  Cpp: { name: "C++", color: "#00599C" },
  Dart: { name: "Dart", color: "#2678BC" },
  MySQL: { name: "MySQL", color: "#4479A1" },
  LaTeX: { name: "LaTeX", color: "#008080" },
  HTML: { name: "HTML", color: "#d35836" },
  JavaScript: { name: "JavaScript", color: "#f3e14f" },
  CSS: { name: "CSS", color: "#447ebe" },
  ReactQuery: { name: "React Query", color: "#FF4154" },
  I18Next: { name: "i18next", color: "#26A69A" },
  StyledComponents: { name: "Styled Components", color: "#DB7093" },
  Flask: { name: "Flask", color: "#000000" },
  PyTorch: { name: "PyTorch", color: "#e74a2b" },
  SFML: { name: "SFML", color: "#92d23e" },
  OpenCV: { name: "OpenCV", color: "#050505" },
  PyPI: { name: "PyPI", color: "#3375aa" },
  SWING: { name: "SWING", color: "#e72d2c" },
};

export const ProjectPage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(projectPageLightTheme, projectPageDarkTheme);

  // TODO: https://ui.shadcn.com/docs/components/pagination 이거로 페이지 늘리기
  // TODO: https://ui.shadcn.com/docs/components/select 이거로 필터링 기능 추가 및 테크 스택 자랑 섹션을 위에 달아두기
  // TODO: 각 프로젝트 카드마다 자세히 보기 기능 및 페이지 추가

  const projects: ProjectType[] = [
    {
      title: "지글, 지스트를 위한 공지 통합 플랫폼",
      description:
        "지스트의 모든 공지를 지글을 사용해서 한눈에 보세요. 모집, 행사, 일반 공지 뿐만 아니라 학사공지까지 지글에서 전부 볼 수 있습니다.",
      techStacks: [
        techStacks.Flutter,
        techStacks.Nextjs,
        techStacks.Nestjs,
        techStacks.Prisma,
        techStacks.Figma,
        techStacks.TailwindCss,
        techStacks.Yarn,
      ],
      links: {
        Frontend: "https://github.com/gsainfoteam/ziggle-fe",
        Site: "https://ziggle.gistory.me",
      },
      image: ziggleBanner,
    },
    {
      title: "광주과학고등학교를 위한 카톡봇",
      description:
        "Node.js와 윈도우 서버에 Nox Android Emulator로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다. 카카오톡의 정보를 이벤트 리스너 형식으로 받아와서 처리하며, 명령어 관리 모듈, 자연어 처리 날짜 파싱 모듈, cron 스케줄러를 사용하여 주기적으로 정보를 업데이트합니다.",
      techStacks: [techStacks.NodeJs, techStacks.Npm, techStacks.TypeScript],
      links: {
        GitHub: "https://github.com/GSAStudentCouncil/gsa-bot",
      },
      image: gsaBotBanner,
    },
    {
      title: "지스트의 통합 계정 시스템, IdP",
      description:
        "지스트의 통합 계정 시스템으로, 지스트의 모든 서비스에 로그인할 수 있는 계정을 제공합니다. 또한, OAuth를 지원하여 외부 서비스에서도 사용할 수 있습니다.",
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
        Frontend: "https://github.com/gsainfoteam/idp-fe",
        Site: "https://idp.gistory.me",
      },
      image: idpBanner,
    },
    {
      title: "Constraint 기반 물리엔진 설계, Particles",
      description:
        "2차원 강체에 관련된 물리엔진으로 현실을 컴퓨터에서 시뮬레이션해보세요. 2024년 R&E 프로젝트로, 관련 논문과 이론을 참고하여 SFML과 C++로 구현하였습니다.",
      techStacks: [techStacks.Cpp, techStacks.SFML],
      links: {
        GitHub: "https://github.com/rhseung/particles",
      },
      image: particlesBanner,
    },
    {
      title: "컴퓨터 비전과 하드웨어를 융합한 탁구 로봇",
      description:
        "2025년 AI창의융합경진대회의 탁구로봇 트랙에 참가한 프로젝트로, OpenCV와 C++로 구현하였으며, 탁구공을 인식하고 라켓을 제어하여 탁구를 칠 수 있습니다. 하드웨어는 모델링하여 3D 프린팅으로 제작하였습니다.",
      techStacks: [techStacks.Cpp, techStacks.OpenCV],
      links: {
        GitHub: "https://github.com/studio-void/hinguri-pingpong",
      },
      image: pingpongBanner,
    },
    {
      title: "YOLOv3 재구현하기",
      description:
        "2023년 R&E 프로젝트로, YOLOv3의 레이어를 PyTorch로 재구현하였습니다. GPU가 필요하여 고등학교 내 RTX 그래픽 카드가 달린 리눅스 서버에서 학습하였습니다. 코드가 일부 깃허브에 올리지 못하고 유실되어 완전한 재구현은 아니지만, YOLOv3의 구조를 이해하는 데 도움이 됩니다.",
      techStacks: [techStacks.Python, techStacks.PyTorch, techStacks.OpenCV],
      links: {
        GitHub: "https://github.com/gsa-projects/2023-rne",
      },
      image: yoloBanner,
    },
    {
      title: "Python의 물리학 실험 단위 계산 라이브러리, siunits",
      description:
        "물리학 실험으로 얻은 데이터를 처리할 때 가장 많이 하는 실수이자 번거로운 단위 계산을 도와주는 라이브러리입니다. 단위를 고려한 Symbolic한 계산을 지원하며, 단위 변환과 연산을 쉽게 할 수 있습니다.",
      techStacks: [techStacks.PyPI, techStacks.Python],
      links: {
        GitHub: "https://github.com/rhseung/siunits",
        PyPI: "https://pypi.org/project/rhseung.units/",
      },
      image: siunitsBanner,
    },
    {
      title: "자연어 날짜 파싱을 위한 라이브러리, DateTime",
      description:
        "NLP를 사용하지 않고, 정규표현식과 빌더 패턴을 사용하여 자연어로 입력된 날짜를 파싱하는 라이브러리입니다. 다양한 날짜 형식을 지원하며, 한국어와 영어를 지원합니다. 언어의 패턴을 모듈화하여 정규표현식을 응용하여 꽤 훌륭한 성능을 보여줍니다.",
      techStacks: [techStacks.Npm, techStacks.TypeScript],
      links: {
        GitHub: "https://github.com/essentialib/datetime",
        npm: "https://www.npmjs.com/package/@essentialib/datetime",
      },
      image: datetimeBanner,
    },
    {
      title: "정규표현식을 빌더 패턴으로 생성할 수 있는 라이브러리, Pattern",
      description:
        "정규표현식은 매우 간편하지만 또한 매우 복잡합니다. 이 라이브러리는 빌더 패턴을 사용하여 정규표현식을 생성할 수 있도록 도와줍니다. 복잡한 정규표현식을 쉽게 작성할 수 있습니다.",
      techStacks: [techStacks.Npm, techStacks.TypeScript],
      links: {
        GitHub: "https://github.com/essentialib/pattern",
        npm: "https://www.npmjs.com/package/@essentialib/pattern",
      },
      image: patternBanner,
    },
    {
      title: "마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드, Glance",
      description:
        "마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드입니다. 마인크래프트의 UI를 개선하고, 편리한 기능을 추가합니다.",
      techStacks: [techStacks.Java, techStacks.Kotlin],
      links: {
        GitHub: "https://github.com/rhseung-mods/glance",
        Modrinth: "https://modrinth.com/mod/glance",
      },
      image: glanceBanner,
    },
    {
      title: "NEAT 알고리즘으로 최적화 신경망 구현해보기",
      description:
        "Java의 SPRING 프레임워크를 사용하여 연습 겸 NEAT 알고리즘을 구현한 프로젝트입니다. NEAT 알고리즘을 사용하여 최적화된 신경망을 생성합니다. 아직 미완성인 프로젝트입니다.",
      techStacks: [techStacks.Java, techStacks.SWING],
      links: {
        GitHub: "https://github.com/gsa-projects/artificial-aquarium",
      },
      image: neatBanner,
    },
    {
      title: "이 사이트, rhseung.me",
      description:
        "이 사이트는 제 개인 블로그이자 포트폴리오입니다. 제 개발 경험과 프로젝트를 소개합니다.",
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
        GitHub: "https://github.com/rhseung/rhseung.github.io",
        Site: "https://rhseung.me",
      },
      image: rhseungBanner,
    },
    {
      title: "연습용 SNS 앱 개발 프로젝트, Fliggle",
      description:
        "모바일 프론트엔드 및 백엔드 개발 연습을 위한 SNS 앱입니다. Flutter와 Nest.js를 사용하여 개발하였습니다.",
      techStacks: [
        techStacks.Dart,
        techStacks.Flutter,
        techStacks.Nestjs,
        techStacks.Prisma,
        techStacks.Figma,
      ],
      links: {
        Frontend: "https://github.com/rhseung/toonflix-fe",
        Backend: "https://github.com/rhseung/toonflix-be",
        Swagger: "https://toonflix-be.vercel.app/api/",
      },
      image: fliggleBanner,
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
