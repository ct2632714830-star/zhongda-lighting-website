import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090807",
        ivory: "#F4EFE6",
        warmwhite: "#F8F7F4",
        champagne: "#C4A468",
        warmgray: "#A9A096",
        espresso: "#33251C",
        smoke: "#191715"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(200, 169, 106, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
