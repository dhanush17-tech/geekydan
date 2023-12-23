module.exports = {
  distDir: "build",

  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  images: {
    domains: ["media.tenor.com", "res.cloudinary.com"],
  },
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
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },

      fontWeight: {
        normal: 400,
        bold: 500,
        "extra-bold": 700,
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
};
