#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 구하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 설정
const BLOG_REPO_URL = 'https://github.com/rhseung/blog.git';
const TEMP_CLONE_DIR = path.join(__dirname, '../temp/blog-clone');
const BLOG_DIR = path.join(__dirname, '../src/data/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/blog-posts.ts');

// Git 리포지토리 클론 또는 업데이트
async function cloneOrUpdateBlogRepo() {
  try {
    console.log('📦 블로그 리포지토리 동기화 중...');

    // Git이 설치되어 있는지 확인
    try {
      execSync('git --version', { stdio: 'pipe' });
    } catch (error) {
      console.warn('⚠️ Git이 설치되지 않았습니다. 로컬 파일을 사용합니다.');
      return false;
    }

    // temp 디렉토리 생성
    const tempDir = path.dirname(TEMP_CLONE_DIR);
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // 이미 클론된 디렉토리가 있으면 git pull, 없으면 git clone
    if (fs.existsSync(TEMP_CLONE_DIR)) {
      console.log('🔄 기존 리포지토리 업데이트 중...');
      try {
        const result = execSync('git pull origin main', {
          cwd: TEMP_CLONE_DIR,
          stdio: 'pipe',
          encoding: 'utf8',
        });
        console.log('✅ 리포지토리 업데이트 완료');
        if (result.includes('Already up to date')) {
          console.log('📍 이미 최신 버전입니다');
        }
      } catch (error) {
        console.log('⚠️ git pull 실패, 리포지토리를 다시 클론합니다...');
        // 기존 디렉토리 삭제 후 다시 클론
        fs.rmSync(TEMP_CLONE_DIR, { recursive: true, force: true });
        execSync(`git clone --depth 1 ${BLOG_REPO_URL} ${TEMP_CLONE_DIR}`, {
          stdio: 'pipe',
        });
        console.log('✅ 리포지토리 클론 완료');
      }
    } else {
      console.log('📥 새 리포지토리 클론 중...');
      execSync(`git clone --depth 1 ${BLOG_REPO_URL} ${TEMP_CLONE_DIR}`, {
        stdio: 'pipe',
      });
      console.log('✅ 리포지토리 클론 완료');
    }

    return true;
  } catch (error) {
    console.error('❌ Git 리포지토리 동기화 실패:', error.message);
    console.log('💡 인터넷 연결이나 Git 설정을 확인해주세요.');
    return false;
  }
}

// 클론된 리포지토리에서 블로그 파일들 복사
function syncBlogFiles() {
  try {
    console.log('📂 블로그 파일 동기화 중...');

    // 기존 블로그 디렉토리 삭제 (숨김 파일 제외)
    if (fs.existsSync(BLOG_DIR)) {
      const existingItems = fs.readdirSync(BLOG_DIR);
      for (const item of existingItems) {
        if (!item.startsWith('.')) {
          const itemPath = path.join(BLOG_DIR, item);
          fs.rmSync(itemPath, { recursive: true, force: true });
        }
      }
    } else {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
    }

    // 클론된 리포지토리에서 파일 복사 (. 으로 시작하는 파일/폴더 제외)
    if (fs.existsSync(TEMP_CLONE_DIR)) {
      const clonedItems = fs.readdirSync(TEMP_CLONE_DIR);
      for (const item of clonedItems) {
        if (!item.startsWith('.')) {
          const sourcePath = path.join(TEMP_CLONE_DIR, item);
          const targetPath = path.join(BLOG_DIR, item);

          if (fs.statSync(sourcePath).isDirectory()) {
            copyDirRecursively(sourcePath, targetPath);
          } else if (item.endsWith('.md')) {
            fs.copyFileSync(sourcePath, targetPath);
          }
        }
      }
      console.log('✅ 블로그 파일 동기화 완료');
    }
  } catch (error) {
    console.error('❌ 블로그 파일 동기화 실패:', error.message);
  }
}

// 디렉토리 재귀적 복사 (숨김 파일 제외)
function copyDirRecursively(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);
  for (const item of items) {
    if (!item.startsWith('.')) {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);

      if (fs.statSync(srcPath).isDirectory()) {
        copyDirRecursively(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// 임시 파일 정리
function cleanup() {
  try {
    if (fs.existsSync(TEMP_CLONE_DIR)) {
      fs.rmSync(TEMP_CLONE_DIR, { recursive: true, force: true });
      console.log('🧹 임시 파일 정리 완료');
    }
  } catch (error) {
    console.warn('⚠️ 임시 파일 정리 중 오류:', error.message);
  }
}

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
async function main() {
  console.log('🚀 블로그 포스트 데이터 생성 시작...');

  try {
    // 1. Git 리포지토리 클론/업데이트
    const syncSuccess = await cloneOrUpdateBlogRepo();

    if (syncSuccess) {
      // 2. 블로그 파일 동기화
      syncBlogFiles();
    } else {
      console.log('⚠️ Git 동기화 실패, 기존 로컬 파일 사용');
    }

    // 3. 블로그 포스트 추출
    const posts = extractBlogPosts();
    console.log(`📝 총 ${posts.length}개의 포스트 발견`);

    // 4. TypeScript 파일 생성
    generateBlogPostsFile(posts);

    console.log('✅ 블로그 포스트 데이터 생성 완료!');
  } catch (error) {
    console.error('❌ 블로그 포스트 생성 중 오류 발생:', error.message);

    // 오류 발생 시에도 기존 파일로 처리 시도
    console.log('🔄 기존 로컬 파일로 재시도...');
    try {
      const posts = extractBlogPosts();
      generateBlogPostsFile(posts);
      console.log('✅ 기존 파일로 블로그 포스트 데이터 생성 완료');
    } catch (fallbackError) {
      console.error('❌ 완전 실패:', fallbackError.message);
      process.exit(1);
    }
  } finally {
    // 5. 임시 파일 정리
    cleanup();
  }
}

// 스크립트 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  // 명령줄 인수 처리
  const args = process.argv.slice(2);
  const skipGit = args.includes('--skip-git') || args.includes('--local-only');

  if (skipGit) {
    console.log('🏠 로컬 파일만 사용하여 실행합니다...');
    // Git 동기화 없이 로컬 파일만 사용
    const posts = extractBlogPosts();
    generateBlogPostsFile(posts);
    console.log('✅ 로컬 파일로 블로그 포스트 데이터 생성 완료!');
  } else {
    main();
  }
}

export { extractBlogPosts, generateBlogPostsFile, cloneOrUpdateBlogRepo };
