/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", 'sans-serif'],
    },      
    colors: {
        'beige': '#F5F5DC',
        'light-green': "#5E9F78",
        'dark-green': "#0F2841"
      },
  },
  plugins: [],
}