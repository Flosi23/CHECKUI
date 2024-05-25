import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { InfoCircle } from "@lib/icons";

const labelVariants = cva("flex items-center px-2 py-0.5 rounded-[14px] text-sm", {
  variants: {
    variant: {
      regular:
        "bg-surface-primary/15 text-surface-primary stroke-surface-primary fill-surface-primary",
      bestseller: "bg-warning/15 text-warning stroke-warning fill-warning",
    },
  },
  defaultVariants: {
    variant: "regular",
  },
});

export interface LabelProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof labelVariants> {
  showInfoIcon?: boolean;
  asChild?: boolean;
}

const Label = forwardRef<HTMLDivElement, LabelProps>(
  ({ className, variant, children, asChild, showInfoIcon, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp ref={ref} className={labelVariants({ variant, className })} {...props}>
        <Slottable>{children}</Slottable>
        {showInfoIcon && <InfoCircle className={"ml-2 h-3.5 w-3.5"} />}
      </Comp>
    );
  },
);
Label.displayName = "Label";

export { Label };
