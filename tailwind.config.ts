import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          900: "#0D0104",
          800: "#1A0307",
          700: "#2D080F",
        },
        gold: {
          500: "#D4AF37",
          400: "#F3E5AB",
          300: "#FFD700",
        },
        cream: "#F5E6C8",
        rose: "#D1A3B0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cinzel", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;