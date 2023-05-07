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
      },
      screens: {
        'm1280': {'max': '1280px'},
        'm1050': {'max': '1050px'},
        'm1150': {'max': '1150px'},
        'm1000': {'max': '1000px'},
        'm900': {'max': '900px'},
        'm700': {'max': '700px'},
        'm650': {'max': '650px'},
        'm600': {'max': '600px'},
        'm550': {'max': '550px'},
        'm500': {'max': '500px'},
        'm480': {'max': '480px'},
        'm450': {'max': '450px'},
        'm400': {'max': '400px'},
        'm350': {'max': '350px'},
        'h550': { 'raw': '(max-height: 550px)' },
      }
    },
  },
  plugins: [],
}

