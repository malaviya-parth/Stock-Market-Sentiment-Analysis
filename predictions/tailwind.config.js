/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
  "./src/**/*.{html,jsx, js}",
  "./public/index.html",
  "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
});

