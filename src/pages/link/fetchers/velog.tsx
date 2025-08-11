// velog.ts
// Fetcher for Velog profile extra info (mock)

export const velogFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  if (username === '@rhseung224') return '27 Posts';
  return undefined;
};
