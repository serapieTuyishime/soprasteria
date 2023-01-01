/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{jsx, js}", "./components/**/*.{jsx, js}"],
    theme: {
        extend: {
            spacing: {
                3.75: "0.9375rem",
                6.25: "1.5625rem",
                7.5: "1.875rem",
                15.25: "3.8125rem",
                19.44: "4.86rem",
                82.25: "20.5625rem",
            },
            fontSize: {
                small: "0.9375rem",
            },
        },
    },
    plugins: [],
};
