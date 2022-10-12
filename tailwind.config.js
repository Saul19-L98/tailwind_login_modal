/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  mode: "jit",
  theme: {
    fontFamily:{
      sans: ['Mulish','sans-serif'],
      mono: ['Rokkitt','monospace'],
    },
    extend: {},
  },
  plugins: [],
}
