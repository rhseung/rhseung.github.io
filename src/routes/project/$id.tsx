import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { ProjectDetailPage } from '@/pages/project/project-detail-page';

export const Route = createFileRoute('/project/$id')({
  component: ProjectDetailPage,
  params: z.object({ id: z.coerce.number() }),
});
