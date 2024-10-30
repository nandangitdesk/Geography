/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'gradient-2': 'linear-gradient(90deg, rgba(25, 118, 210, 1), rgba(3, 169, 244, 1))',
      }
    },
  },
  plugins: [],
}

