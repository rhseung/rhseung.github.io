import { styles } from "@/styles";
import { Project } from "./components/project";
import * as projectStyles from "./styles/project.css";
import {
  projectLightTheme,
  projectDarkTheme,
} from "./styles/project.theme.css";
import { useTheme } from "@/hooks";
import { Separator } from "@/components";

export const ProjectPage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(projectLightTheme, projectDarkTheme);

  // TODO: separator가 딱 maxWidth에 맞춰서 양쪽 마진 있게 그려지도록 조정

  return (
    <div className={styles.container}>
      <div className={themeClass}>
        <div className={projectStyles.titleSection}>
          <h1 className={projectStyles.container}>Projects</h1>
        </div>
      </div>
      <Separator />
      <Project />
    </div>
  );
};
