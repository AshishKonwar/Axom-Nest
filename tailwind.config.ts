import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B6E4F",
          50: "#E8F5F0",
          100: "#C5E5D8",
          200: "#8ECBB3",
          300: "#57B18E",
          400: "#239770",
          500: "#0B6E4F",
          600: "#095C42",
          700: "#074A35",
          800: "#053828",
          900: "#02261A",
          dark: "#065E40",
          light: "#1D8348",
        },
        accent: {
          DEFAULT: "#D4AF37",
          light: "#F5E6A9",
          dark: "#B8962E",
        },
        cream: {
          DEFAULT: "#FAFAF8",
          50: "#FDFDFB",
          100: "#FAFAF8",
          200: "#F0F0EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0B6E4F 0%, #1D8348 50%, #065E40 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5E6A9 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 110, 79, 0.15)",
        "glass-lg": "0 16px 48px 0 rgba(11, 110, 79, 0.2)",
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 40px rgba(11, 110, 79, 0.18)",
        gold: "0 4px 20px rgba(212, 175, 55, 0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
