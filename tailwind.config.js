/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 6px #e9eaeb',
    },
      colors :{
        customGray: '#e9eaeb',
      }
    },
  },
  plugins: [],
}

