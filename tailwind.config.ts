import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8ecf4",
          100: "#c5d0e5",
          200: "#9eb0d3",
          300: "#7790c1",
          400: "#5a77b5",
          500: "#3d5ea8",
          600: "#2d4a8a",
          700: "#1e3469",
          800: "#122048",
          900: "#0a1628",
          950: "#060d1a",
        },
        green: {
          50: "#e6faf0",
          100: "#b3f0d3",
          200: "#80e6b6",
          300: "#4ddc99",
          400: "#1ad27c",
          500: "#00c851",
          600: "#00a843",
          700: "#008835",
          800: "#006827",
          900: "#004819",
        },
        energy: "#00C851",
        dark: "#0a1628",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #060d1a 0%, #0a1628 40%, #0d2040 70%, #0a2d1a 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #00c851 0%, #00a843 50%, #008835 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        rotate: "rotate 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 200, 81, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 200, 81, 0.7)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "green-glow": "0 0 30px rgba(0, 200, 81, 0.4)",
        "green-glow-lg": "0 0 60px rgba(0, 200, 81, 0.3)",
        "navy-card": "0 4px 24px rgba(6, 13, 26, 0.4)",
        "glass": "0 8px 32px rgba(6, 13, 26, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
