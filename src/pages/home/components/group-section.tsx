import { Button } from "@/components/ui/button";
import * as styles from "@/styles/index.css";
import { Briefcase, ExternalLink, Github } from "lucide-react";

export const GroupSection: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce 플랫폼",
      description:
        "React와 Node.js로 구축한 온라인 쇼핑몰입니다. 결제 시스템과 관리자 패널을 포함합니다.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "태스크 관리 앱",
      description:
        "Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "날씨 대시보드",
      description: "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
      tech: ["React", "TypeScript", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <div className={styles.maxWidthWideContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <Briefcase className="w-8 h-8" />
          그룹
        </h2>
      </div>
      <div className={styles.cardGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectTechList}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.projectTechTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectButtons}>
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
        ))}
      </div>
    </div>
  );
};
