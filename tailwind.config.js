/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: rgb(255, 255, 255),
        },
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
