 // tailwind.config.js
 module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontFamily: {
      poppins: ["Poppins", "Arial", "sans-serif"],
    },
     extend: {
      colors: {
        "hover-green": "#8bc34a",
        "background-gray": "#d8d8d8",
        "posts-background": "#f8f9fa",
        "influencer-background": "#fafafa",
        "button-color": "#142529",
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }