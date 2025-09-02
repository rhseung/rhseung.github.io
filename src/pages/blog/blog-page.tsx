import { IconExternalLink, IconTool } from '@tabler/icons-react';

import { Button, Layout } from '@/components';

export const BlogPage: React.FC = () => {
  const handleOpenBlog = () => {
    window.open(
      'https://velog.io/@rhseung224/posts',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <Layout disableHeaderHeight>
      <div className="py-16 sm:py-20 lg:py-24 text-center min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            🚧 블로그 준비 중
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            현재 블로그 페이지를 준비 중입니다.
            <br />
            당분간은 Velog에서 제 글들을 확인하실 수 있어요!
          </p>

          <Button
            onClick={handleOpenBlog}
            className="group bg-warning-500 hover:bg-warning-600 text-white px-8 py-3 text-base font-medium transition-all duration-200 hover:scale-105"
            size="lg"
          >
            <span>Velog에서 보기</span>
            <IconExternalLink />
          </Button>

          <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
            곧 더 멋진 블로그로 돌아올게요! 😊
          </p>
        </div>
      </div>
    </Layout>
  );
};
