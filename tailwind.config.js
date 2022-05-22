const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        lean: {
          100: '#e2d0ee',
          200: '#c5a0dc',
          300: '#a971cb',
          400: '#8c41b9',
          500: '#6f12a8',
          600: '#590e86',
          700: '#430b65',
          800: '#2c0743',
          900: '#160422',
        },
        fontFamily: {
          'montserrat': ['monsterract'],
          'poppins': ['Poppins', 'sans-serif'] 
        },
        'gry': {
          100: "#cecece",
          200: "#9e9e9e",
          300: "#6d6d6d",
          400: "#3d3d3d",
          500: "#0c0c0c",
          600: "#0a0a0a",
          700: "#070707",
          800: "#050505",
          900: "#020202"
},
        'gray-dark': '#0c0c0c',
        gray: '#1c1c1',
        title: '#cacaca',
        p: '#8b8b8b',
        transparent: 'transparent',
        current: 'currentColor',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'grayy': '#8492a6',
        'purple': colors.purple
      },

    },
  },
  plugins: [],
}