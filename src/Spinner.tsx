import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@lib/utils";

const spinnerVariantsSvg = cva("h-10 w-10", {
  variants: {
    color: {
      primary: "stroke-primary",
      "primary-transparent": "stroke-primary",
      "on-primary": "stroke-on-primary",
      "on-surface": "stroke-on-surface-very-light",
    },
  },
});

const spinnerVariantsBackground = cva("fill-none stroke-[4] ring", {
  variants: {
    color: {
      primary: "stroke-gray-200",
      "primary-transparent": "stroke-transparent",
      "on-primary": "stroke-white opacity-20",
      "on-surface": "stroke-transparent",
    },
  },
});

export interface SpinnerProps
  extends Omit<HTMLAttributes<SVGSVGElement>, "color">,
    VariantProps<typeof spinnerVariantsSvg> {}

const Spinner = ({ color, className, ...props }: SpinnerProps) => {
  return (
    <svg viewBox="0 0 50 50" className={cn(spinnerVariantsSvg({ color, className }))} {...props}>
      <circle className={cn(spinnerVariantsBackground({ color }))} cx="25" cy="25" r="22.5" />
      <circle
        className="animate-spinner-line origin-center fill-none stroke-[4] [stroke-linecap:round]"
        cx="25"
        cy="25"
        r="22.5"
      />
    </svg>
  );
};
Spinner.displayName = "Spinner";

export { Spinner };
