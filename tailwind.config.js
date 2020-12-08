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
        primary: "#F50057",
        secondary: "#E91E63",
        titleOnLight: "#1A237E",
        accent: "#E91E63",
        dark: "#FBE9E7",
        light: "#FFFAFA",
      },
      backgroundImage: (theme) => ({
        "who-we-are": "url('/images/background/who-we-are.webp'), url('/images/background/who-we-are.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
