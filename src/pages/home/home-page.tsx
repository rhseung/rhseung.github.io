import * as styles from "@/styles/index.css";
import { Header } from "./components/header";
import { BannerSection } from "./components/banner-section";
import { ProjectSection } from "./components/project-section";
import { Footer } from "./components/footer";
import { primitiveTheme } from "@/styles/index.theme.css";

export const HomePage: React.FC = () => {
  return (
    <div className={primitiveTheme}>
      <Header />
      <div className={styles.container}>
        <BannerSection />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  );
};
