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
      fontSize: {
        "1.5xl": ["1.375rem", { lineHeight: "1.875rem" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
      },
      keyframes: {
        "spinner-rotate": {
          to: {
            transform: "rotate3d(0, 0, 1, 360deg)",
          },
        },
        "spinner-arc": {
          from: {
            strokeDasharray: "0 200",
            strokeDashoffset: "-0",
          },
          to: {
            strokeDasharray: "200 200",
            strokeDashoffset: "-140",
          },
        },
      },
      animation: {
        "spinner-line": "2156ms spinner-arc ease-in-out infinite, 1829ms spinner-rotate linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
} satisfies Config;
