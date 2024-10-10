/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-ciano': '#081C1C',
        'almond': '#EAE0D5',
        'khaki': '#C6AC8F',
        'gunmetal': '#22333B'
      },
      textStroke: {
        khaki: '3px khaki'
      },
      keyframes: {
        'text-rise-from-behind': {
          '0%': {
            transform: 'translateY(100%)', 
            'clip-path': 'inset(0 0 100% 0)'
          },
          '100%': {
            transform: 'translateY(0)', 
            'clip-path': 'inset(0 0 0 0)'
          }
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'text-rise-from-behind': 'text-rise-from-behind 0.7s ease-out forwards'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.stroke-khaki': {
          '-webkit-text-stroke': '3px #C6AC8F',
          'text-stroke': '3px #C6AC8F',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
