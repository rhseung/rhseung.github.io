import { Button } from "@/components/ui/button";
import * as styles from "@/styles/index.css";
import { Download, Github, Mail } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
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
          풀스택 개발자로서 사용자 경험을 중시하는 웹 애플리케이션을 개발합니다.
          React, TypeScript, Node.js를 주로 사용하며 새로운 기술을 배우는 것을
          좋아합니다.
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
  );
};
