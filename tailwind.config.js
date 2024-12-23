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
          50: '#f4f4fc',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b9b9b9',
          400: '#ced4da',
          500: '#818181',
          600: '#6c757d',
          700: '#4d4d4d',
          800: '#333333', 
          900: '#212529'
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
        blue: {
          500: "#04b4fc"
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
      },
      keyframes: {
        overlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				contentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -48%) scale(0.96)",
					},
					to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
      },
      animation: {
				"overlay-show": "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				"content-show": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
			},
    }
  },
  plugins: [],
}

