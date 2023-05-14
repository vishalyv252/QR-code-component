/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Outfit':['Outfit','sans-serif']
      },
      fontSize:{
        'Fixed':'15px'
      },
      screens:{
        'smX':{'max':'321px'},
        'smM':{'max':'376px'},
        'smL':{'max':'426px'}
      },
      lineHeight:{
        '1':'17px'
      },
      backgroundColor:{
        'White':'hsl(0, 0%, 100%)',
        'LightGray':'hsl(212, 45%, 89%)'
      },
      colors:{
        'DarkBlue':'hsl(218, 44%, 22%)',
        'GrayishBlue':'hsl(220, 15%, 55%)'
      }
    },
  },
  plugins: [],
}

