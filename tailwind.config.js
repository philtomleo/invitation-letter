/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f4ee',
        blush: '#f3e5de',
        sage: '#dbe6dd',
        forest: '#6f8d78',
        ink: '#544b45',
        sand: '#e6ddd3',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(111, 141, 120, 0.14)',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"PingFang TC"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top left, rgba(255,255,255,0.9), rgba(255,255,255,0) 45%), radial-gradient(circle at bottom right, rgba(219,230,221,0.65), rgba(219,230,221,0) 50%)',
      },
    },
  },
  plugins: [],
};
