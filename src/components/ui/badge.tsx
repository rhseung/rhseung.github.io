import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils";
import { useTheme } from "@/hooks/use-theme";
import * as badgeStyles from "./badge.css";
import { badgeLightTheme, badgeDarkTheme } from "./badge.theme.css";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "default" | "secondary" | "destructive" | "outline";
  asChild?: boolean;
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(badgeLightTheme, badgeDarkTheme);
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        themeClass,
        badgeStyles.badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}

export { Badge };
