import * as pageStyles from "./styles/career-page.css";
import {
  careerPageLightTheme,
  careerPageDarkTheme,
} from "./styles/career-page.theme.css";
import { useTheme } from "@/hooks";
import { Separator } from "@/components";
import { cn } from "@/utils";
import { EducationCard } from "./components/education-card";
import { CertificationCard } from "./components/certification-card";
import { CompetitionCard } from "./components/competition-card";
import { IconCertificate, IconTrophy, IconCode } from "@tabler/icons-react";

export const CareerPage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(careerPageLightTheme, careerPageDarkTheme);

  // 학력 데이터
  const educationData = [
    {
      period: "2022.03 - 2025.02",
      institution: "과학영재학교 광주과학고등학교",
      major: "자연과학계열",
      status: "졸업",
      logo: (
        <img
          src="src/assets/logos/gsa.webp"
          width={25}
          alt="과학영재학교 광주과학고등학교 로고"
        />
      ),
    },
    {
      period: "2025.03 - 현재",
      institution: "GIST",
      major: "도전탐색과정",
      status: "재학",
      logo: <img src="src/assets/logos/gist.svg" width={25} alt="GIST 로고" />,
    },
  ];

  // 자격증 데이터
  const certificationsData = [
    {
      date: "2024.06",
      name: "정보처리기능사",
      agency: "한국산업인력공단",
      status: "취득",
      logo: <IconCertificate size={20} />,
    },
    {
      date: "2023.12",
      name: "컴활 1급",
      agency: "대한상공회의소",
      status: "취득",
      logo: <IconCertificate size={20} />,
    },
  ];

  // 대회 참가 데이터
  const competitionsData = [
    {
      year: "2023",
      name: "대한민국 프로그래밍 대회",
      organizer: "한국정보과학회",
      category: "알고리즘 부문",
      result: "참가",
      logo: <IconCode size={20} />,
    },
    {
      year: "2022",
      name: "청소년 SW 창작대회",
      organizer: "과학기술정보통신부",
      category: "웹 개발 부문",
      result: "참가",
      logo: <IconTrophy size={20} />,
    },
  ];

  return (
    <div className={themeClass}>
      <div className={pageStyles.titleSection}>
        <h1 className={cn(pageStyles.container, pageStyles.pageTitle)}>이력</h1>
      </div>
      <Separator />

      <div className={pageStyles.section}>
        <div className={pageStyles.container}>
          {/* 학력 섹션 */}
          <div>
            <h2 className={pageStyles.pageSubTitle}>학력</h2>
            <div className={pageStyles.cardGrid}>
              {educationData.map((edu, index) => (
                <EducationCard
                  key={index}
                  period={edu.period}
                  institution={edu.institution}
                  major={edu.major}
                  status={edu.status}
                  logo={edu.logo}
                />
              ))}
            </div>
            <p className={pageStyles.detailText} style={{ marginTop: "1rem" }}>
              <li>
                광주과학고등학교 1학년 1학기 정보과학 I <b>5등 (교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 1학년 2학기 정보과학 II <b>2등 (교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 1학년 교내경시대회 정보부문{" "}
                <b className={pageStyles.goldText}>금상 (1학년 유일)</b>
              </li>
              <li>
                광주과학고등학교 2학년 2학기 머신러닝과 딥러닝{" "}
                <b className={pageStyles.goldText}>1등 (교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 2학년 2학기 객체지향 프로그래밍{" "}
                <b className={pageStyles.goldText}>1등 (교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 2학년 2학기 프로그래밍과 문제해결{" "}
                <b className={pageStyles.goldText}>1등 (AP, 교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 2학년 교내경시대회 정보부문{" "}
                <b className={pageStyles.goldText}>금상</b>
              </li>
              <li>
                광주과학고등학교 3학년 1학기 자료구조와 알고리즘{" "}
                <b>2등 (교과우수상)</b>
              </li>
              <li>
                광주과학고등학교 3학년 1학기 정보과학 프로젝트{" "}
                <b className={pageStyles.goldText}>1등 (교과우수상)</b>
              </li>
              <br />
              <li>GIST 2025년 입학식 학부생(신입생) 대표</li>
              <li>GIST 2025년 1학기 이공계 성적우수 장학생 해당자</li>
              <li>
                GIST GS1001 미적분학과 응용{" "}
                <b className={pageStyles.goldText}>1등</b> (241점/240점)
              </li>
              <li>
                GIST GS1401 컴퓨터 프로그래밍{" "}
                <b className={pageStyles.goldText}>1등</b> (98점/100점)
              </li>
            </p>
          </div>

          {/* 자격증 섹션 */}
          <div>
            <h2 className={pageStyles.pageSubTitle}>자격증</h2>
            <div className={pageStyles.cardGrid}>
              {certificationsData.map((cert, index) => (
                <CertificationCard
                  key={index}
                  date={cert.date}
                  name={cert.name}
                  agency={cert.agency}
                  status={cert.status}
                  logo={cert.logo}
                />
              ))}
            </div>
            <p className={pageStyles.smallText} style={{ marginTop: "1rem" }}>
              * 추가 자격증 추가 이력은 지속적으로 업데이트됩니다.
            </p>
          </div>

          {/* 대회 참가 섹션 */}
          <div>
            <h2 className={pageStyles.pageSubTitle}>대회 참가</h2>
            <div className={pageStyles.cardGrid}>
              {competitionsData.map((comp, index) => (
                <CompetitionCard
                  key={index}
                  year={comp.year}
                  name={comp.name}
                  organizer={comp.organizer}
                  category={comp.category}
                  result={comp.result}
                  logo={comp.logo}
                />
              ))}
            </div>
            <p className={pageStyles.smallText} style={{ marginTop: "1rem" }}>
              * 추가 대회 참가 이력은 지속적으로 업데이트됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
