const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [
    'postcss-preset-env',
    postcssImport,
    autoPrefixer,
    tailwindcss
  ],
};