import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Download,
  MapPin,
  Calendar,
  Phone,
} from "lucide-react";

import { ThemeToggle } from "../components/theme-toggle";
import { Button } from "../components/ui/button";
import * as styles from "../styles/index.css";

export const Route = createFileRoute("/")({
  component: Root,
});

function Root() {
  return (
    <div className={styles.container}>
      {/* Header with Theme Toggle */}
      <header className={styles.header}>
        <div className={styles.maxWidthContainer}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Portfolio</h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.maxWidthContainer}>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt="Profile"
              className={styles.profileImage}
            />
            <h1 className={styles.heroTitle}>
              안녕하세요, <span className={styles.textPrimary}>개발자</span>{" "}
              홍길동입니다.
            </h1>
            <p className={styles.heroDescription}>
              풀스택 개발자로서 사용자 경험을 중시하는 웹 애플리케이션을
              개발합니다. React, TypeScript, Node.js를 주로 사용하며 새로운
              기술을 배우는 것을 좋아합니다.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <Button className="gap-2">
              <Mail className="w-4 h-4" />
              연락하기
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              이력서 다운로드
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.sectionAlternate}>
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
              <div className={styles.techStack}>
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
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className={styles.heading3}>연락처 정보</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail className="w-4 h-4" />
                  <span>hong@example.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone className="w-4 h-4" />
                  <span>010-1234-5678</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin className="w-4 h-4" />
                  <span>서울, 대한민국</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.maxWidthWideContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <Briefcase className="w-8 h-8" />
              프로젝트
            </h2>
          </div>
          <div className={styles.cardGrid}>
            {[
              {
                title: "E-Commerce 플랫폼",
                description:
                  "React와 Node.js로 구축한 온라인 쇼핑몰입니다. 결제 시스템과 관리자 패널을 포함합니다.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
              {
                title: "태스크 관리 앱",
                description:
                  "Vue.js와 Firebase를 사용한 실시간 협업 태스크 관리 애플리케이션입니다.",
                tech: ["Vue.js", "Firebase", "Vuetify"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
              {
                title: "날씨 대시보드",
                description:
                  "OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.",
                tech: ["React", "TypeScript", "Chart.js"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
            ].map((project, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTechList}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.projectTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectButtons}>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Github className="w-3 h-3" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.sectionAlternate}>
        <div className={styles.maxWidthContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <Code className="w-8 h-8" />
              경력
            </h2>
          </div>
          <div className={styles.experienceList}>
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
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceDate}>
                  <Calendar className="w-4 h-4" />
                  <span className={styles.experienceDateText}>
                    {exp.period}
                  </span>
                </div>
                <h3 className={styles.experiencePosition}>{exp.position}</h3>
                <h4 className={styles.experienceCompany}>{exp.company}</h4>
                <p className={styles.experienceDescription}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.maxWidthContainer}>
          <p className={styles.footerText}>© 2024 홍길동. 모든 권리 보유.</p>
          <div className={styles.socialLinks}>
            <Button variant="ghost" size="icon">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
