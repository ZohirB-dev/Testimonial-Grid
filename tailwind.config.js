/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        ModerateViolet: "hsl(263, 55%, 52%)",
        VeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        VeryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        White: "hsl(0, 0%, 100%)",
        LightGray: "hsl(0, 0%, 81%)",
        LightGrayishBlue: "hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}

