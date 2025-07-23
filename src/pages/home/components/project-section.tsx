import { Button } from "@/components/ui/button";
import * as styles from "@/styles/index.css";
import * as projectStyles from "../styles/project-section.css";
import { Briefcase, ExternalLink, Github } from "lucide-react";

export const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: "광주과학고등학교를 위한 카톡봇",
      description:
        "Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.",
      tech: ["Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://picsum.photos/id/10/1080/720",
    },
    {
      title: "태스크 관리 앱",
      description:
        "Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://picsum.photos/id/11/1080/720",
    },
    {
      title: "날씨 대시보드",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://picsum.photos/id/12/1080/720",
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
