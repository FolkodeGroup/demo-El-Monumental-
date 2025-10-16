/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FBF8F0',
        'text-primary': '#1E1E1E',
        'primary': '#CC3333',
        'primary-dark': '#b02a2a',
        'secondary': '#8C4C3E',
        'accent': '#FBF8F0',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Georgia"', 'serif'],
      }
    },
  },
  plugins: [],
}