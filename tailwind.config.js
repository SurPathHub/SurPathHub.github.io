const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        home__title: "#d9e3ea",
        home__text: "#9BA9B4",
        "home__btn-green": "#51a22f",
        "footer__btn-green": "#51a32f",
        "home__btn-gray": "#33363a",
        "gray-subpath": "#151719",
        "gray-subpath-light": "#25282C",
      },

      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
