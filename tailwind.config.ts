import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#EFF8FF", // Light Blue Base
                foreground: "#121212", // Dark Body Text (per request)
                navy: "#0060C9",       // Important elements / Primary Blue
                ivory: "#EFF8FF",      // Background (60%)
                peach: "#FAC927",      // Accent Gold (5%)
                softblue: "#DAEDFB",   // Secondary Blue (30%)
                white: "#FFFFFF",      // Pure White for clear elements
                primary: {
                    DEFAULT: "#0060C9",
                    foreground: "#EFF8FF",
                },
                secondary: {
                    DEFAULT: "#DAEDFB",
                    foreground: "#0060C9",
                },
                accent: "#FAC927",
                dark: "#121212",       // Specific dark color for body text
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            borderRadius: {
                'xl': '1.5rem',
                '2xl': '2.5rem',
                '3xl': '4rem',
            }
        },
    },
    plugins: [],
}

export default config