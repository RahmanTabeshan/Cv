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
            },
            Red: {
                primary: "#b91c1c",
            },
            Green: {
                primary: "#15803d",
            },
            Orange: {
                primary: "#c2410c",
            },
            Emerald: {
                primary: "#047857",
            },
            Rose: {
                primary: "#be123c",
            },
        }),
    ],
};
