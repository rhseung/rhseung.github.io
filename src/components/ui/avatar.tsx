import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/utils";
import { useTheme } from "@/hooks";
import * as avatarStyles from "./avatar.css";
import {
  avatarVars,
  avatarLightTheme,
  avatarDarkTheme,
} from "./avatar.theme.css";

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: keyof typeof avatarVars.size; // Use the AvatarSize type from avatar.css
}

function Avatar({ className, size, ...props }: AvatarProps) {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(avatarLightTheme, avatarDarkTheme);

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        themeClass,
        avatarStyles.avatarVariants({ size }),
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(avatarStyles.image, className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarStyles.fallback, className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
