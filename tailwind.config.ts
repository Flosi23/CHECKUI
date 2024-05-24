import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "Helvetica", "ui-sans-sarif"],
        verdana: ["Verdana", "Arial", "Helvetica", "ui-sans-sarif"],
      },
      colors: {
        "on-secondary": "hsl(var(--on-secondary))",
        primary: "hsl(var(--primary))",
        "primary-variant": "hsl(var(--primary-variant))",
        "primary-variant-dim": "hsl(var(--primary-variant-dim))",
        "primary-container": "hsl(var(--primary-container))",
        "on-primary": "hsl(var(--on-primary))",
        "surface-primary": "hsl(var(--surface-primary))",
        surface: "hsl(var(--surface))",
        "surface-dim": "hsl(var(--surface-dim))",
        "surface-container": "hsl(var(--surface-container))",
        "surface-variant": "hsl(var(--surface-variant))",
        "on-surface": "hsl(var(--on-surface))",
        "on-surface-light": "hsl(var(--on-surface-light))",
        "on-surface-very-light": "hsl(var(--on-surface-very-light))",
        outline: "hsl(var(--outline))",
        "outline-variant": "hsl(var(--outline-variant))",
        error: "hsl(var(--error))",
        "on-error": "hsl(var(--on-error))",
        warning: "hsl(var(--warning))",
        "on-warning": "hsl(var(--on-warning))",
        success: "hsl(var(--success))",
        "on-success": "hsl(var(--on-success))",
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
} satisfies Config;
