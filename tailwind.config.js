const { blackA, violet } = require("@radix-ui/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      colors: {
        ...blackA,
        ...violet,
      },
    },
  },
  plugins: [],
}
