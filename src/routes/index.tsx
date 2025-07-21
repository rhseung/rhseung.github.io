import { createFileRoute } from "@tanstack/react-router";
import * as styles from "../styles/index.css";

import { Header } from "@/pages/home/components/header";
import { Footer } from "@/pages/home/components/footer";
import { HeroSection } from "@/pages/home/components/hero-section";
import { AboutSection } from "@/pages/home/components/about-section";
import { SocialSection } from "@/pages/home/components/social-section";
import { ProjectSection } from "@/pages/home/components/project-section";
import { SkillSection } from "@/pages/home/components/skill-section";
import { GroupSection } from "@/pages/home/components/group-section";

export const Route = createFileRoute("/")({
  component: Root,
});

function Root() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.heroSection}>
        <HeroSection />
      </section>
      <section className={styles.sectionAlternate}>
        <AboutSection />
      </section>
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
}
