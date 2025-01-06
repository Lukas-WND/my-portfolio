/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Tanker-Regular', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['"Bebas Neue"', 'sans-serif']
      },
      colors: {
        'dark-ciano': '#081C1C',
        'almond': '#EAE0D5',
        'khaki': '#C6AC8F',
        'walnut': '#996515',
        'gunmetal': '#22333B',
        'rich-black': '#010B13'
      },
      textStroke: {
        khaki: '3px khaki'
      },
      keyframes: {
        'text-rise-from-behind': {
          '0%': {
            'opacity': '100%',
            transform: 'translateY(100%)', 
            'clip-path': 'inset(0 0 100% 0)'
          },
          '100%': {
            'opacity': '100%',
            transform: 'translateY(0)', 
            'clip-path': 'inset(0 0 0 0)'
          }
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'text-rise-from-behind': 'text-rise-from-behind 0.6s cubic-bezier(0,0,0,1) forwards'
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
