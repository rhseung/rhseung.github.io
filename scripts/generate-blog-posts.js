#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 구하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 블로그 디렉토리 경로
const BLOG_DIR = path.join(__dirname, '../src/data/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/blog-posts.ts');

// 마크다운 파일에서 제목과 excerpt 추출
function extractPostInfo(filePath, fileName, category) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // 파일명에서 제목 추출 (.md 제거)
  const title = fileName.replace('.md', '');

  // ID 생성 (카테고리 + 파일명)
  const id = `${category.toLowerCase()}-${fileName
    .replace('.md', '')
    .replace(/\s+/g, '-')
    .toLowerCase()}`;

  // 간단한 excerpt 추출 (첫 번째 문단이나 설명 부분)
  const lines = content.split('\n');
  let excerpt = '';

  // > [!abstract] 형태의 excerpt 찾기
  const abstractIndex = lines.findIndex((line) =>
    line.includes('> [!abstract]'),
  );
  if (abstractIndex !== -1) {
    // abstract 다음 줄부터 빈 줄이 나올 때까지 excerpt로 사용
    for (let i = abstractIndex + 2; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '' || line === '---') break;
      if (line.startsWith('>')) {
        excerpt += line.replace(/^>\s*/, '') + ' ';
      }
    }
  }

  // abstract가 없으면 첫 번째 문단 사용
  if (!excerpt) {
    for (const line of lines) {
      const trimmed = line.trim();
      if (
        trimmed &&
        !trimmed.startsWith('#') &&
        !trimmed.startsWith('**') &&
        !trimmed.startsWith('```') &&
        !trimmed.startsWith('---') &&
        trimmed.length > 20
      ) {
        excerpt =
          trimmed.substring(0, 150) + (trimmed.length > 150 ? '...' : '');
        break;
      }
    }
  }

  return {
    id,
    title,
    category,
    filePath: `/src/data/blog/${category}/${fileName}`,
    excerpt: excerpt.trim() || '블로그 포스트 내용을 확인하세요.',
  };
}

// 블로그 포스트 동적 추출
function extractBlogPosts() {
  const posts = [];

  try {
    // 블로그 디렉토리가 존재하지 않으면 빈 배열 반환
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn('블로그 디렉토리가 존재하지 않습니다:', BLOG_DIR);
      return posts;
    }

    // 블로그 디렉토리의 모든 하위 폴더 읽기 (. 으로 시작하는 폴더 제외)
    const categories = fs
      .readdirSync(BLOG_DIR, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith('.'))
      .map((dirent) => dirent.name);

    console.log('발견된 카테고리:', categories);

    for (const category of categories) {
      const categoryPath = path.join(BLOG_DIR, category);

      // 각 카테고리 폴더의 마크다운 파일들 읽기 (. 으로 시작하는 파일 제외)
      const files = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith('.md') && !file.startsWith('.'));

      console.log(
        `${category} 카테고리에서 ${files.length}개 파일 발견:`,
        files,
      );

      for (const file of files) {
        const filePath = path.join(categoryPath, file);
        try {
          const postInfo = extractPostInfo(filePath, file, category);
          posts.push(postInfo);
          console.log(`✓ ${category}/${file} 처리 완료`);
        } catch (error) {
          console.error(`✗ ${category}/${file} 처리 중 오류:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error('블로그 포스트 추출 중 오류:', error);
    return posts;
  }

  return posts;
}

// TypeScript 파일 생성
function generateBlogPostsFile(posts) {
  const content = `// 이 파일은 빌드 타임에 자동 생성됩니다. 직접 수정하지 마세요.
// 생성 시간: ${new Date().toISOString()}

// 블로그 포스트 인터페이스
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  filePath: string;
  excerpt?: string;
}

// 블로그 포스트 목록
export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};

// 카테고리별로 그룹화된 블로그 포스트
export const blogCategories = blogPosts.reduce((acc, post) => {
  const category = post.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(post);
  return acc;
}, {} as Record<string, BlogPost[]>);
`;

  // 출력 디렉토리가 없으면 생성
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
  console.log(`✓ ${OUTPUT_FILE} 생성 완료`);
}

// 메인 실행
function main() {
  console.log('🚀 블로그 포스트 데이터 생성 시작...');

  const posts = extractBlogPosts();
  console.log(`📝 총 ${posts.length}개의 포스트 발견`);

  generateBlogPostsFile(posts);

  console.log('✅ 블로그 포스트 데이터 생성 완료!');
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { extractBlogPosts, generateBlogPostsFile };
