/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        boxShadow: {
          custom: '0 10px 20px rgba(240, 46, 170, 0.7)',
      
      },
    },
  },
  plugins: [],
}
}