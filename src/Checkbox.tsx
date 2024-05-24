import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "~/utils";
import CheckboxCheckmark from "~/icons/CheckboxCheckmark";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `peer flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px]
       border border-outline
       disabled:cursor-not-allowed disabled:bg-surface-container
       data-[state=checked]:bg-primary`,
      className,
    )}
    {...props}>
    <CheckboxPrimitive.Indicator>
      <CheckboxCheckmark className="w-[13px] fill-on-primary" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
