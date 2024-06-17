/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#ffc001",
        secondary:"#ff9c01",
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"5rem"
        }
      }
    },
  },
  plugins: [],
}