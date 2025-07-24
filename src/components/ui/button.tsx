import { Slot } from "@radix-ui/react-slot";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import * as React from "react";

import { buttonVariants } from "./button.css";
import { buttonLightTheme, buttonDarkTheme } from "./button.theme.css";

import { cn } from "@/utils/cn";
import { useTheme } from "@/hooks/use-theme";

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  RecipeVariants<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(buttonLightTheme, buttonDarkTheme);
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(themeClass, buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
