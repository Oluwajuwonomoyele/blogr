/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'overpass': ['Overpass', 'sans-serif']
      },
      colors: {
        primary : {
          'light-red': 'hsl(356, 100%, 66%)',
          'very-light-red': 'hsl(355, 100%, 74%)',
          'very-dark-blue': ' hsl(208, 49%, 24%)',
        },
        neutral: {
          'white': 'hsl(0, 0%, 100%)',
          'grayish-blue': 'hsl(240, 2%, 79%)',
          'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
          'very-dark-black-blue': 'hsl(240, 10%, 16%)'
        },
        gradient: {
          'very-light-red': 'hsl(13, 100%, 72%)',
          'light-red': 'hsl(353, 100%, 62%)',
          'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
          'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
        }
      },
    },
  },
  plugins: [],
}
