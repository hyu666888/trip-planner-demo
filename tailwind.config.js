/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        linen: {
          50:  '#fdfaf6',
          100: '#f8f1e8',
          200: '#f0e3d0',
          300: '#e5ceaf',
          400: '#d8b48a',
          500: '#c99b6a',
        },
        teal: {
          muted: '#5f8f8a',
          light: '#8fbfbb',
          dark:  '#3d6663',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
