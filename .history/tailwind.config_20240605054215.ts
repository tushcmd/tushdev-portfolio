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
        primary: "#0F0F0F",
        heading: "#FFFFFF",
        dimGray: "D1D5DB",
        iconBg: "#9CA3AF",
        iconText: "202020",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    animation: {
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    },
    keyframes: {
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
    },
  },
  plugins: [],
};
export default config;
