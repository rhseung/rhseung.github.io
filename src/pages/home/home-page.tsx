import * as styles from "@/styles/index.css";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { GroupSection } from "./components/group-section";
import { SkillSection } from "./components/skill-section";
import { SocialSection } from "./components/social-section";
import { ProjectSection } from "./components/project-section";
import { Footer } from "./components/footer";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.maxWidthContainer}>
        <section className={styles.section}>
          <HeroSection />
          <AboutSection />
        </section>
      </div>
      <section className={styles.section}>
        <GroupSection />
      </section>
      <section className={styles.sectionAlternate}>
        <SkillSection />
      </section>
      <section className={styles.section}>
        <SocialSection />
      </section>
      <section className={styles.sectionAlternate}>
        <ProjectSection />
      </section>
      <Footer />
    </div>
  );
};
