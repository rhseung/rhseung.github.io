import { IconMoon, IconShadow, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components';
import { useIsMounted } from '@/hooks';

const themes = [
  { key: 'light' as const, icon: IconSun, label: 'Light' },
  { key: 'dark' as const, icon: IconMoon, label: 'Dark' },
  { key: 'system' as const, icon: IconShadow, label: 'System' },
];

export const ThemeSwitch: React.FC = () => {
  const { getIsMounted } = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!getIsMounted()) return null;

  const idx = themes.findIndex((t) => t.key === theme);
  const Icon = themes[idx].icon;

  const toggle = () => {
    const nextTheme = themes[(idx + 1) % themes.length];
    setTheme(nextTheme.key);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 sm:h-10 sm:w-10"
      onClick={toggle}
      aria-label={`Switch to ${themes[(idx + 1) % themes.length].label} theme`}
    >
      <Icon size={16} className="sm:hidden" />
      <Icon size={20} className="hidden sm:block" />
    </Button>
  );
};
