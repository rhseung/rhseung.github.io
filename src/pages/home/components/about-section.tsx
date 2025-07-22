import * as styles from "@/styles/index.css";
import * as aboutStyles from "../styles/about-section.css";
import { AtSign, School, GraduationCap } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <div className={styles.maxWidthLeftContainer}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.item}>
          <AtSign className={aboutStyles.itemIcon} />
          <span className={aboutStyles.itemText}>rhseungg@gmail.com</span>
        </div>
        <div className={aboutStyles.schoolLinkContainer}>
          <School className={aboutStyles.schoolIcon} />
          <span className={aboutStyles.itemText}>
            <a
              href="https://gsa.gen.hs.kr:453/main/main.php"
              target="_blank"
              rel="noopener noreferrer"
              className={aboutStyles.schoolLink}
            >
              과학영재학교 광주과학고등학교
            </a>{" "}
            39th
          </span>
        </div>
        <div className={aboutStyles.graduateLinkContainer}>
          <GraduationCap className={aboutStyles.graduateIcon} />
          <span className={aboutStyles.itemText}>
            <a
              href="https://ewww.gist.ac.kr/kr/main.html"
              target="_blank"
              rel="noopener noreferrer"
              className={aboutStyles.graduateLink}
            >
              GIST
            </a>{" "}
            '25 도전탐색과정
          </span>
        </div>
      </div>
    </div>
  );
};
