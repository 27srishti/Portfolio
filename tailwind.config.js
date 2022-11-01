/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
      borderRadius: {
        extraLarge: "18rem",
        large: "7rem",
      },
      width: { 90: "22rem", 100: "70rem", 98: "30rem", 99: "50rem" },
      height: {
        100: "30rem",
        98: "28rem",
      },

      colors: {
        "yellow-top": "#F0FF00",
        "blue-top": "#58CFFB",
        "blue-line": "#696FFF",
      },
    },
  },

  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("daisyui"),
    // require( "tw-elements/dist/plugin" ),
  ],
};
