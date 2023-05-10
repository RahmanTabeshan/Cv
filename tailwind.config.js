/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

module.exports = {
  darkMode: 'class' ,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          boxShadow:{
            'myShadow' : "0 3px 16px -5px black"
          }
        },
        fontFamily:{
          'vazir': 'Vazir_En',
          'vazir-fa': 'Vazir_Fa',
        }
    },
    plugins: [
      createThemes({
        halloween: { 
           'primary': 'orange',
           'secondary': 'yellow',
        },
        summer: { 
           'primary': 'pink',
           'secondary': 'red',
        },
     })
    ],
};
