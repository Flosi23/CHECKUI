import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "filled" | "outlined" | "outlined-primary";

type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends HTMLButtonProps {
  /**
   * Which variant should be used? Defaults to "filled"
   */
  variant?: ButtonVariant;
  /**
   * If set, the button will additionally display an icon.
   */
  icon?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({ variant = "filled", icon, children, className, ...props }: ButtonProps) {
  const VARIANT_MAP: Record<ButtonVariant, string> = {
    filled:
      "bg-primary-variant text-on-primary fill-on-primary stroke-on-primary hover:bg-primary-variant-dim disabled:bg-primary-variant/50",
    outlined: "bg-surface text-on-surface-light fill-on-surface-light stroke-on-surface-light border border-[#CCCCCC]",
    "outlined-primary": "bg-surface text-primary fill-primary stroke-primary border border-primary",
  };

  return (
    <button
      className={twMerge(
        "relative flex h-12.5 items-center justify-center gap-3 rounded-[3px] px-5 text-xl font-normal shadow-[0_2px_3px_0_rgba(0,0,0,0.10)]",
        VARIANT_MAP[variant],
        className,
      )}
      {...props}>
      {icon && <div className="min-h-5 min-w-5">{icon}</div>}
      {children}
    </button>
  );
}
