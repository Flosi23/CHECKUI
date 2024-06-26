import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@lib/utils";

export interface BadgeProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-sm bg-[rgba(0%,51.4%,0%,15%)] px-1 py-0.5 text-sm text-[#008300]",
          className,
        )}
        {...props}>
        {children}
      </Comp>
    );
  },
);
Badge.displayName = "Badge";

export { Badge };
