/** @format */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extends: {},
    colors: {
      ...colors,
      danger: "#E4033B",
      warning: "#E9B200",
      success: "#39CD62",
      dark: "#545F7D",
      primary: "#213F7D",
      secondary: "#39CDCC",
    },
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      avenia: ["Avenia", "sans-serif"],
      avenia_bold: ["Avenia-Bold", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
