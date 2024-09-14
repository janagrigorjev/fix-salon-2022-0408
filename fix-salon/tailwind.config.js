/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#D5F7F5', //svetlo plava
      'secondary': '#2B9A8C', //tamno plava
      'tertiary': '#11657F',
      'gray': '#d9d9d9',
      'white': '#fff',
      'black': '#000',
      'gold': '#FBDC6FC7',
      'pink-dark': '#CD9F9FA8',
      'pink-light': '#F3CCCC99',
      'pink-heading': '#943D3D',
    },
  },
  plugins: [], 
};
