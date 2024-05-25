import React, { ReactNode } from "react";
import { cn } from "@lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

type IconPosition = "left" | "right";

const buttonVariants = cva(
  "relative flex h-12.5 items-center justify-center gap-3 rounded-[3px] px-5 text-xl font-normal shadow-[0_2px_3px_0_rgba(0,0,0,0.10)]",
  {
    variants: {
      variant: {
        filled:
          "bg-primary-variant text-on-primary fill-on-primary stroke-on-primary hover:bg-primary-variant-dim disabled:bg-primary-variant/50",
        outlined:
          "bg-surface text-on-surface-light fill-on-surface-light stroke-on-surface-light border border-[#CCCCCC]",
        "outlined-primary":
          "bg-surface text-primary fill-primary stroke-primary border border-primary",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If set, the button will additionally display an icon.
   */
  icon?: ReactNode;
  /**
   * The position of the icon. Defaults to "left"
   */
  iconPosition?: IconPosition;

  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      iconPosition = "left",
      icon,
      children,
      className,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const Icon = icon && <div className="min-h-5 min-w-5">{icon}</div>;

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            className,
          }),
        )}
        {...props}>
        {Icon && iconPosition === "left" && Icon}
        <Slottable>{children}</Slottable>
        {Icon && iconPosition === "right" && Icon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button };
