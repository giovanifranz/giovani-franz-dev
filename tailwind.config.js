/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      green: '#299E00',
      black: '#202020',
      gray: '#444444',
      white: '#FAFAFA',
      red: '#FF6C6C',
    },
    fontFamily: {
      base: ['Poppins', 'sans-serif'],
      display: ['Montserrat Alternates', 'serif'],
    },
  },
};
