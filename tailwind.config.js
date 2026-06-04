/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#fdfcfb',
          DEFAULT: '#fcfaf7',
          dark: '#f5efe6',
        },
        ink: {
          light: '#332d27',
          DEFAULT: '#1c1814',
          dark: '#0c0a08',
        },
        terracotta: {
          light: '#df7e5a',
          DEFAULT: '#b84a26',
          dark: '#8b3215',
        },
        ochre: {
          light: '#e1ad5b',
          DEFAULT: '#c28b38',
          dark: '#936521',
        },
        earth: {
          light: '#9b8e83',
          DEFAULT: '#6c5e53',
          dark: '#483d35',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
