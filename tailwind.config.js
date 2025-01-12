/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  plugins: [],
  theme: {
    fontFamily: {
      display: "Playfair Display",
      body: "Open Sans",
    },
    colors: {
      seashell: "#FFF3EB",
      red: "#9C2E2E",
      gray: "#707070",
      white: "#FFFFFF",
      black: "#1A1A1A",
      lightSeashell: "#FFFBF6",
    },
  },
};
