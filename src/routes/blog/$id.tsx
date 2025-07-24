import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/home/home-page";

export const Route = createFileRoute("/blog/$id")({
  component: HomePage,
});
