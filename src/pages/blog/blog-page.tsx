import { useEffect } from 'react';

import { Layout } from '@/components';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://velog.io/@rhseung224/posts';
  }, []);

  return (
    <Layout>
      <h1>Redirecting to Blog...</h1>
      <p>잠시만 기다려주세요. 블로그로 이동 중입니다.</p>
    </Layout>
  );
};
