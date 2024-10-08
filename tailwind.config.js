/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-ciano': '#081C1C',
        'almond': '#EAE0D5',
        'khaki': '#C6AC8F',
      },
      textStroke: {
        khaki: '3px khaki'
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
