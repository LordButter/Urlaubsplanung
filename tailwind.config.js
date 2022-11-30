/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'custom-red-normal': '#ea5a5a',
      'custom-red-light': '#ff8c87',
      'custom-red-dark': '#b22531',
      'custom-grey-normal': '#333333',
      'custom-grey-light': '#5c5c5c',
      'custom-grey-dark': '#0c0c0c'
    }
  },
  plugins: [],
}