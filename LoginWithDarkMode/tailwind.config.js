/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],

  darkMode: "class",

  theme: {

    extend: {

      screens: {
        'xsm': '200px',
        'xmd': '800px'
      },

      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
      colors: {
        greene: {
          50: "#e6ffe6",
          100: "#b3ffb3",
          200: "#66ff66",
          300: "#4dff4d",
          400: "#33ff33",
          500: "#1aff1a",
          600: "#00ff00",
          700: "#00e600",
          800: "#00cc00",
          900: "#00b300",
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],


};
