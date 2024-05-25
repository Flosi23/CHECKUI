import { cn } from "@lib/utils";
/**
 * Primary UI component for user interaction
 */
export default function Button({ variant = "filled", iconPosition = "left", icon, children, className, ...props }) {
    const VARIANT_MAP = {
        filled: "bg-primary-variant text-on-primary fill-on-primary stroke-on-primary hover:bg-primary-variant-dim disabled:bg-primary-variant/50",
        outlined: "bg-surface text-on-surface-light fill-on-surface-light stroke-on-surface-light border border-[#CCCCCC]",
        "outlined-primary": "bg-surface text-primary fill-primary stroke-primary border border-primary",
    };
    const Icon = icon && <div className="min-h-5 min-w-5">{icon}</div>;
    return (<button className={cn("relative flex h-12.5 items-center justify-center gap-3 rounded-[3px] px-5 text-xl font-normal shadow-[0_2px_3px_0_rgba(0,0,0,0.10)]", VARIANT_MAP[variant], className)} {...props}>
      {Icon && iconPosition === "left" && Icon}
      {children}
      {Icon && iconPosition === "right" && Icon}
    </button>);
}
