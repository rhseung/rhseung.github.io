import {
  IconExternalLink,
  IconFileText,
  IconFolder,
} from '@tabler/icons-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Layout,
} from '@/components';
import { blogCategories, blogPosts } from '@/data/blog-posts';

export const BlogPage: React.FC = () => {
  const handleOpenBlog = () => {
    window.open(
      'https://velog.io/@rhseung224/posts',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <Layout>
      <div className="py-8 sm:py-12 lg:py-16 text-center">
        <h1 className="max-w-6xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          블로그
        </h1>
      </div>

      <div className="pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 통계 정보 */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
              총{' '}
              <span className="font-bold text-primary">
                {blogPosts.length}개
              </span>
              의 포스트가 있습니다.
            </p>
            <Button
              onClick={handleOpenBlog}
              variant="outline"
              className="group"
              size="sm"
            >
              <span>Velog에서도 보기</span>
              <IconExternalLink size={16} />
            </Button>
          </div>

          {/* 카테고리별 포스트 목록 */}
          <div className="space-y-12">
            {Object.entries(blogCategories).map(([category, posts]) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <IconFolder className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                    {category}
                  </h2>
                  <Badge variant="secondary" className="ml-2">
                    {posts.length}개
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <IconFileText
                            className="text-neutral-400 flex-shrink-0 mt-1"
                            size={18}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 빈 상태 */}
          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                🚧 블로그 포스트 준비 중
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                곧 흥미로운 글들로 채워질 예정입니다!
              </p>
              <Button onClick={handleOpenBlog} className="group">
                <span>Velog에서 보기</span>
                <IconExternalLink />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
