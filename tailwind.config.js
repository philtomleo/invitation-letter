/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#4a322f',
        sand: '#d2b3a5',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(116, 38, 55, 0.16)',
      },
      fontFamily: {
        sans: ['"Chen Yuluoyan"', '"Noto Sans TC"', '"PingFang TC"', 'sans-serif'],
        serif: ['"Chen Yuluoyan"', '"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
      },
    },
  },
  plugins: [],
};
