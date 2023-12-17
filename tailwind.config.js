/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':"url('/images/Ellipse.png')"
      },
      colors:{
        'primaryColor':'#524FD5',
        'secondaryColor':'#666680'
      }
    },
  },
  plugins: [],
}