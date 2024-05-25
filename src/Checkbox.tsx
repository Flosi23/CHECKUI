import * as React from "react";
import { ReactNode, useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@lib/utils";
import CheckboxCheckmark from "@lib/icons/CheckboxCheckmark";
import * as Label from "@radix-ui/react-label";
import { HelptextOutline } from "@lib/icons";

export interface BoxedCheckboxGroupProps extends CheckboxGroupProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  onClickHelpIcon?: React.MouseEventHandler<HTMLButtonElement>;
}

const BoxedCheckboxGroup = React.forwardRef<
  React.ElementRef<typeof CheckboxGroup>,
  BoxedCheckboxGroupProps
>(({ className, label, error, onClickHelpIcon, id, ...props }, ref) => {
  const generatedId = useId();
  const usedId = id || generatedId;

  return (
    <div className="flex flex-col">
      {label && (
        <Label.Root
          htmlFor={usedId}
          className={cn("mb-3 flex items-center justify-between text-xl text-on-surface")}>
          {label}

          {onClickHelpIcon && (
            <button onClick={onClickHelpIcon} className="mr-4">
              <HelptextOutline className="h-5 w-5 fill-on-surface" />
            </button>
          )}
        </Label.Root>
      )}
      <CheckboxGroup
        id={usedId}
        className="rounded-[5px] border border-outline data-[disabled]:bg-surface-container"
        aria-invalid={!!error}
        aria-errormessage={`${usedId}-error`}
        {...props}
        ref={ref}
      />
      {error && (
        <span id={`${usedId}-error`} className="mt-1 text-sm leading-4 text-error">
          {error}
        </span>
      )}
    </div>
  );
});
BoxedCheckboxGroup.displayName = "BoxedCheckboxGroup";

interface CheckboxGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "row" | "column";
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ className, direction = "column", ...props }, ref) => {
    return (
      <div
        className={cn(
          "grid divide-outline-variant",
          direction === "column" && "grid-flow-row divide-y px-4 *:py-4.5",
          direction === "row" && "grid-flow-col divide-x py-2.5 *:px-4 *:py-2",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
CheckboxGroup.displayName = "CheckboxGroup";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * The error message to display below the checkbox. If not provided, no error message will be displayed.
   */
  error?: ReactNode;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, children, error, id, ...props }, ref) => {
    const generatedId = useId();
    const usedId = id || generatedId;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <CheckboxPrimitive.Root
            id={usedId}
            ref={ref}
            className={cn(
              `peer flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px]
         border border-outline
         disabled:cursor-not-allowed disabled:bg-surface-container
         data-[state=checked]:border-primary data-[state=checked]:bg-primary`,
              className,
            )}
            aria-invalid={!!error}
            aria-errormessage={`${usedId}-error`}
            {...props}>
            <CheckboxPrimitive.Indicator>
              <CheckboxCheckmark className="w-[13px] fill-on-primary" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          {children && (
            <Label.Root
              className="text-lg leading-none text-on-surface peer-disabled:cursor-not-allowed peer-disabled:text-on-surface-light"
              htmlFor={usedId}>
              {children}
            </Label.Root>
          )}
        </div>

        {error && (
          <span id={`${usedId}-error`} className="text-sm leading-4 text-error">
            {error}
          </span>
        )}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { BoxedCheckboxGroup, CheckboxGroup, Checkbox };
