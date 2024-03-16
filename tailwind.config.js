/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#050505',
        'primary-12': '#1F1F1F',
        'primary-18': '#2D2D2D',
        'primary-23': '#3A3A3A',
        'secondary': '#757575',
        'secondary-91': '#E9E9E9',
        'secondary-96': '#F4F4F4',
        'accent': '#A445ED',
        'error': 'FF5252'
      }
    },
  },
  plugins: [],
}

