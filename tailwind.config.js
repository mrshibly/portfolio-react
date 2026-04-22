/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0A',
        electric: '#2563EB',
        slate: '#6B7280',
        'ghost-white': '#F0EEF8',
      },
      fontFamily: {
        sans: ['General Sans', 'Satoshi', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
