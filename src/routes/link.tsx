import { createFileRoute } from '@tanstack/react-router';

import { LinkPage } from '@/pages/link';

export const Route = createFileRoute('/link')({
  component: LinkPage,
});
