import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f6f6f3",
        orange: "#ffa500",
        midgray: "#7d7d7d",
        darkorange: "#734a00",
        textblack: "131313",
        lightorange: "#FFF7E8",
        lightgray: "#F1F1F1",
        darkgray: "#F1F1F1",
        lightgreen: "#25CD25",
        red: "#EB5050",
        midorange: "#FFCD71",
        darkred: "B01212"

      },
    },
  },
  plugins: [],
} satisfies Config;
