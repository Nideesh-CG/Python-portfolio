/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        'background-secondary': '#101010',
        card: '#171717',
        'card-hover': '#1F1F1F',
        primary: '#FF6500',
        'primary-hover': '#FF7A1F',
        secondary: '#E85D04',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3',
        'text-muted': '#737373',
        border: '#353535',
        'border-light': '#4A4A4A',
        'border-accent': 'rgba(255, 101, 0, 0.3)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'orange-glow': '0 0 25px -5px rgba(255, 101, 0, 0.25)',
        'orange-glow-lg': '0 0 35px -5px rgba(255, 101, 0, 0.35)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 101, 0, 0.08) 1px, transparent 0)",
        'subtle-grid': "linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}

