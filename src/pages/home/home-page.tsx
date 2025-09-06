import { Layout } from '@/components';

import { ProfileSection } from './components/profile-section';

/**
안녕하세요. 프로그래머이자 디자이너인 류현승입니다.
저는 분야를 가리지 않고, 흥미가 생긴 주제에는 깊이 몰입하여 끝까지 해결해내고자 노력하는 사람입니다. 제 창작물이 사용자에게 긍정적인 영향을 주는 것을 가장 중요하게 생각하며, 프로그래밍뿐만 아니라 디자인, 수학, 과학 등 다양한 분야에 폭넓은 관심을 가지고 접근하고 있습니다.
프로그래밍 분야에서는 스스로의 흥미를 바탕으로 독학을 통해 지식을 넓히는 것을 즐깁니다. 다룰 수 있는 언어로는 Kotlin, Java, Python, C, C++, Dart, MySQL, LaTeX, HTML, JavaScript, CSS, TypeScript 등이 있으며, 이와 관련된 다양한 사이드 프로젝트를 직접 기획하고 개발해왔습니다.
대표적인 프로젝트로는, 제가 재학 중인 대학교의 모든 플랫폼에서 사용할 수 있는 통합 계정 시스템(IdP)의 프론트엔드 개발, 1년간 독자적으로 논문을 탐독하며 설계한 2차원 강체 물리 엔진 구현, 유명한 객체 탐지 모델인 YOLOv3를 레이어 단위로 직접 재구현한 프로젝트 등이 있습니다. 또한, Computer Vision과 하드웨어를 융합한 탁구 로봇 프로젝트도 진행한 바 있습니다.
디자인에도 꾸준한 관심을 가지고 있으며, 어릴 때부터 독학으로 디자인을 공부해왔습니다. 사용자에게 최고의 만족을 전달하기 위해 항상 매끄럽고 직관적인 UX를 추구하며, 완성도 높은 결과물을 만드는 데 집중하는 성향을 가지고 있습니다.
앞으로도 계속해서 배우고 성장하며, 기술과 창의성을 통해 세상에 긍정적인 변화를 만들어내는 인재가 되고자 합니다.
 */

export const HomePage: React.FC = () => {
  return (
    <Layout disableHeaderHeight className="bg-neutral-50 dark:bg-neutral-950">
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <ProfileSection />
          <div className="max-w-6xl w-full">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed mb-4 sm:mb-6 text-neutral-600 dark:text-neutral-400 tracking-tight block text-pretty">
              <span className="font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-pink-300 dark:via-purple-300 dark:to-cyan-300 bg-clip-text text-transparent">
                안녕하세요, 류현승입니다.
              </span>{' '}
              저는 프로그래밍과 디자인을 통해 아이디어를 현실로 구현하며,
              사람들에게 의미 있는 경험을 전달하는 창작자입니다. 제 작품이
              누군가의 일상에 영감을 주고, 긍정적인 변화를 이끌어내는 순간을
              꿈꿉니다.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
