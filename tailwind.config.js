/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#22C55E',
        background: {
          light: '#FFFFFF',
          dark: '#1F2937'
        },
        text: {
          light: '#1F2937',
          dark: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}