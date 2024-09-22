/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./brickbreaker.html",
  ],
  theme: {
    extend: {
      height: {
        '500': '500px',
        '1000': '1000px'
      },
      width: {
        '500': '500px',
        '1000': '1000px'
      },
      scale: {
        '103': '1.03'
      }
    },
  },
  plugins: [],
}