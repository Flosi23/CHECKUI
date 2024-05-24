import * as React from "react";
import { useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Label from "@radix-ui/react-label";

import { cn } from "@lib/utils";

export interface BoxedRadioGroupProps extends RadioGroupProps {
  error?: React.ReactNode;
}

const BoxedRadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, BoxedRadioGroupProps>(
  ({ className, error, id, ...props }, ref) => {
    const generatedId = useId();
    const usedId = id || generatedId;

    return (
      <div className={"flex flex-col gap-1"}>
        <RadioGroup
          id={usedId}
          className={"rounded-[5px] border border-outline data-[disabled]:bg-surface-container"}
          aria-invalid={!!error}
          aria-errormessage={`${usedId}-error`}
          {...props}
          ref={ref}
        />
        {error && (
          <span id={`${usedId}-error`} className={"text-sm leading-4 text-error"}>
            {error}
          </span>
        )}
      </div>
    );
  },
);
BoxedRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  direction?: "row" | "column";
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, direction = "column", ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn(
          "grid divide-outline-variant",
          direction === "column" && "grid-flow-row divide-y",
          direction === "row" && "grid-flow-col divide-x",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
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
          `my-4.5 ml-4 peer flex h-5.5 w-5.5 items-center justify-center rounded-full border border-outline bg-surface text-primary disabled:cursor-not-allowed disabled:bg-surface-container
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
          className={"mr-4 text-lg text-on-surface peer-disabled:cursor-not-allowed peer-disabled:text-on-surface-light"}
          htmlFor={usedId}>
          {children}
        </Label.Root>
      )}
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, BoxedRadioGroup };
