// baekjoon.ts
// Fetcher for Baekjoon OJ profile extra info (mock)

export const baekjoonFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const res = await fetch(
      `/api/solvedac?query=${encodeURIComponent(username)}`,
    );
    if (!res.ok) return undefined;
    const data = await res.json();
    if (data && data.items && data.items.length > 0) {
      const solvedCount = data.items[0].solvedCount;
      return `${solvedCount} Solved`;
    }
    return undefined;
  } catch {
    return undefined;
  }
};
