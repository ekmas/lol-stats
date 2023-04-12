/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray': '#1d1d1d',
        'white-gray': '#e2e2e2',
        'black': '#121212',
        'white': '#ededed',
        'blue': '#2951AC',
        'light-blue': '#3668DD'
      }
    },
  },
  plugins: [],
}

