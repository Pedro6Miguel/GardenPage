/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#f8f8f8',
      green: '#285A43',
      button: '#9DAEAB',
      dark: '#121212',
      transparent: '#12121290',
      warning: '#cd0a0a'
    },

    extend: {},
  },
  plugins: [],
}
