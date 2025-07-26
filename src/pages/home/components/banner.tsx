import { Avatar, AvatarFallback, AvatarImage } from "@/components/";
import * as bannerStyles from "../styles/banner.css";
import { bannerLightTheme, bannerDarkTheme } from "../styles/banner.theme.css";
import { useTheme } from "@/hooks/use-theme";
import { AtSign, School, GraduationCap } from "lucide-react";

/**
안녕하세요. 프로그래머이자 디자이너인 류현승입니다.
저는 분야를 가리지 않고, 흥미가 생긴 주제에는 깊이 몰입하여 끝까지 해결해내고자 노력하는 사람입니다. 제 창작물이 사용자에게 긍정적인 영향을 주는 것을 가장 중요하게 생각하며, 프로그래밍뿐만 아니라 디자인, 수학, 과학 등 다양한 분야에 폭넓은 관심을 가지고 접근하고 있습니다.
프로그래밍 분야에서는 스스로의 흥미를 바탕으로 독학을 통해 지식을 넓히는 것을 즐깁니다. 다룰 수 있는 언어로는 Kotlin, Java, Python, C, C++, Dart, MySQL, LaTeX, HTML, JavaScript, CSS, TypeScript 등이 있으며, 이와 관련된 다양한 사이드 프로젝트를 직접 기획하고 개발해왔습니다.
대표적인 프로젝트로는, 제가 재학 중인 대학교의 모든 플랫폼에서 사용할 수 있는 통합 계정 시스템(IdP)의 프론트엔드 개발, 1년간 독자적으로 논문을 탐독하며 설계한 2차원 강체 물리 엔진 구현, 유명한 객체 탐지 모델인 YOLOv3를 레이어 단위로 직접 재구현한 프로젝트 등이 있습니다. 또한, Computer Vision과 하드웨어를 융합한 탁구 로봇 프로젝트도 진행한 바 있습니다.
디자인에도 꾸준한 관심을 가지고 있으며, 어릴 때부터 독학으로 디자인을 공부해왔습니다. 사용자에게 최고의 만족을 전달하기 위해 항상 매끄럽고 직관적인 UX를 추구하며, 완성도 높은 결과물을 만드는 데 집중하는 성향을 가지고 있습니다.
앞으로도 계속해서 배우고 성장하며, 기술과 창의성을 통해 세상에 긍정적인 변화를 만들어내는 인재가 되고자 합니다.
 */

export const Banner: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(bannerLightTheme, bannerDarkTheme);

  return (
    <div className={themeClass}>
      <div className={bannerStyles.section}>
        <div className={bannerStyles.container}>
          <div className={bannerStyles.profileContainer}>
            <Avatar className={bannerStyles.profileImage}>
              <AvatarImage src="src/assets/profile.png" />
              <AvatarFallback>Rhseung</AvatarFallback>
            </Avatar>
            <div className={bannerStyles.infoContainer}>
              <div className={bannerStyles.infoItem}>
                <AtSign className={bannerStyles.infoItemIcon} />
                <span className={bannerStyles.infoItemText}>
                  <a
                    href="mailto:rhseungg@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={bannerStyles.infoItemLinkedText}
                  >
                    rhseungg@gmail.com
                  </a>
                </span>
              </div>
              <div className={bannerStyles.infoItem}>
                <School className={bannerStyles.infoItemIcon} />
                <span className={bannerStyles.infoItemText}>
                  <a
                    href="https://gsa.gen.hs.kr:453/main/main.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={bannerStyles.infoItemLinkedText}
                  >
                    과학영재학교 광주과학고등학교
                  </a>{" "}
                  39기 졸업
                </span>
              </div>
              <div className={bannerStyles.infoItem}>
                <GraduationCap className={bannerStyles.infoItemIcon} />
                <span className={bannerStyles.infoItemText}>
                  <a
                    href="https://ewww.gist.ac.kr/kr/main.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={bannerStyles.infoItemLinkedText}
                  >
                    GIST
                  </a>{" "}
                  '25 도전탐색과정 재학 중
                </span>
              </div>
            </div>
          </div>
          <div>
            {/* TODO: 수식어 */}
            <span className={bannerStyles.title}>
              안녕하세요, 프로그래머이자 디자이너인 류현승입니다.{" "}
            </span>
            <span className={bannerStyles.description}>
              분야를 막론하고, 하고 싶은 것이 생기면 깊게 몰두해 반드시
              해결해내려고 노력하는 프로그래머입니다. 제가 만들어내는 창작물들을
              사용하는 사람들에게 긍정적인 영향을 주고자 노력합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
