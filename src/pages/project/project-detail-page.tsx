import React from 'react';

import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
  IconWorld,
} from '@tabler/icons-react';
import { Link, useParams } from '@tanstack/react-router';

import { Badge, Layout } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Project, projects } from '@/data/projects';

import { TechStackBadge } from './components/tech-stack';

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'maintenance':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    default:
      return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900/20 dark:text-neutral-400';
  }
};

const getStatusText = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return '완료됨';
    case 'in-progress':
      return '진행중';
    case 'maintenance':
      return '유지보수';
    default:
      return '알 수 없음';
  }
};

export const getLinkIcon = (linkName: string) => {
  const name = linkName.toLowerCase();

  if (name.includes('github')) return <IconBrandGithub className="size-4" />;
  if (name.includes('site') || name.includes('demo'))
    return <IconWorld className="size-4" />;
  return <IconExternalLink className="size-4" />;
};

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams({ from: '/project/$id' });
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout disableHeaderHeight>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            요청하신 프로젝트가 존재하지 않거나 삭제되었습니다.
          </p>
          <Link to="/project">
            <Button variant="outline">
              <IconArrowLeft className="w-4 h-4 mr-1" />
              프로젝트 목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* 뒤로가기 버튼 */}
      <div className="mt-4 mb-6">
        <Link to="/project">
          <Button variant="ghost" size="sm">
            <IconArrowLeft className="w-4 h-4 mr-2" />
            프로젝트 목록으로
          </Button>
        </Link>
      </div>

      {/* 프로젝트 헤더 */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 프로젝트 이미지 */}
          <div className="lg:w-1/3">
            <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 프로젝트 기본 정보 */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {project.title}
            </h1>

            <p className="text-md lg:text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* 프로젝트 메타 정보 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {project.status && (
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    상태
                  </div>
                  <div className="font-medium">
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusText(project.status)}
                    </Badge>
                  </div>
                </div>
              )}
              {project.startDate && (
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    시작일
                  </div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-50">
                    {project.startDate}
                  </div>
                </div>
              )}
              {project.endDate && (
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    완료일
                  </div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-50">
                    {project.endDate}
                  </div>
                </div>
              )}
              {project.teamSize && (
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    팀 크기
                  </div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-50">
                    {project.teamSize}명
                  </div>
                </div>
              )}
              {project.role && (
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    역할
                  </div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-50">
                    {Array.isArray(project.role) ? (
                      <div className="space-y-1">
                        {project.role.map((role, index) => (
                          <div
                            key={index}
                            className="whitespace-nowrap text-sm"
                          >
                            {role}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="whitespace-nowrap">{project.role}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 sm:pb-12 lg:pb-16">
        {/* 왼쪽 컬럼 - 주요 정보 */}
        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
          {/* 상세 설명 */}
          {project.longDescription && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">프로젝트 소개</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {project.longDescription.split('\n').map(
                    (paragraph, index) =>
                      paragraph.trim() && (
                        <p
                          key={index}
                          className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4"
                        >
                          {paragraph.trim()}
                        </p>
                      ),
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 도전과제와 성과를 2컬럼으로 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 도전과제 */}
            {project.challenges && project.challenges.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">기술적 도전과제</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 flex-shrink-0" />
                        <div>{challenge}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 성과 */}
            {project.achievements && project.achievements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">주요 성과</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2 flex-shrink-0" />
                        <div>{achievement}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* 오른쪽 컬럼 - 부가 정보 */}
        <div className="space-y-6">
          {/* 링크 섹션 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">프로젝트 링크</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {Object.entries(project.links).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button variant="outline" size="sm">
                      {getLinkIcon(name)}
                      <span className="ml-1">{name}</span>
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 기술 스택 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">사용된 기술 스택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStacks.map((techStack) => (
                  <TechStackBadge
                    key={techStack.name}
                    techStack={techStack}
                    size="sm"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
