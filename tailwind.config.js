/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2e3d7',
        blush: '#dcc0b7',
        sage: '#d7a6a4',
        forest: '#742637',
        ink: '#4a322f',
        sand: '#d2b3a5',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(116, 38, 55, 0.16)',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"PingFang TC"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
