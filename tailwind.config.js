/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                myShadow: "0 3px 16px -5px",
            },
        },
        fontFamily: {
            vazir: "Vazir_En",
            "vazir-fa": "Vazir_Fa",
        },
    },
    plugins: [
        createThemes({
            Blue: {
                primary: "#1d4ed8",
                secondary : "#153796" ,
            },
            Red: {
                primary: "#b91c1c",
                secondary : "#7d1010" ,
            },
            Green: {
                primary: "#15803d",
                secondary : "#0f592a" ,
            },
            Orange: {
                primary: "#c2410c",
                secondary : "#922f06" ,
            },
            Emerald: {
                primary: "#047857",
                secondary : "#014c37" ,
            },
            Rose: {
                primary: "#be123c",
                secondary : "#810c29" ,
            },
        }),
    ],
};
