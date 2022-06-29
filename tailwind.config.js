/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}' //todos arquivos do src que terminarem com tsx terão estilizaçao do tailwind
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        league: 'League Gothic, sans-serif',

      },
      colors: {
        green: {
          300: '#00B37E',
          400: '#00E88F',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#FAFAFA',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        animation: {
          slide: '0.3s ease-in-out 0s 1 normal none running slide'
        },

        keyframes: {
          slide: {
            '0%, 100%': {
              transform: 'translateX(100%)'
            },

            '100%': {
              transform: 'translateX(0)'
            }
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
