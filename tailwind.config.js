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
        'gray80': '#1d1d1d80',
        'white-gray': '#e2e2e2',
        'white-gray80': '#e2e2e280',
        'black': '#121212',
        'white': '#ededed',
        'blue': '#2951AC',
        'red': '#E84057',
        'light-blue': '#3b6cde'
      }
    },
  },
  plugins: [],
}

