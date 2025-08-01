import { ExternalLink, Github } from 'lucide-react';

import { Button } from '@/components';
import { Badge } from '@/components';

export const Highlight: React.FC = () => {
  const projects = [
    {
      title: '지글, 지스트를 위한 공지 통합 플랫폼',
      description:
        'Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.',
      tech: ['Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/ziggle.png',
    },
    {
      title: '광주과학고등학교를 위한 카톡봇',
      description:
        'Node.js로 구축한 광주과학고등학교 전용 카카오톡 봇으로, 공지사항과 학사일정, 급식 정보를 제공합니다.',
      tech: ['Vue.js', 'Firebase', 'Vuetify'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/gsa-bot.png',
    },
    {
      title: '지스트의 통합 계정 시스템, IdP',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/idp.png',
    },
    {
      title: 'Contraint 기반 물리엔진 설계, Particles',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/particles.png',
    },
    {
      title: '컴퓨터 비전과 하드웨어를 융합한 탁구 로봇',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/pingpong.png',
    },
    {
      title: 'YOLOv3의 레이어 단위 재구현',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/yolo.png',
    },
    {
      title: '자연어 날짜 파싱을 위한 라이브러리, DateTime',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/datetime.png',
    },
    {
      title: 'Python의 물리학 실험 단위 계산 라이브러리, siunits',
      description: 'OpenWeather API를 활용한 반응형 날씨 정보 대시보드입니다.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'src/assets/thumbnails/siunits.png',
    },
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 w-full px-16 py-16 lg:px-16 max-lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
