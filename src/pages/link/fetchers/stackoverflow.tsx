// stackoverflow.ts
// Fetcher for Stack Overflow profile extra info (mock)

export const stackoverflowFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  if (username === 'Rhseung') return undefined; // 예시: 실제 API 연동 시 badge, reputation 등 반환 가능
  return undefined;
};
