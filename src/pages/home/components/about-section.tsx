import * as aboutStyles from "../styles/about-section.css";
import { AtSign, School, GraduationCap } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.item}>
        <AtSign className={aboutStyles.itemIcon} />
        <span className={aboutStyles.itemText}>rhseungg@gmail.com</span>
      </div>
      <div className={aboutStyles.item}>
        <School className={aboutStyles.itemIcon} />
        <span className={aboutStyles.itemText}>
          <a
            href="https://gsa.gen.hs.kr:453/main/main.php"
            target="_blank"
            rel="noopener noreferrer"
            className={aboutStyles.linkedText}
          >
            과학영재학교 광주과학고등학교
          </a>{" "}
          39기 졸업
        </span>
      </div>
      <div className={aboutStyles.item}>
        <GraduationCap className={aboutStyles.itemIcon} />
        <span className={aboutStyles.itemText}>
          <a
            href="https://ewww.gist.ac.kr/kr/main.html"
            target="_blank"
            rel="noopener noreferrer"
            className={aboutStyles.linkedText}
          >
            GIST
          </a>{" "}
          '25 도전탐색과정 재학 중
        </span>
      </div>
    </div>
  );
};
