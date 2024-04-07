/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      BeVietnamPro: "BeVietnamPro"
    },
    extend: {
      colors: {
        grey: "#fafafa",
        glass: "rgba(255,255,255,0.45)",
        transparentBlack : "rgba(0,0,0,0.7)"
      }
    },
   
  },
  plugins: [],
}