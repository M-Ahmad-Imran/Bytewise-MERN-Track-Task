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
  plugins: [],
}

