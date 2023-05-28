/** @type {import('tailwindcss').Config} */
import fontSize from './config/tailwind/fontSize.json';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontSize,
    fontFamily: {
      iransans: ['iran-sans', 'sans-serif'],
    },
  },
  plugins: [],
};
