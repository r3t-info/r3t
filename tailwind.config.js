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
        // Petra
        primary: "#B71D9A",
        secondary: "#016287",
        accent: "#F2ACE5",
        dark: "#448790",
        light: "#EFEFEF",
        // Blue and Red
        primary: "#CB1D2A",
        secondary: "#2176EA",
        accent: "#ED7B8E",
        dark: "#003366",
        light: "#F7FAFC",
        // Jens 1
        primary: "#56deb5",
        secondary: "#5AB9EA",
        accent: "#84CEEB",
        dark: "#7853BB",
        light: "#e3e5fa",
        // Jens 2
        primary: "#009B00",
        secondary: "#31708E",
        accent: "#5085A5",
        dark: "#8FC1E3",
        light: "#F7F9FB",
        // Green
        primary: "#3300cc",
        secondary: "#FF1436",
        accent: "#ff8095",
        dark: "#008559",
        light: "#FFF",
        // Gray
        primary: "#494bf2",
        secondary: "#ec3399",
        accent: "#8192e6",
        dark: "#ece8ff",
        light: "#FFF",
        // Petra 2
        primary: "#991692",
        secondary: "#016287",
        accent: "#FFB8FF",
        dark: "#24A5B0",
        light: "#FCFCFC",
        // Petra 3
        primary: "#991692",
        secondary: "#016287",
        accent: "#FFB8FF",
        dark: "#219DA8",
        light: "#FCFCFC",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundImage: (theme) => ({
        "who-we-are": "url('/images/who-we-are.jpg')",
      }),
      backgroundOpacity: {
        85: "0.85",
      },
    },
  },
  variants: {},
  plugins: [],
};
