/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "rgb(var(--bg-primary) / <alpha-value>)",
        surface: "rgb(var(--bg-secondary) / <alpha-value>)",
        inverse: "rgb(var(--bg-inverse) / <alpha-value>)",
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        "on-inverse": "rgb(var(--text-on-inverse) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "on-accent": "rgb(var(--color-on-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
