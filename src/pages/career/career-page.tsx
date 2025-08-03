import { IconCode } from '@tabler/icons-react';

import gistLogo from '@/assets/logos/gist.svg';
import gsaLogo from '@/assets/logos/gsa.webp';
import { Layout } from '@/components';

import { AchievementList } from './components/achievement-list';
import { BadgeStatus, CareerCard } from './components/career-card';

export const CareerPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 text-center">
        <h1 className="max-w-7xl mx-auto px-16 lg:px-16 max-lg:px-6 text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          이력
        </h1>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-16 lg:px-16 max-lg:px-6">
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                학력
              </h2>
              <div className="flex gap-6">
                <CareerCard
                  title="과학영재학교 광주과학고등학교"
                  date="2022.03 - 2025.02"
                  badges={[BadgeStatus.GRADUATED]}
                  logo={
                    <img
                      src={gsaLogo}
                      width={28}
                      alt="과학영재학교 광주과학고등학교 로고"
                    />
                  }
                >
                  자연과학계열
                </CareerCard>
                <CareerCard
                  title="GIST (광주과학기술원)"
                  date="2025.03 - 현재"
                  badges={[BadgeStatus.ENROLLED]}
                  logo={<img src={gistLogo} width={28} alt="GIST 로고" />}
                >
                  도전탐색과정
                </CareerCard>
              </div>
              <AchievementList
                title="주요 성과"
                achievements={[
                  <>
                    광주과학고등학교 1학년 1학기 정보과학 I{' '}
                    <b>5th (교과우수상)</b>
                  </>,
                  <>
                    광주과학고등학교 1학년 2학기 정보과학 II{' '}
                    <b>2nd (교과우수상)</b>
                  </>,
                  <>
                    광주과학고등학교 2022년 교내경시대회 정보부문{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      금상 (1학년 유일)
                    </b>
                  </>,
                  <>
                    광주과학고등학교 2학년 2학기 머신러닝과 딥러닝{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st (교과우수상)
                    </b>
                  </>,
                  <>
                    광주과학고등학교 2학년 2학기 객체지향 프로그래밍{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st (교과우수상)
                    </b>
                  </>,
                  <>
                    광주과학고등학교 2학년 2학기 프로그래밍과 문제해결{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st (AP, 교과우수상)
                    </b>
                  </>,
                  <>
                    광주과학고등학교 2023년 교내경시대회 정보부문{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      금상
                    </b>
                  </>,
                  <>
                    광주과학고등학교 3학년 1학기 자료구조와 알고리즘{' '}
                    <b>2nd (교과우수상)</b>
                  </>,
                  <>
                    광주과학고등학교 3학년 1학기 정보과학 프로젝트{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st (교과우수상)
                    </b>
                  </>,
                  <>
                    광주과학고등학교 종합 정보부문 GPA{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      4.285 / 4.3
                    </b>
                  </>,
                  <>GIST 2025년 입학식 학부생(신입생) 대표</>,
                  <>GIST 2025년 1학기 이공계 성적우수 장학생 해당자</>,
                  <>
                    GIST GS1001 미적분학과 응용{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st
                    </b>{' '}
                    (241점/240점)
                  </>,
                  <>
                    GIST GS1401 컴퓨터 프로그래밍{' '}
                    <b className="text-warning-500 dark:text-warning-400">
                      1st
                    </b>{' '}
                    (98점/100점)
                  </>,
                ]}
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                자격증
              </h2>
              <div className="flex gap-6">
                {/* 자격증이 없을 때 표시할 메시지 */}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 m-0">
                * 추가 자격증 추가 이력은 지속적으로 업데이트됩니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                대회 참가
              </h2>
              <div className="flex gap-6">
                <CareerCard
                  title="AI 창의융합경진대회"
                  date="2025"
                  badges={[BadgeStatus.PARTICIPATED]}
                  logo={<IconCode size={20} />}
                >
                  <div>
                    <div>주최: GIST AI융합학과</div>
                    <div>부문: 탁구로봇 트랙</div>
                  </div>
                </CareerCard>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 m-0">
                * 추가 대회 참가 이력은 지속적으로 업데이트됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
