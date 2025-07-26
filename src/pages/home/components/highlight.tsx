import { Button } from "@/components/ui/button";
import * as pageStyles from "../styles/home-page.css";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components";

export const Highlight: React.FC = () => {
  const projects = [
    {
      title: "지글, 지스트를 위한 공지 통합 플랫폼",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/ziggle.png",
    },
    {
      title: "광주과학고등학교를 위한 카톡봇",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/gsa-bot.png",
    },
    {
      title: "지스트의 통합 계정 시스템, IdP",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "src/assets/thumbnails/idp.png",
    },
    {
      title: "Contraint 기반 물리엔진 설계, Particles",
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
    <div className={pageStyles.highlightSection}>
      <div className={pageStyles.highlightContainer}>
        <div className={pageStyles.cardContainer}>
          {projects.map((project, index) => (
            <div key={index} className={pageStyles.card}>
              <div className={pageStyles.cardImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={pageStyles.cardContent}>
                <div className={pageStyles.cardContentTop}>
                  <div className={pageStyles.highlightTitle}>
                    {project.title}
                  </div>
                  <div className={pageStyles.highlightDescription}>
                    {project.description}
                  </div>
                </div>
                <div className={pageStyles.cardContentBottom}>
                  <div className={pageStyles.techList}>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className={pageStyles.buttons}>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Github className="w-3 h-3" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
