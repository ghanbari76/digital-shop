/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        vazir : ["vazir"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      Strategy : 'class',
    }),
  ],
}

