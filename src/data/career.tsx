import { IconCode } from '@tabler/icons-react';

import gistLogo from '@/assets/logos/gist.svg';
import gsaLogo from '@/assets/logos/gsa.webp';
import junctionLogo from '@/assets/logos/junction.png';
import { BadgeStatus } from '@/pages/career/components/career-card';

export interface CareerItem {
  title: string;
  date: string;
  badges: BadgeStatus[];
  logo: React.ReactNode;
  description: string | React.ReactNode;
}

export interface AchievementItem {
  content: React.ReactNode;
}

export interface CareerSection {
  title: string;
  items: CareerItem[];
  achievements?: AchievementItem[];
  note?: string;
}

export const careerData: CareerSection[] = [
  {
    title: '학력',
    items: [
      {
        title: '과학영재학교 광주과학고등학교',
        date: '2022.03 - 2025.02',
        badges: [BadgeStatus.GRADUATED],
        logo: (
          <img
            src={gsaLogo}
            width={28}
            alt="과학영재학교 광주과학고등학교 로고"
          />
        ),
        description: '자연과학계열',
      },
      {
        title: 'GIST (광주과학기술원)',
        date: '2025.03 - 현재',
        badges: [BadgeStatus.ENROLLED],
        logo: <img src={gistLogo} width={28} alt="GIST 로고" />,
        description: '도전탐색과정',
      },
    ],
    achievements: [
      {
        content: (
          <>
            광주과학고등학교 1학년 1학기 정보과학 I <b>5th (교과우수상)</b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 1학년 2학기 정보과학 II <b>2nd (교과우수상)</b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 2022년 교내경시대회 정보부문{' '}
            <b className="text-warning-500 dark:text-warning-400">
              금상 (1학년 유일)
            </b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 2학년 2학기 머신러닝과 딥러닝{' '}
            <b className="text-warning-500 dark:text-warning-400">
              1st (교과우수상)
            </b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 2학년 2학기 객체지향 프로그래밍{' '}
            <b className="text-warning-500 dark:text-warning-400">
              1st (교과우수상)
            </b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 2학년 2학기 프로그래밍과 문제해결{' '}
            <b className="text-warning-500 dark:text-warning-400">
              1st (AP, 교과우수상)
            </b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 2023년 교내경시대회 정보부문{' '}
            <b className="text-warning-500 dark:text-warning-400">금상</b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 3학년 1학기 자료구조와 알고리즘 <b>2nd</b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 3학년 1학기 정보과학 프로젝트{' '}
            <b className="text-warning-500 dark:text-warning-400">
              1st (교과우수상)
            </b>
          </>
        ),
      },
      {
        content: (
          <>
            광주과학고등학교 종합 정보부문 GPA{' '}
            <b className="text-warning-500 dark:text-warning-400">
              4.285 / 4.3
            </b>
          </>
        ),
      },
      {
        content: <>GIST 2025년 입학식 학부생(신입생) 대표</>,
      },
      {
        content: <>GIST 2025년 1학기 이공계 성적우수 장학생 해당자</>,
      },
      {
        content: (
          <>
            GIST GS1001 미적분학과 응용{' '}
            <b className="text-warning-500 dark:text-warning-400">1st</b>{' '}
            (240점/240점)
          </>
        ),
      },
      {
        content: (
          <>
            GIST GS1401 컴퓨터 프로그래밍{' '}
            <b className="text-warning-500 dark:text-warning-400">1st</b>{' '}
            (98점/100점)
          </>
        ),
      },
    ],
  },
  {
    title: '자격증',
    items: [],
    note: '* 추가 자격증 추가 이력은 지속적으로 업데이트됩니다.',
  },
  {
    title: '대회 참가',
    items: [
      {
        title: 'AI 창의융합경진대회',
        date: '2025',
        badges: [BadgeStatus.PARTICIPATED],
        logo: <IconCode size={20} />,
        description: (
          <div>
            <div>주최: GIST AI융합학과</div>
            <div>부문: 탁구로봇 트랙</div>
          </div>
        ),
      },
      {
        title: 'JUNCTION ASIA 2025',
        date: '2025',
        badges: [BadgeStatus.PARTICIPATED],
        logo: (
          <img src={junctionLogo} width={28} alt="JUNCTION ASIA 2025 로고" />
        ),
        description: '주최: 앙트비 (ENTBE)',
      },
    ],
    note: '* 추가 대회 참가 이력은 지속적으로 업데이트됩니다.',
  },
];
