const theme = require("./theme.json");
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./resources/css/*.css",
    "./resources/js/*.js",
    "./resources/blocks/**/*.js",
    "./safelist.txt",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: tailpress.colorMapper(
        tailpress.theme("settings.color.palette", theme)
      ),
      fontSize: tailpress.fontSizeMapper(
        tailpress.theme("settings.typography.fontSizes", theme)
      ),
      fontFamily: {
        serif: tailpress.theme("settings.typography.fontFamilies.serif", theme),
        sans: tailpress.theme("settings.typography.fontFamilies.sans", theme),
      },
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "782px",
      lg: tailpress.theme("settings.layout.contentSize", theme),
    },
  },
  plugins: [tailpress.tailwind],
};
