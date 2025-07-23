import * as styles from "@/styles/index.css";
import * as bannerStyles from "../styles/banner-section.css";
import { AboutSection } from "./about-section";

export const BannerSection: React.FC = () => {
  return (
    <div className={bannerStyles.bannerSection}>
      <div className={bannerStyles.profileContainer}>
        <img
          src="assets/profile.png"
          alt="Profile"
          className={bannerStyles.profileImage}
        />
        <AboutSection />
      </div>
      <div>
        {/* TODO: 수식어 */}
        <span className={bannerStyles.bannerTitle}>
          안녕하세요, 프로그래머{" "}
          <span className={styles.textPrimary}>류현승</span>
          입니다.{" "}
        </span>
        <span className={bannerStyles.bannerDescription}>
          분야를 막론하고, 하고 싶은 것이 생기면 깊게 몰두해 반드시 해결해내려고
          노력하는 프로그래머입니다. 제가 만들어내는 창작물들을 사용하는
          사람들에게 긍정적인 영향을 주고자 노력합니다.
        </span>
      </div>
    </div>
  );
};
