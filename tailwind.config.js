const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Munken Sans", ...defaultTheme.fontFamily.sans],
        system: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#FF9500",
        "secondary": "#2A4365",
        "accent": "#287343",
        "dark": "#1A202C",
        "light": "#FFFAF0",
      }
    },
  },
  variants: {},
  plugins: [],
};
