import { styles } from "@/styles";
import { BannerSection } from "./components/banner-section";
import { ProjectSection } from "./components/project-section";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <BannerSection />
      <ProjectSection />
    </div>
  );
};
