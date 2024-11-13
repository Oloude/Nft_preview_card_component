/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Outfit": ['"Outfit"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "softBlue" : "#8bacda",
        "cyan" : "#00fff7",
        "mainBG" : "#0d192b",
        "cardBg" : "#14253d",
        "line" : "#2f415b",
      }
    },
  },
  plugins: [],
}