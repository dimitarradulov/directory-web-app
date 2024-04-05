/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        'sm': '640px',
        'md': '640px',
        'lg': '800px'
      }
    },
    // fontFamily:{
    //   'sans': ['Inter', 'sans-serif'],
    //   'serif': ['Lora', 'serif'],
    //   'mono': ['Inconsolata', 'monospace']
    // },
    extend: {
      boxShadow: {
        'main': '0px 5px 30px 0px rgba(0,0,0,0.1)',
        'main-dark': '0px 5px 20px 0px rgba(164,69,237,1)'
      },
      colors: {
        'primary': '#050505',
        'primary-12': '#1F1F1F',
        'primary-18': '#2D2D2D',
        'primary-23': '#3A3A3A',
        'secondary': '#757575',
        'secondary-91': '#E9E9E9',
        'secondary-96': '#F4F4F4',
        'accent': '#A445ED',
        'error': '#FF5252'
      },
      fontSize: {
        'heading-l': ['64px', '77px'],
        'heading-m':  ['24px', '29px'],
        'heading-s':  ['20px', '24px'],
        'body-m': ['18px', '24px'],
        'body-s': ['14px', '17px'],
      }
    },
  },
  plugins: [],
}

