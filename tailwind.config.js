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
      },
      keyframes: {
        shine: {
          '0%': { left: '-1.5rem', opacity: 0.6, backgroundColor: '#f8f8f8', filter: 'blur(2px)' },
          '10%': { opacity: 0.6, backgroundColor: '#f8f8f8', filter: 'blur(1px)' },
          '20%': { left: '120%', opacity: 0.3, filter: 'blur(2px)' },
          '100%': { left: '130%' },
        }
      },
      animation: {
        'shine': 'shine 6s linear infinite',
      }
    },
  },
  plugins: [],
}

