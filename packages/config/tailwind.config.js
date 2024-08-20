/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: '#000000',
            white: '#ffffff',
            slate: colors.slate,
            gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
            primary: {
                50: '#FFF0F0',
                100: '#FFB6B7',
                200: '#FF8989',
                300: '#FF5E5E',
                400: '#C63131',
                500: '#A80000',
                600: '#890000',
                700: '#6D0000',
                800: '#510000',
                900: '#340000',
            },
        },
        screens: {
            ...screens,
            '2xs': '320px',
            xs: '480px',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-pretendard)', ...fontFamily.sans],
            },
            transitionTimingFunction: {
                bounce: 'cubic-bezier(0.47,1.64,0.41,0.8)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
