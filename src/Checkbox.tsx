import * as React from "react";
import { ReactNode, useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@lib/utils";
import CheckboxCheckmark from "@lib/icons/CheckboxCheckmark";
import * as Label from "@radix-ui/react-label";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * The label for the checkbox. If not provided, the checkbox will be rendered without a label.
   */
  label?: ReactNode;
  /**
   * The error message to display below the checkbox. If not provided, no error message will be displayed.
   */
  error?: ReactNode;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const usedId = id || generatedId;

    return (
      <div className={"flex flex-col gap-1"}>
        <div className={"flex items-center gap-3"}>
          <CheckboxPrimitive.Root
            id={usedId}
            ref={ref}
            className={cn(
              `peer flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px]
         border border-outline
         disabled:cursor-not-allowed disabled:bg-surface-container
         data-[state=checked]:bg-primary`,
              className,
            )}
            aria-invalid={!!error}
            aria-errormessage={`${usedId}-error`}
            {...props}>
            <CheckboxPrimitive.Indicator>
              <CheckboxCheckmark className="w-[13px] fill-on-primary" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          {label && (
            <Label.Root
              className={"text-lg leading-none text-on-surface peer-disabled:cursor-not-allowed"}
              htmlFor={usedId}>
              {label}
            </Label.Root>
          )}
        </div>

        {error && (
          <span id={`${usedId}-error`} className={"text-sm leading-4 text-error"}>
            {error}
          </span>
        )}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
