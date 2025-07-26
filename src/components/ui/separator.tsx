import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils/index";
import { useTheme } from "@/hooks/use-theme";
import * as separatorStyles from "./separator.css";
import { separatorLightTheme, separatorDarkTheme } from "./separator.theme.css";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(separatorLightTheme, separatorDarkTheme);

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(themeClass, separatorStyles.root, className)}
      {...props}
    />
  );
}

export { Separator };
