import * as styles from "@/styles/index.css";
import * as heroStyles from "../styles/hero-section.css";

export const HeroSection: React.FC = () => {
  return (
    <div className={styles.maxWidthLeftContainer}>
      <img
        src="assets/profile.png"
        alt="Profile"
        className={heroStyles.profileImage}
      />
      <span className={heroStyles.heroTitle}>
        안녕하세요, 개발자 <span className={styles.textPrimary}>류현승</span>
        입니다.{" "}
      </span>
      <span className={heroStyles.heroDescription}>
        다양한 분야에 몰두해 관심을 가지고, 새로운 기술과 트렌드를 거리낌 없이
        배우는 것을 좋아합니다. 제가 만든 애플리케이션을 사용하는 사람들에게
        긍정적인 영향을 주고자 노력합니다.
      </span>
    </div>
  );
};
