/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"], 
  // scan all .html files
  theme: {
    extend: {
      colors: {
        chatblack: {50: "#343541"}
      }
    },
  },
  plugins: [],
}

