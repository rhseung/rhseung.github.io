import { Button } from "@/components/ui/button";
import * as styles from "@/styles/index.css";
import * as projectStyles from "../styles/project-section.css";
import { Briefcase, ExternalLink, Github } from "lucide-react";

export const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: "지글, 지스트를 위한 공지 통합 플랫폼",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "assets/thumbnails/ziggle.png",
    },
    {
      title: "광주과학고등학교를 위한 카톡봇",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "assets/thumbnails/gsa-bot.png",
    },
    {
      title: "지스트의 모든 플랫폼을 총괄하는 계정 시스템, IdP",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "assets/thumbnails/idp.png",
    },
    {
      title: "Contraint 기반 물리엔진 설계, Particles",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "assets/thumbnails/particles.png",
    },
  ];

  return (
    <div className={projectStyles.cardContainer}>
      {projects.map((project, index) => (
        <div key={index} className={projectStyles.card}>
          <div className={projectStyles.cardImage}>
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
          <div className={projectStyles.cardContent}>
            <div className={projectStyles.cardContentTop}>
              <div className={projectStyles.projectTitle}>{project.title}</div>
              <div className={projectStyles.projectDescription}>
                {project.description}
              </div>
            </div>
            <div className={projectStyles.cardContentBottom}>
              <div className={projectStyles.projectTechList}>
                {project.tech.map((tech) => (
                  <span key={tech} className={projectStyles.projectTechTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={projectStyles.projectButtons}>
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
  );
};
