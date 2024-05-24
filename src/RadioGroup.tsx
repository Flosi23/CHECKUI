import * as React from "react";
import { useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Label from "@radix-ui/react-label";

import { cn } from "@lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col divide-y divide-outline-variant", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, id, children, ...props }, ref) => {
  const generatedId = useId();
  const usedId = id || generatedId;

  return (
    <div className={"flex items-center gap-3"}>
      <RadioGroupPrimitive.Item
        id={usedId}
        ref={ref}
        className={cn(
          `peer my-4 flex h-5.5 w-5.5 items-center justify-center rounded-full border border-outline text-primary disabled:cursor-not-allowed
         data-[state=checked]:border-primary`,
          className,
        )}
        {...props}>
        <RadioGroupPrimitive.Indicator>
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {children && (
        <Label.Root
          className={"text-lg text-on-surface peer-disabled:cursor-not-allowed peer-disabled:text-on-surface-light"}
          htmlFor={usedId}>
          {children}
        </Label.Root>
      )}
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
