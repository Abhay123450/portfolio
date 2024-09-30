/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f06d09',
      },
      backgroundColor: {
        'primary': '#f06d09',
      },
      textColor: {
        'primary': '#f06d09',
      },
      borderColor: {
        'primary': '#f06d09',
      }
    },
  },
  plugins: [],
}

