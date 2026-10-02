/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-ocean': '#0f172a',
                'midnight-blue': '#1e293b',
                'parchment': '#d4c5a3',
                'parchment-dark': '#b0a07c',
                'gold-doubloon': '#fbbf24',
                'gold-dim': '#d97706',
                'blood-red': '#7f1d1d',
                'wood-brown': '#451a03',
                'sea-foam': '#94a3b8',
            },
            fontFamily: {
                'pirata': ['"Pirata One"', 'cursive'],
                'cinzel': ['"Cinzel"', 'serif'],
                'uncial': ['"Uncial Antiqua"', 'cursive'],
                'rye': ['"Rye"', 'serif'],
                'berkshire': ['"Berkshire Swash"', 'cursive'],
            },
            animation: {
                'sway': 'sway 3s ease-in-out infinite',
                'float-ship': 'floatShip 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                sway: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                floatShip: {
                    '0%, 100%': { transform: 'translateY(0) rotate(1deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(-1deg)' },
                }
            },
            backgroundImage: {
                'ocean-depths': "linear-gradient(to bottom, #0f172a, #020617)",
                'old-map': "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
                'wood-grain': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
            }
        },
    },
    plugins: [],
}
