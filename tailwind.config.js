/** @type {import('tailwindcss').Config} */
import fontSize from './config/tailwind/fontSize.json';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontSize,
    fontFamily: {
      on: ['on', 'sans-serif'],
    },
  },
  plugins: [],
};
