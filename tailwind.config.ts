import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0F1216", // Deep Obsidian
                foreground: "#E0E0E0", // Off-White
                navy: "#E0E0E0",       // Mapped to Text (Off-White)
                ivory: "#0F1216",      // Mapped to Background (Obsidian)
                peach: "#D4AF37",      // Mapped to Gold
                softblue: "#16191E",   // Mapped to Dark Surface
                white: "#FFFFFF",      // Keep White
                primary: {
                    DEFAULT: "#D4AF37", // Gold
                    foreground: "#0F1216",
                },
                secondary: {
                    DEFAULT: "#16191E", // Dark Surface
                    foreground: "#E0E0E0",
                },
                accent: "#D4AF37",
                dark: "#9CA3AF",       // Gray-400 for secondary text
                surface: "#16191E",    // Explicit surface color
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