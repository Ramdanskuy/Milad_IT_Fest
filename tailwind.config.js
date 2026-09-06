/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#0a0d14',
          card: '#121723',
          cardHover: '#181f2e',
          border: '#000000',
          lightBorder: '#2a3447',
          yellow: '#ffe600',
          cyan: '#00f0ff',
          pink: '#ff007f',
          green: '#00ff66',
          orange: '#ff5500',
          purple: '#b829ff',
          muted: '#8b9bb4',
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-xl': '8px 8px 0px 0px #000000',
        'neo-cyan': '4px 4px 0px 0px #00f0ff',
        'neo-yellow': '4px 4px 0px 0px #ffe600',
        'neo-pink': '4px 4px 0px 0px #ff007f',
        'neo-green': '4px 4px 0px 0px #00ff66',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
    },
  },
  plugins: [],
}
