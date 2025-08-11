// npm.ts
// Fetcher for NPM profile extra info (mock)

export const npmFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  if (username === '~rhseung') return '3 Packages';
  return undefined;
};
