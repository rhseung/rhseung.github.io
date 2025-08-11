// instagram.ts
// Fetcher for Instagram profile extra info (mock, since real API is restricted)

export const instagramFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  // 실제로는 서버 프록시나 크롤링 필요. 여기선 목업
  if (username === 'r._hseung') return '223 Followers';
  return undefined;
};
