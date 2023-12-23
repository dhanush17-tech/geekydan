const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Include all file types that contain Tailwind classes
  theme: {
    extend: {
      screens: {
        "nav-hidden": "830px",
        md: "904px",
      },

      boxShadow: {
        glow: "0 0 30vw 20vw rgba(49, 119, 255, 0.3)", // Adjust the color and spread to match your glow
      },
      colors: {
        backgroundColor: "#0a192f",
        blue: "#319CFF",
      },

      fontWeight: {
        normal: 400,
        bold: 500,
        "extra-bold": 600,
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },

      // ... your other theme extensions
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-filters"),
    // ... your other plugins
    addVariablesForColors,
    function ({ addUtilities }) {
      const newUtilities = {
        ".before-absolute": {
          position: "absolute",
          content: '""',
          inset: "0",
          zIndex: "-1",
        },
      };
      addUtilities(newUtilities, ["before"]);
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
