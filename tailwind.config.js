/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px',
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
