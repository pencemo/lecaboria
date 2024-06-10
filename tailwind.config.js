const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        transparent: 'transparent',
        current: 'currentColor',
        'mani-blue': {
          100: '#676f9e',
          200: '#43486b',
          300: '#2e3352',
          400: '#1e2333',
        },
        'waikawa-gray': {
          '50': '#f3f7fa',
          '100': '#eaeef5',
          '200': '#d8e1ed',
          '300': '#c0cde1',
          '400': '#a6b4d3',
          '500': '#8f9cc5',
          '600': '#7780b4',
          '700': '#676f9e',
          '800': '#545b7f',
          '900': '#484e67',
          '950': '#2a2d3c',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}