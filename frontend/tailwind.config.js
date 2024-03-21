/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3C2A4D',
        black: '#272727',
        darkGrey: '#707070',
        lightGrey: '#C7C7C7',
        titleBlue: '#95ADBE',
        yellow: '#FCD056',
        purple: 'A89FE3',
        blue: '#9FDCE3',
        green: '#76ECA5',
        red: 'E87878',
      },
      fontFamily: {
        'sans': ['Maven pro'],
      }
    },
  },
  plugins: [],
}