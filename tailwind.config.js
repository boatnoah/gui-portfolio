/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "discord-primary": "#7289da",
        "discord-secondary": "#424549",
        "discord-tertiary": "#36393e",
        "discord-quaternary": "#282b30",
        "discord-quinary": "#1e2124",
        "discord-green": "#287e29",
      },
    },
  },
  plugins: [],
};
