const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      width: {
        "8xl": "90rem",
      },
      screens: {
        xs: "375px",
        s: "425px",
      },
      colors: {
        expresso: {
          100: "#DCD7C9",
          200: "#DEA057",
          300: "#A27B5C",
          400: "#3F4E4F",
          500: "#2C3639",
        },
      },
      fontFamily: {
        serif: ["Cavas", ...defaultTheme.fontFamily.serif],
        imbue: ["Imbue", ...defaultTheme.fontFamily.serif]
      },
    },

    plugins: [],
  },
};

