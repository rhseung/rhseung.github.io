import { Button } from "@/components/ui/button";
import * as pageStyles from "../styles/project-page.css";
import { IconLink, IconBrandGithub } from "@tabler/icons-react";
import { Badge } from "@/components";

export interface TechStack {
  name: string;
  color: string;
}

export interface ProjectType {
  title: string;
  description: string;
  techStacks: TechStack[];
  links: Record<string, string>;
  image: string;
}

const getTextColor = (backgroundColor: string): string => {
  // Remove # if present
  const hex = backgroundColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance using WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark backgrounds, black for light backgrounds
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

export const ProjectCard: React.FC<{
  project: ProjectType;
  index: number;
}> = ({ project, index }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            {project.techStacks.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                style={{
                  backgroundColor: tech.color,
                  color: getTextColor(tech.color),
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className={pageStyles.buttons}>
            <div className={pageStyles.buttons}>
              {Object.entries(project.links).map(([label, url]) => (
                <Button
                  key={label}
                  size="sm"
                  variant="outline"
                  className="gap-1"
                  onClick={() => handleLinkClick(url)}
                >
                  {url.includes("github.com") ? (
                    <IconBrandGithub size={12} />
                  ) : (
                    <IconLink size={12} />
                  )}
                  <span>{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
