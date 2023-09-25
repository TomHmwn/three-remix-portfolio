import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#151515",
      white: "#ffffff",
      marble: "#eae7e3",
      "light-grey": "#c4c1bf",
    },
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
