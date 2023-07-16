/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // height: {
      //   screen: '100dvh'
      // },
      fontFamily: {
        display: ['Inter', 'sans-serif', 'system-ui']
      }
    }
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
