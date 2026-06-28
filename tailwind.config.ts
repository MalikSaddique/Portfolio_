import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: {
          blue: "#3B82F6",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
        },
        surface: {
          DEFAULT: "var(--surface)",
          glass: "var(--surface-glass)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #3B82F6 0%, #22D3EE 50%, #8B5CF6 100%)",
        "gradient-text": "linear-gradient(135deg, #3B82F6 0%, #22D3EE 60%, #8B5CF6 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.3)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.35)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
