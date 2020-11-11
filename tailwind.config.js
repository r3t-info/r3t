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
        primary: "#FF5500",
        secondary: "#1D694E",
        accent: "#64C3B8",
        dark: "#052962",
        light: "#FFFAF0",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  variants: {},
  plugins: [],
};
