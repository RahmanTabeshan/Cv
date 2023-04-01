/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class' ,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily:{
          'vazir': 'Vazir_En',
          'vazir-fa': 'Vazir_Fa',
        }
    },
    plugins: [],
};
