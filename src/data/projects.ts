import campassBanner from '@/assets/thumbnails/campass.webp';
import datetimeBanner from '@/assets/thumbnails/datetime.png';
import fliggleBanner from '@/assets/thumbnails/fliggle.png';
import glanceBanner from '@/assets/thumbnails/glance.png';
import gsaBotBanner from '@/assets/thumbnails/gsa-bot.png';
import idpBanner from '@/assets/thumbnails/idp.png';
import neatBanner from '@/assets/thumbnails/neat.png';
import particlesBanner from '@/assets/thumbnails/particles.png';
import patternBanner from '@/assets/thumbnails/pattern.png';
import pingpongBanner from '@/assets/thumbnails/pingpong.png';
import rhseungBanner from '@/assets/thumbnails/rhseung.png';
import siunitsBanner from '@/assets/thumbnails/siunits.png';
import yoloBanner from '@/assets/thumbnails/yolo.png';

import { TechStack, techStacks } from './tech-stacks';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStacks: TechStack[];
  links: Record<string, string>;
  image: string;
  status?: 'completed' | 'in-progress' | 'maintenance';
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  role?: string | string[];
  challenges?: string[];
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    title: '지스트의 통합 계정 시스템, IdP',
    description:
      '지스트의 통합 계정 시스템으로, 지스트의 모든 서비스에 로그인할 수 있는 계정을 제공합니다. 또한, OAuth를 지원하여 외부 서비스에서도 사용할 수 있습니다.',
    longDescription: `지스트의 통합 계정 시스템(Identity Provider)은 학교 내 모든 디지털 서비스를 하나의 계정으로 접근할 수 있게 해주는 핵심 인프라입니다.

OAuth 2.0 및 OpenID Connect 표준을 준수하여 안전하고 표준화된 인증 방식을 제공하며, 학생들은 한 번의 로그인으로 학교의 모든 온라인 서비스를 이용할 수 있습니다.

현대적인 웹 기술을 활용하여 반응형 디자인과 다국어 지원을 제공하며, 사용자 경험을 최우선으로 고려한 직관적인 인터페이스를 구현했습니다.`,
    techStacks: [
      techStacks.React,
      techStacks.TypeScript,
      techStacks.TanstackRouter,
      techStacks.TailwindCss,
      techStacks.OpenApiTypeScript,
      techStacks.Vite,
      techStacks.I18Next,
      techStacks.ReactQuery,
      techStacks.Bun,
      techStacks.Figma,
    ],
    links: {
      Frontend: 'https://github.com/gsainfoteam/idp-fe',
      Site: 'https://idp.gistory.me',
    },
    image: idpBanner,
    status: 'completed',
    startDate: '2024.03',
    endDate: '2024.08',
    teamSize: 3,
    role: ['Frontend Developer', 'UI/UX Designer'],
    challenges: [
      'OAuth 2.0 흐름에 맞는 사용자 인터페이스 설계',
      '다양한 디바이스에서의 일관된 사용자 경험 제공',
      'OpenAPI 스펙을 활용한 타입 안전성 확보',
      '다국어 지원 구현',
    ],
    achievements: [
      '학교 내 모든 서비스의 통합 인증 시스템 구축',
      '사용자 친화적인 인터페이스로 로그인 과정 간소화',
      '타입스크립트를 활용한 안전한 코드베이스 구축',
      'i18n을 통한 한국어/영어 지원',
    ],
  },
  {
    id: 1,
    title: '광주과학고등학교를 위한 카톡봇',
    description:
      'Node.js와 윈도우 서버에 Nox Android Emulator로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.',
    longDescription: `광주과학고등학교 학생들을 위한 카카오톡 기반 정보 제공 봇입니다. Windows Server에 Nox Android Emulator를 설치하여 24시간 운영되는 봇 서비스를 구축했습니다.

자연어 처리 기반의 날짜 파싱 기능을 구현하여 "내일 급식", "다음주 월요일 일정" 같은 자연스러운 명령어를 지원합니다. 또한 cron 스케줄러를 활용하여 정기적으로 학교 웹사이트에서 최신 정보를 크롤링합니다.

이벤트 리스너 패턴을 활용하여 실시간으로 메시지를 처리하며, 모듈화된 명령어 관리 시스템으로 확장성을 확보했습니다.`,
    techStacks: [
      techStacks.NodeJs,
      techStacks.Npm,
      techStacks.TypeScript,
      techStacks.JavaScript,
    ],
    links: {
      GitHub: 'https://github.com/GSAStudentCouncil/gsa-bot',
    },
    image: gsaBotBanner,
    status: 'maintenance',
    startDate: '2023.09',
    endDate: '2024.02',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      'Android Emulator 환경에서의 안정적인 카카오톡 봇 구현',
      '자연어 날짜 파싱 알고리즘 개발',
      '학교 웹사이트 크롤링 및 데이터 파싱',
      '24시간 무중단 서비스 운영',
    ],
    achievements: [
      '학교 전체 학생들이 사용하는 편의 서비스 구축',
      '자연어 처리 기반 직관적인 명령어 시스템 개발',
      '안정적인 서버 운영으로 높은 가용성 달성',
      '모듈화된 아키텍처로 기능 확장 용이성 확보',
    ],
  },
  {
    id: 2,
    title: 'Constraint 기반 물리엔진 설계, Particles',
    description:
      '2차원 강체에 관련된 물리엔진으로 현실을 컴퓨터에서 시뮬레이션해보세요. 2024년 R&E 프로젝트로, 관련 논문과 이론을 참고하여 SFML과 C++로 구현하였습니다.',
    longDescription: `물리학 연구와 교육을 위한 2차원 강체 물리 시뮬레이션 엔진입니다. 2024년 R&E(Research & Education) 프로젝트의 일환으로 개발되었습니다.

Constraint-based 접근법을 활용하여 현실적인 물리 현상을 정확하게 시뮬레이션하며, 충돌 감지, 마찰력, 중력 등의 다양한 물리적 상호작용을 지원합니다.

학술 논문과 물리학 이론을 바탕으로 수학적으로 정확한 구현을 목표로 하며, 교육용 도구로서의 활용 가능성도 고려하여 설계했습니다.`,
    techStacks: [techStacks.Cpp, techStacks.SFML],
    links: {
      GitHub: 'https://github.com/rhseung/particles',
    },
    image: particlesBanner,
    status: 'completed',
    startDate: '2024.03',
    endDate: '2024.11',
    teamSize: 2,
    role: ['Lead Developer', 'Research Engineer'],
    challenges: [
      'Constraint-based 물리 엔진 알고리즘 구현',
      '실시간 충돌 감지 및 응답 시스템 개발',
      '수치적 안정성과 성능의 균형 확보',
      'SFML을 활용한 효율적인 렌더링 시스템 구축',
    ],
    achievements: [
      '학술적으로 정확한 물리 시뮬레이션 엔진 완성',
      '실시간 상호작용이 가능한 시각화 시스템 구현',
      'R&E 프로젝트 우수작 선정',
      '교육용 물리 시뮬레이션 도구로 활용 가능',
    ],
  },
  {
    id: 3,
    title: '컴퓨터 비전과 하드웨어를 융합한 탁구 로봇',
    description:
      '2025년 AI창의융합경진대회의 탁구로봇 트랙에 참가한 프로젝트로, OpenCV와 C++로 구현하였으며, 탁구공을 인식하고 라켓을 제어하여 탁구를 칠 수 있습니다.',
    longDescription: `AI와 하드웨어 기술을 융합하여 탁구를 칠 수 있는 로봇을 개발한 프로젝트입니다. 2025년 AI창의융합경진대회 탁구로봇 트랙에 참가작으로 제출되었습니다.

OpenCV를 활용한 실시간 객체 인식 시스템으로 탁구공의 위치와 속도를 추적하고, 예측 알고리즘을 통해 라켓의 최적 움직임을 계산합니다.

하드웨어 부분은 3D 모델링부터 제작까지 직접 수행하였으며, 서보모터와 아두이노를 활용한 정밀한 라켓 제어 시스템을 구현했습니다.`,
    techStacks: [techStacks.Cpp, techStacks.OpenCV],
    links: {
      GitHub: 'https://github.com/studio-void/hinguri-pingpong',
    },
    image: pingpongBanner,
    status: 'completed',
    startDate: '2024.10',
    endDate: '2025.01',
    teamSize: 3,
    role: 'Computer Vision Developer',
    challenges: [
      '실시간 탁구공 추적 및 궤적 예측 알고리즘 개발',
      '하드웨어와 소프트웨어 간의 정밀한 동기화',
      '3D 모델링 및 하드웨어 제작',
      '제한된 시간 내 정확한 반응 시스템 구현',
    ],
    achievements: [
      'AI창의융합경진대회 참가 및 시연 성공',
      '실시간 객체 추적 시스템 구현',
      '하드웨어-소프트웨어 통합 시스템 완성',
      '팀 협업을 통한 융합 기술 프로젝트 경험',
    ],
  },
  {
    id: 4,
    title: 'YOLOv3 재구현하기',
    description:
      '2023년 R&E 프로젝트로, YOLOv3의 레이어를 PyTorch로 재구현하였습니다. GPU가 필요하여 고등학교 내 RTX 그래픽 카드가 달린 리눅스 서버에서 학습하였습니다.',
    longDescription: `딥러닝과 컴퓨터 비전 기술 학습을 위해 YOLOv3 객체 탐지 모델을 PyTorch로 재구현한 프로젝트입니다. 2023년 R&E 프로젝트의 일환으로 진행되었습니다.

원본 논문을 깊이 분석하여 YOLOv3의 핵심 아키텍처인 Darknet-53, Feature Pyramid Network, Multi-scale Detection 등을 이해하고 구현했습니다.

고등학교 내 리눅스 서버의 RTX GPU를 활용하여 모델 학습을 진행하였으며, 이 과정에서 딥러닝 모델의 학습 과정과 하이퍼파라미터 튜닝에 대한 실질적인 경험을 쌓았습니다.`,
    techStacks: [techStacks.Python, techStacks.PyTorch, techStacks.OpenCV],
    links: {
      GitHub: 'https://github.com/gsa-projects/2023-rne',
    },
    image: yoloBanner,
    status: 'completed',
    startDate: '2023.03',
    endDate: '2023.11',
    teamSize: 2,
    role: 'Deep Learning Engineer',
    challenges: [
      'YOLOv3 논문 분석 및 핵심 아키텍처 이해',
      'PyTorch를 활용한 커스텀 레이어 구현',
      '제한된 GPU 자원에서의 효율적인 학습 전략 수립',
      '모델 성능 최적화 및 하이퍼파라미터 튜닝',
    ],
    achievements: [
      '학술 논문을 바탕으로 한 실제 모델 구현 경험',
      'PyTorch 프레임워크 숙련도 향상',
      'GPU 클러스터 환경에서의 딥러닝 학습 경험',
      'R&E 프로젝트 성공적 완수',
    ],
  },
  {
    id: 5,
    title: 'Python의 물리학 실험 단위 계산 라이브러리, siunits',
    description:
      '물리학 실험으로 얻은 데이터를 처리할 때 가장 많이 하는 실수이자 번거로운 단위 계산을 도와주는 라이브러리입니다.',
    longDescription: `물리학 실험과 연구에서 발생하는 단위 계산 오류를 방지하고 계산 과정을 단순화하기 위해 개발한 Python 라이브러리입니다.

SI 단위계를 기반으로 한 차원 해석(Dimensional Analysis)을 통해 물리량의 단위를 자동으로 관리하며, 단위 불일치 오류를 컴파일 타임에 감지할 수 있습니다.

symbolic 연산을 지원하여 복잡한 물리 공식의 단위 검증과 변환을 자동화하며, 실험 데이터 처리 과정에서의 인적 오류를 크게 줄일 수 있습니다.`,
    techStacks: [techStacks.PyPI, techStacks.Python],
    links: {
      GitHub: 'https://github.com/rhseung/siunits',
      PyPI: 'https://pypi.org/project/rhseung.units/',
    },
    image: siunitsBanner,
    status: 'maintenance',
    startDate: '2023.12',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      'SI 단위계 기반 차원 해석 시스템 설계',
      'Python의 연산자 오버로딩을 활용한 직관적인 API 구현',
      'Symbolic 연산과 수치 연산의 통합',
      'PyPI 패키지 배포 및 버전 관리',
    ],
    achievements: [
      'PyPI에 공개된 오픈소스 라이브러리 개발',
      '물리학 실험실에서 실제 활용되는 도구 제작',
      '타입 안전성을 보장하는 단위 계산 시스템 구현',
      '지속적인 유지보수 및 기능 개선',
    ],
  },
  {
    id: 6,
    title: '자연어 날짜 파싱을 위한 라이브러리, DateTime',
    description:
      'NLP를 사용하지 않고, 정규표현식과 빌더 패턴을 사용하여 자연어로 입력된 날짜를 파싱하는 라이브러리입니다.',
    longDescription: `복잡한 NLP 모델 없이도 정규표현식과 언어학적 패턴 분석을 통해 자연어 날짜 표현을 정확하게 파싱하는 TypeScript 라이브러리입니다.

"내일", "다음주 금요일", "3일 후" 등의 상대적 날짜 표현부터 "2024년 12월 25일", "Dec 25, 2024" 등의 절대적 날짜 표현까지 다양한 형식을 지원합니다.

빌더 패턴을 활용하여 확장 가능한 아키텍처를 구현했으며, 한국어와 영어를 포함한 다국어 지원이 가능하도록 설계했습니다.`,
    techStacks: [techStacks.Npm, techStacks.TypeScript],
    links: {
      GitHub: 'https://github.com/essentialib/datetime',
      npm: 'https://www.npmjs.com/package/@essentialib/datetime',
    },
    image: datetimeBanner,
    status: 'completed',
    startDate: '2024.01',
    endDate: '2024.04',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      '다양한 자연어 날짜 표현의 패턴 분석 및 정의',
      '정규표현식 기반 효율적인 파싱 알고리즘 구현',
      '상대적/절대적 날짜 표현의 통합 처리',
      '다국어 지원을 위한 확장 가능한 아키텍처 설계',
    ],
    achievements: [
      'npm에 공개된 오픈소스 라이브러리 개발',
      '높은 정확도의 자연어 날짜 파싱 시스템 구현',
      '경량화된 솔루션으로 빠른 성능 달성',
      '타입스크립트 기반 타입 안전성 보장',
    ],
  },
  {
    id: 7,
    title: '정규표현식을 빌더 패턴으로 생성할 수 있는 라이브러리, Pattern',
    description:
      '정규표현식은 매우 간편하지만 또한 매우 복잡합니다. 이 라이브러리는 빌더 패턴을 사용하여 정규표현식을 생성할 수 있도록 도와줍니다.',
    longDescription: `복잡하고 읽기 어려운 정규표현식을 직관적이고 유지보수 가능한 코드로 작성할 수 있도록 도와주는 TypeScript 라이브러리입니다.

빌더 패턴을 활용하여 메서드 체이닝 방식으로 정규표현식을 구성할 수 있으며, 각 메서드는 명확한 의미를 가져 코드의 가독성을 크게 향상시킵니다.

타입스크립트의 타입 시스템을 활용하여 컴파일 타임에 정규표현식의 구조적 오류를 감지할 수 있으며, IDE의 자동완성 기능을 통해 개발 효율성을 높였습니다.`,
    techStacks: [techStacks.Npm, techStacks.TypeScript],
    links: {
      GitHub: 'https://github.com/essentialib/pattern',
      npm: 'https://www.npmjs.com/package/@essentialib/pattern',
    },
    image: patternBanner,
    status: 'completed',
    startDate: '2024.02',
    endDate: '2024.05',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      '정규표현식의 모든 기능을 빌더 패턴으로 추상화',
      'TypeScript 타입 시스템을 활용한 컴파일 타임 검증',
      '직관적이면서도 강력한 API 설계',
      '성능 최적화와 메모리 효율성 확보',
    ],
    achievements: [
      'npm 생태계에 기여하는 오픈소스 도구 개발',
      '개발자 경험(DX) 향상을 위한 혁신적인 접근법 구현',
      '타입 안전성과 런타임 효율성의 균형 달성',
      '다양한 프로젝트에서 실제 활용되는 실용적인 도구 제작',
    ],
  },
  {
    id: 8,
    title: '마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드, Glance',
    description:
      '마인크래프트에 여러 Tweaks를 추가해주는 인터페이스 모드입니다. 마인크래프트의 UI를 개선하고, 편리한 기능을 추가합니다.',
    longDescription: `마인크래프트 게임 경험을 향상시키기 위한 사용자 인터페이스 개선 모드입니다. 바닐라 마인크래프트의 기본 기능을 유지하면서도 편의성을 크게 향상시킵니다.

인벤토리 관리, 아이템 정렬, HUD 개선, 미니맵 기능 등 게임플레이에 도움이 되는 다양한 기능들을 추가했으며, 모든 기능은 사용자가 개별적으로 활성화/비활성화할 수 있습니다.

Fabric 모드 로더를 기반으로 개발되었으며, Kotlin과 Java를 혼용하여 현대적이고 유지보수 가능한 코드베이스를 구축했습니다.`,
    techStacks: [techStacks.Java, techStacks.Kotlin],
    links: {
      GitHub: 'https://github.com/rhseung-mods/glance',
      Modrinth: 'https://modrinth.com/mod/glance',
    },
    image: glanceBanner,
    status: 'maintenance',
    startDate: '2024.06',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      'Minecraft의 복잡한 내부 구조와 모딩 API 학습',
      'Fabric 모드 로더 환경에서의 안정적인 모드 개발',
      'Java와 Kotlin의 혼용을 통한 효율적인 개발',
      'Modrinth 플랫폼을 통한 모드 배포 및 버전 관리',
    ],
    achievements: [
      'Modrinth에 공개된 마인크래프트 모드 개발',
      '게임 커뮤니티에서 실제 사용되는 유용한 도구 제작',
      'Fabric 모딩 기술 숙련도 향상',
      '지속적인 업데이트를 통한 사용자 만족도 유지',
    ],
  },
  {
    id: 9,
    title: 'NEAT 알고리즘으로 최적화 신경망 구현해보기',
    description:
      'Java의 SPRING 프레임워크를 사용하여 연습 겸 NEAT 알고리즘을 구현한 프로젝트입니다. NEAT 알고리즘을 사용하여 최적화된 신경망을 생성합니다.',
    longDescription: `NeuroEvolution of Augmenting Topologies (NEAT) 알고리즘을 학습하고 구현하기 위한 연구 프로젝트입니다. 진화 알고리즘과 신경망을 결합한 혁신적인 접근법을 탐구합니다.

NEAT 알고리즘의 핵심인 구조적 혁신(Structural Innovation)과 종 분화(Speciation)를 구현하여, 신경망의 토폴로지가 진화하는 과정을 시각화했습니다.

Java Swing을 활용한 GUI를 통해 진화 과정을 실시간으로 관찰할 수 있으며, 다양한 환경에서 신경망의 적응 과정을 실험할 수 있습니다.`,
    techStacks: [techStacks.Java, techStacks.Swing],
    links: {
      GitHub: 'https://github.com/gsa-projects/artificial-aquarium',
    },
    image: neatBanner,
    status: 'in-progress',
    startDate: '2024.09',
    teamSize: 1,
    role: 'Solo Developer',
    challenges: [
      'NEAT 알고리즘의 복잡한 수학적 개념 이해 및 구현',
      '신경망 토폴로지의 동적 변화 처리',
      '진화 알고리즘의 효율적인 최적화',
      'Java Swing을 활용한 실시간 시각화 구현',
    ],
    achievements: [
      '복잡한 AI 알고리즘의 이론적 이해와 실제 구현',
      '진화 알고리즘과 신경망 기술의 융합 경험',
      'Java 기반 시뮬레이션 프로그램 개발 숙련도 향상',
      '연구 중심의 실험적 프로젝트 수행 경험',
    ],
  },
  {
    id: 10,
    title: '이 사이트, rhseung.me',
    description:
      '이 사이트는 제 개인 블로그이자 포트폴리오입니다. 제 개발 경험과 프로젝트를 소개합니다.',
    longDescription: `개인 포트폴리오와 블로그를 위한 현대적인 웹사이트입니다. 최신 웹 기술을 활용하여 빠르고 사용자 친화적인 경험을 제공합니다.

TanStack Router를 활용한 타입 안전한 라우팅 시스템과 TailwindCSS를 통한 반응형 디자인을 구현했으며, 다크/라이트 테마 지원으로 사용자 선호도를 반영했습니다.

Vercel을 통한 자동 배포 파이프라인을 구축하여 지속적인 업데이트가 가능하며, 성능 최적화를 통해 빠른 로딩 속도를 달성했습니다.`,
    techStacks: [
      techStacks.React,
      techStacks.TypeScript,
      techStacks.TanstackRouter,
      techStacks.TailwindCss,
      techStacks.VanillaExtract,
      techStacks.Bun,
      techStacks.Vite,
    ],
    links: {
      GitHub: 'https://github.com/rhseung/rhseung.github.io',
      Site: 'https://rhseung.me',
    },
    image: rhseungBanner,
    status: 'maintenance',
    startDate: '2024.08',
    teamSize: 1,
    role: ['Full-stack Developer', 'Designer'],
    challenges: [
      '현대적인 React 생태계 기술 스택 학습 및 적용',
      'TanStack Router를 활용한 타입 안전한 SPA 구현',
      '성능 최적화와 사용자 경험의 균형',
      '지속적인 콘텐츠 업데이트 및 기능 개선',
    ],
    achievements: [
      '개인 브랜딩을 위한 전문적인 포트폴리오 사이트 구축',
      '최신 프론트엔드 기술 스택 숙련도 향상',
      'SEO 최적화를 통한 검색 엔진 노출 개선',
      '반응형 디자인으로 모든 디바이스에서 최적화된 경험 제공',
    ],
  },
  {
    id: 11,
    title: '연습용 SNS 앱 개발 프로젝트, Fliggle',
    description:
      '모바일 프론트엔드 및 백엔드 개발 연습을 위한 SNS 앱입니다. Flutter와 Nest.js를 사용하여 개발하였습니다.',
    longDescription: `풀스택 개발 능력 향상을 위해 진행한 소셜 네트워크 서비스 앱 개발 프로젝트입니다. 모바일 앱과 백엔드 API를 모두 개발하여 완전한 서비스를 구현했습니다.

Flutter를 활용한 크로스 플랫폼 모바일 앱 개발과 NestJS 기반의 RESTful API 서버 구축을 통해 현대적인 모바일 서비스 아키텍처를 학습했습니다.

Prisma ORM을 활용한 데이터베이스 관리와 Swagger를 통한 API 문서화로 체계적인 백엔드 개발 프로세스를 경험했습니다.`,
    techStacks: [
      techStacks.Dart,
      techStacks.Flutter,
      techStacks.Nestjs,
      techStacks.Prisma,
      techStacks.Figma,
    ],
    links: {
      Frontend: 'https://github.com/rhseung/toonflix-fe',
      Backend: 'https://github.com/rhseung/toonflix-be',
      Swagger: 'https://toonflix-be.vercel.app/api/',
    },
    image: fliggleBanner,
    status: 'completed',
    startDate: '2024.05',
    endDate: '2024.07',
    teamSize: 1,
    role: 'Full-stack Developer',
    challenges: [
      'Flutter 프레임워크를 활용한 모바일 앱 개발',
      'NestJS 기반 백엔드 API 서버 구축',
      'Prisma ORM을 통한 효율적인 데이터베이스 관리',
      '프론트엔드와 백엔드 간의 효율적인 통신 구현',
    ],
    achievements: [
      '풀스택 모바일 애플리케이션 개발 완성',
      'Flutter와 Dart 언어 숙련도 향상',
      'NestJS와 TypeScript 백엔드 개발 경험',
      'RESTful API 설계 및 문서화 경험',
    ],
  },
  {
    id: 12,
    title: '스마트 학교 생활 도우미, Campass',
    description:
      '학생들의 학교 생활을 Upstage의 Solar LLM을 활용한 AI Agent가 접목된 스마트 학교 생활 도우미입니다. 또한, Junction Asia 2025의 Upstage 트랙의 출품작입니다.',
    longDescription: `Junction Asia 2025 해커톤의 Upstage 트랙에 출품한 AI 기반 학교 생활 도우미 서비스입니다. Upstage의 Solar LLM을 활용하여 학생들의 학교 생활을 스마트하게 지원합니다.

자연어 처리를 통해 학생들의 질문을 이해하고, 학사 일정, 급식 정보, 동아리 활동 등에 대한 정보를 제공합니다. 또한 개인화된 학습 계획 수립과 진로 상담 기능도 포함되어 있습니다.

React 기반의 현대적인 웹 인터페이스와 NestJS 백엔드를 통해 안정적이고 확장 가능한 서비스 아키텍처를 구축했습니다.`,
    techStacks: [
      techStacks.React,
      techStacks.TailwindCss,
      techStacks.TanstackRouter,
      techStacks.Vite,
      techStacks.Bun,
      techStacks.TypeScript,
      techStacks.Nestjs,
      techStacks.Prisma,
      techStacks.Figma,
    ],
    links: {
      Site: 'https://campass-fe.vercel.app/',
      API: 'https://campass-be.vercel.app',
      Swagger: 'https://campass-be.vercel.app/api/',
    },
    image: campassBanner,
    status: 'completed',
    startDate: '2024.11',
    endDate: '2024.11',
    teamSize: 4,
    role: 'Frontend Developer',
    challenges: [
      'Upstage Solar LLM API 연동 및 최적화',
      '실시간 AI 응답을 위한 효율적인 UI/UX 설계',
      '제한된 해커톤 시간 내 MVP 개발',
      '팀 협업을 통한 풀스택 서비스 구현',
    ],
    achievements: [
      'Junction Asia 2025 해커톤 성공적 참가',
      'AI 기술을 활용한 실용적인 서비스 개발',
      '단기간 내 완성도 높은 프로토타입 구현',
      '팀 프로젝트를 통한 협업 경험 및 리더십 향상',
    ],
  },
];
