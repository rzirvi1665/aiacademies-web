module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '7rem',
            },
            colors: {
                'deepblue': {
                    900: '#03045E',
                    800: '#023E8A',
                    700: '#0077B6',
                    600: '#0096C7',
                    500: '#00B4D8',
                    400: '#48CAE4',
                    300: '#90E0EF',
                    200: '#ADE8F4',
                    100: '#CAF0F8',
                }
            },
        },
        fontFamily: {
            sans: ['Prompt', 'sans-serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
