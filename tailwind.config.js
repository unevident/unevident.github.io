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
      },
      colors: {
        'oxford-blue': '#161B33',
        'rich-black': '#0D0C1D'
      },
      gradientColorStops: {
        'oxford-blue': '#161B33',
        'rich-black': '#0D0C1D'
      },
      keyframes: {
        jiggle: {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(6.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },
          '75%': { transform: 'rotate(-6.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      }
    },
    animation: {
      'jiggle-div': 'jiggle 0.15s linear',
    }
  },
  plugins: [],
}