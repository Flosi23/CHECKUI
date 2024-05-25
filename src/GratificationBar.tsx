import React, { ComponentPropsWithoutRef, forwardRef, MouseEventHandler, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { HelptextOutline, InfoCircle } from "@lib/icons";
import { cn } from "@lib/utils";

const gratificationBarVariants = cva(
  `flex items-center justify-between px-3 py-1 text-sm leading-4
  data-[invalid]:text-error data-[invalid]:stroke-error data-[invalid]:stroke-fill`,
  {
    variants: {
      variant: {
        regular: "bg-[#C1E3E3] text-[#005C61] stroke-[#005C61] fill-[#005C61]",
        goldclub: "bg-[#EBD49D] text-[#8F6E0B] stroke-[#8F6E0B] fill-[#8F6E0B]",
      },
      lines: {
        1: "h-[28px]",
        2: "h-[42px]",
      },
    },
    defaultVariants: {
      variant: "regular",
      lines: 1,
    },
  },
);

export interface GratificationBarProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof gratificationBarVariants> {
  icon?: ReactNode;
  /**
   * If set to `true`, the input will be displayed with an error style and the icon (if set) will be replaced by an error icon.
   * If no icon is set, the error icon will be displayed on the left side of the input.
   */
  error?: boolean;
  /**
   * An event handler that is called when the user clicks on the help icon displayed on the right side of the input.
   * This help icon is only displayed if the `helpOverlayContent` prop is set.
   *
   * This help icon will replace a right aligned icon if existent.
   */
  onClickHelpIcon?: MouseEventHandler<HTMLButtonElement>;
}

const GratificationBar = forwardRef<HTMLDivElement, GratificationBarProps>(
  ({ className, icon, error, variant, lines, children, onClickHelpIcon, ...props }, ref) => {
    const displayedIcon = error ? <InfoCircle /> : icon;

    return (
      <div
        ref={ref}
        className={cn(
          gratificationBarVariants({ variant, lines }),
          error && "fill-error stroke-error text-error",
          className,
        )}
        {...props}>
        <div className={"flex items-center"}>
          {displayedIcon && <div className={"mr-2.5 w-5"}>{displayedIcon}</div>}
          {children}
        </div>
        {onClickHelpIcon && (
          <button onClick={onClickHelpIcon}>
            <HelptextOutline className={"ml-2 h-5 w-5 stroke-0"} />
          </button>
        )}
      </div>
    );
  },
);
GratificationBar.displayName = "GratificationBar";

export { GratificationBar };
