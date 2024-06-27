/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        Darken: 'linear-gradient(90deg, #c9ffbf, #ffafbd, #ffc3a0, #6a82fb, #fc5c7d)',
        gradientText: 'linear-gradient(90deg, #c9ffbf, #ffafbd, #ffc3a0, #6a82fb, #fc5c7d)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(90deg, #c9ffbf, #ffafbd, #ffc3a0, #6a82fb, #fc5c7d)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

