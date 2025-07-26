import { Button } from "@/components/ui/button";
import * as pageStyles from "../styles/project-page.css";
import { IconLink, IconBrandGithub } from "@tabler/icons-react";
import { Badge } from "@/components";

export interface ProjectType {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export const ProjectCard: React.FC<{
  project: ProjectType;
  index: number;
}> = ({ project, index }) => {
  return (
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
          <div className={pageStyles.projectTitle}>{project.title}</div>
          <div className={pageStyles.projectDesc}>{project.description}</div>
        </div>
        <div className={pageStyles.cardContentBottom}>
          <div className={pageStyles.techList}>
            {/* TODO: Badge 색을 언어별로 매핑해서 변경 */}
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className={pageStyles.buttons}>
            <Button size="sm" variant="outline" className="gap-1">
              <IconBrandGithub size={12} />
              GitHub
            </Button>
            <Button size="sm" variant="outline" className="gap-1">
              <IconLink size={12} />
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
