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
        /* Semantic colors */
        "on-secondary": "#ffffff",
        primary: "#005EA8",
        "primary-variant": "#0271C2",
        "primary-variant-dim": "#015FA4",
        "primary-container": "#ECF7FD",
        "on-primary": "#ffffff",
        "surface-primary": "#063773",
        surface: "#ffffff",
        "surface-dim": "#efeff4",
        "surface-container": "#F4F4F4",
        "on-surface": "#333333",
        "on-surface-light": "#666666",
        "on-surface-very-light": "#999999",
        outline: "#B4B4B4",
        "outline-variant": "#DCDCDC",
        // active color
        active: "#E30613",
        "on-active": "#ffffff",
        // error colors
        error: "#c82d2d",
        "on-error": "#ffffff",
        // warning colors
        warning: "#F07C00",
        "on-warning": "#ffffff",
        // success colors
        success: "#7AB51E",
        "on-success": "#ffffff",
        // gratification bar colors
        "surface-gratification": "#C1E3E3",
        "on-surface-gratification": "#005C61",
      },
      fontSize: {
        "1.5xl": ["1.375rem", { lineHeight: "1.875rem" }],
      },
      width: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
      },
      height: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
      },
      padding: {
        "4.25": "1.0625rem",
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
} satisfies Config;
