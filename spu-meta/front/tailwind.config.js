/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "22rem",
      },
    },
    fontFamily: {
      db_heavent_bd: ["db_heavent_bd_v3.2-webfont", "sans-serif"],
      DB_Heavent_Med: ["DB Heavent Med v3.2", "sans-serif"],
      DB_Heavent: ["DB Heavent v3.2", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-main": "url('/image/bg_main2.png')",
      },
      colors: {
        "blue-main": "#172554",
      },
      screens: {
        "2mb": "320px",
        // => @media (min-width: 320px) { ... }
        mb: "400px",
        // => @media (min-width: 425px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        main: "58px",
        XXL: "185px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        // font-sive settings
        "font-size": (value) => {
          return {
            fontSize: `calc(${value}/1920*100vw)`,
            // fontSize: `calc(${value}/900*100vw)`,
          };
        },
        "font-size-sm": (value) => {
          return {
            fontSize: `calc(${value}/428*100vw)`,
          };
        },
      });
    }),
  ],
};
