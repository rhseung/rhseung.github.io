import * as styles from "@/styles/index.css";
import { Header } from "./components/header";
import { BannerSection } from "./components/banner-section";
import { ProjectSection } from "./components/project-section";
import { Footer } from "./components/footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.sectionFullHeight}>
          <div className={styles.maxWidthWideContainer}>
            <BannerSection />
          </div>
        </section>
        <section className={styles.sectionAlternate}>
          <div className={styles.maxWidthWideContainer}>
            <ProjectSection />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
