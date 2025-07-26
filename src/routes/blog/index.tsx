import { createFileRoute } from "@tanstack/react-router";
// import { BlogPage } from "@/pages/blog";
import { NotFoundPage } from "@/pages/fallback";

export const Route = createFileRoute("/blog/")({
  component: NotFoundPage,
});
