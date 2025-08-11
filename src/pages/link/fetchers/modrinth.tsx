// modrinth.ts
// Fetcher for Modrinth profile extra info (mock)

export const modrinthFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  if (username === 'Rhseung') return '75 Downloads';
  return undefined;
};
