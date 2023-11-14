/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "red-main": {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc0c1",
          300: "#ff9495",
          400: "#ff5758",
          500: "#ff2325",
          600: "#ff090b",
          700: "#d70002",
          800: "#b10304",
          900: "#920a0b",
          950: "#500001",
        },
      },
    },
  },
  plugins: [],
};
