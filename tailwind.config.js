/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#8F00FF',
                primaryText: '#050505',
            },
        },
    },
    plugins: [],
};
