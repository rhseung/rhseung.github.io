import { useEffect } from 'react';

import { Layout } from '@/components';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://velog.io/@rhseung224/posts';
  }, []);

  return (
    <Layout>
      <div className="py-16 sm:py-20 lg:py-24 text-center min-h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Redirecting to Blog...
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            잠시만 기다려주세요. 블로그로 이동 중입니다.
          </p>
        </div>
      </div>
    </Layout>
  );
};
