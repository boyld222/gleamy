import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        marquee: "marquee 60s linear infinite",
      },
      transformOrigin: {
        "top-left-4/5-1": "50% 50%",
        "top-left-7/10-1": "57.5% 50%",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        ".text-orientation-mixed": {
          "text-orientation": "mixed",
        },
        ".rotate-x-90": {
          transform: "rotateX(90deg)",
        },
        ".-rotate-x-90": {
          transform: "rotateX(-90deg)",
        },
        ".-rotate-x-90-translate-y-12": {
          transform: "rotateX(-90deg) translateY(12px)",
        },
        ".-rotate-x-90-translate-y-8": {
          transform: "rotateX(-90deg) ",
        },
        ".first-letter-text": {
          "-webkit-text-fill-color": "black",
          "-webkit-text-stroke-width": "2px",
        },
        ".transparent-border-text": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke-width": "2px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
