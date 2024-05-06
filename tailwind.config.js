/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens:{
        'tablet' : {'max' : '55em'},
        'android' : {'max': '30em'},
        'smallAndroid' : {'min' :'0em', 'max': '22em'},
        'largeTablet' : {'min': '55em', 'max': '75em'},
        'mediumDesktop': {'min': '75.1em', 'max': '94em'}
      }
    },
  },
  plugins: [],
}