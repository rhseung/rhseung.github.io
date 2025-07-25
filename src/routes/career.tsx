import { createFileRoute } from "@tanstack/react-router";
import { CareerPage } from "@/pages/career";

export const Route = createFileRoute("/career")({
  component: CareerPage,
});
