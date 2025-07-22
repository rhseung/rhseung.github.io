import * as styles from "@/styles/index.css";
import * as skillStyles from "../styles/skill-section.css";
import { Calendar, Code } from "lucide-react";

export const SkillSection: React.FC = () => {
  return (
    <div className={styles.maxWidthContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <Code className="w-8 h-8" />
          기술 스택
        </h2>
      </div>
      <div className={skillStyles.experienceList}>
        {[
          {
            company: "테크 스타트업 A",
            position: "시니어 프론트엔드 개발자",
            period: "2022.03 - 현재",
            description:
              "React 기반 웹 애플리케이션 개발 및 팀 리딩을 담당했습니다.",
          },
          {
            company: "소프트웨어 회사 B",
            position: "풀스택 개발자",
            period: "2020.01 - 2022.02",
            description:
              "Node.js와 React를 사용한 웹 서비스 개발을 담당했습니다.",
          },
          {
            company: "웹 에이전시 C",
            position: "주니어 개발자",
            period: "2018.06 - 2019.12",
            description:
              "다양한 클라이언트의 웹사이트 개발 프로젝트에 참여했습니다.",
          },
        ].map((exp, index) => (
          <div key={index} className={skillStyles.experienceItem}>
            <div className={skillStyles.experienceDate}>
              <Calendar className="w-4 h-4" />
              <span className={skillStyles.experienceDateText}>
                {exp.period}
              </span>
            </div>
            <h3 className={skillStyles.experiencePosition}>{exp.position}</h3>
            <h4 className={skillStyles.experienceCompany}>{exp.company}</h4>
            <p className={skillStyles.experienceDescription}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
