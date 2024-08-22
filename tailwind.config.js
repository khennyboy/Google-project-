/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '55em' },
        'android': { 'max': '30em' },
        'smallAndroid': { 'min': '0em', 'max': '22em' },
        'largeTablet': { 'min': '55em', 'max': '75em' },
        'mediumDesktop': { 'min': '75.1em', 'max': '94em' }
      },
      colors: {
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        strongCyan: 'hsl(172, 67%, 45%)'
      }
      , fontFamily: {
        sans: ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}