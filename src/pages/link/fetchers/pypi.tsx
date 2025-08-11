// pypi.ts
// Fetcher for PyPI profile extra info (mock)

export const pypiFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  if (username === 'rhseung') return '1 Package';
  return undefined;
};
