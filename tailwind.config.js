/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f4f4f4',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b9b9b9',
          400: '#9e9e9e',
          500: '#818181',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333', 
          900: '#1a1a1a'
        },
        yellow: {
          50: '#fffbea',
          100: '#fff3c4',
          200: '#fce588',
          300: '#fadb5f',
          400: '#f7c948',
          500: '#f0b429',
          600: '#de911d',
          700: '#cb6e17',
          800: '#b44d12',
          900: '#8d2b0b'
        },
        white: {
          DEFAULT: '#ffffff',
          50: '#f9f9f9'
        },
        black: {
          DEFAULT: '#000000',
          light: '#2C2C2C'
        },
        green: {
          500: '#38C172'
        },
        orange: {
          500: '#FFA500'
        },
        red: {
          500: '#E3342F'
        },
      }
    }
  },
  plugins: [],
}

