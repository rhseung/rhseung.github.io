import * as styles from "@/styles/index.css";
import * as aboutStyles from "../styles/about-section.css";
import { Mail, MapPin, Phone, User } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <div className={styles.maxWidthContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <User className="w-8 h-8" />
          소개
        </h2>
      </div>
      <div className={styles.twoColumnGrid}>
        <div>
          <h3 className={styles.heading3}>기술 스택</h3>
          <div className={aboutStyles.techStack}>
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Vue.js",
              "Node.js",
              "Express",
              "Python",
              "Django",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Git",
            ].map((tech) => (
              <span key={tech} className={aboutStyles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className={styles.heading3}>연락처 정보</h3>
          <div className={aboutStyles.contactInfo}>
            <div className={aboutStyles.contactItem}>
              <Mail className="w-4 h-4" />
              <span>hong@example.com</span>
            </div>
            <div className={aboutStyles.contactItem}>
              <Phone className="w-4 h-4" />
              <span>010-1234-5678</span>
            </div>
            <div className={aboutStyles.contactItem}>
              <MapPin className="w-4 h-4" />
              <span>서울, 대한민국</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
