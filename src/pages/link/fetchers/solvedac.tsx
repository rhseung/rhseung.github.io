import { cn } from '@/utils/cn';

const API_BASE = '/api/solvedac';

const tierMap = [
  undefined,
  'Bronze V',
  'Bronze IV',
  'Bronze III',
  'Bronze II',
  'Bronze I',
  'Silver V',
  'Silver IV',
  'Silver III',
  'Silver II',
  'Silver I',
  'Gold V',
  'Gold IV',
  'Gold III',
  'Gold II',
  'Gold I',
  'Platinum V',
  'Platinum IV',
  'Platinum III',
  'Platinum II',
  'Platinum I',
  'Diamond V',
  'Diamond IV',
  'Diamond III',
  'Diamond II',
  'Diamond I',
  'Ruby V',
  'Ruby IV',
  'Ruby III',
  'Ruby II',
  'Ruby I',
  'Master',
];

const tierColor = (tier: number) => {
  if (tier == 1) return '#9d4900';
  if (tier == 2) return '#a54f00';
  if (tier == 3) return '#ad5600';
  if (tier == 4) return '#b55d0a';
  if (tier == 5) return '#c67739';
  if (tier == 6) return '#38546e';
  if (tier == 7) return '#3d5a74';
  if (tier == 8) return '#435f7a';
  if (tier == 9) return '#496580';
  if (tier == 10) return '#4e6a86';
  if (tier == 11) return '#d28500';
  if (tier == 12) return '#df8f00';
  if (tier == 13) return '#ec9a00';
  if (tier == 14) return '#f9a518';
  if (tier == 15) return '#ffb028';
  if (tier == 16) return '#00c78b';
  if (tier == 17) return '#00d497';
  if (tier == 18) return '#27e2a4';
  if (tier == 19) return '#3ef0b1';
  if (tier == 20) return '#51fdbd';
  if (tier == 21) return '#009ee5';
  if (tier == 22) return '#00a9f0';
  if (tier == 23) return '#00b4fc';
  if (tier == 24) return '#2bbfff';
  if (tier == 25) return '#41caff';
  if (tier == 26) return '#e0004c';
  if (tier == 27) return '#ea0053';
  if (tier == 28) return '#f5005a';
  if (tier == 29) return '#ff0062';
  if (tier == 30) return '#ff3071';
  if (tier == 31) return '#b300e0';
  return undefined;
};

export const solvedacFetcher = async (
  username: string,
): Promise<React.ReactNode | undefined> => {
  try {
    const res = await fetch(
      `${API_BASE}/user/show?handle=${encodeURIComponent(username)}`,
    );
    if (!res.ok) return undefined;
    const user = await res.json();

    if (user) {
      const tier = tierMap[user.tier] || 'Unrated';
      const color = tierColor(user.tier);

      return (
        <span
          className={cn(
            'inline-flex items-center gap-1 font-semibold',
            'px-2 py-0.5 rounded-full font-bold text-xs',
          )}
          style={{
            color,
            background: color ? color + '22' : 'rgba(0,0,0,0.07)',
          }}
        >
          {tier}
        </span>
      );
    }
    return undefined;
  } catch {
    return undefined;
  }
};
