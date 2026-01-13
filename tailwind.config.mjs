/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        nike: {
          black: "#111111",
          white: "#FFFFFF",
          volt: "#ccff00",
          infra: "#ff3b3b",
          deep: "#0b1f3b"
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};