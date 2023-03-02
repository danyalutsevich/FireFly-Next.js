/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(13rem, 1fr))",
      },
      boxShadow: {
        'custom': '0 0 80px 150px inset #000',
      },
      'scrollbar-dark': {
        width: '8px',
        backgroundColor: '#282828',
        thumbColor: '#606060',
        thumbBorderRadius: '10px',
        thumbBorderWidth: '2px',
        thumbBorderColor: '#282828',
        thumbHoverColor: '#808080',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}