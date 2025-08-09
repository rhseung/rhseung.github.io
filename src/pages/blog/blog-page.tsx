import { useEffect } from 'react';

import { Layout } from '@/components';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://velog.io/@rhseung224/posts';
  }, []);

  return (
    <Layout>
      <div className="py-16 text-center bg-neutral-50 dark:bg-neutral-950">
        <h1 className="text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          Redirecting to Blog...
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          잠시만 기다려주세요. 블로그로 이동 중입니다.
        </p>
      </div>
    </Layout>
  );
};
