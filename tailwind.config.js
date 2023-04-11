/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#1d1d1d',
        'black': '#121212',
        'blue': '#2951AC',
        'light-blue': '#3668DD'
      }
    },
  },
  plugins: [],
}

