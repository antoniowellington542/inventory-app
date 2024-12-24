/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'50': '#f4f4fc',
  				'100': '#e8e8e8',
  				'200': '#d1d1d1',
  				'300': '#b9b9b9',
  				'400': '#ced4da',
  				'500': '#818181',
  				'600': '#6c757d',
  				'700': '#4d4d4d',
  				'800': '#333333',
  				'900': '#212529'
  			},
  			yellow: {
  				'50': '#fffbea',
  				'100': '#fff3c4',
  				'200': '#fce588',
  				'300': '#fadb5f',
  				'400': '#f7c948',
  				'500': '#f0b429',
  				'600': '#de911d',
  				'700': '#cb6e17',
  				'800': '#b44d12',
  				'900': '#8d2b0b'
  			},
  			blue: {
  				'500': '#04b4fc'
  			},
  			white: {
  				'50': '#f9f9f9',
  				DEFAULT: '#ffffff'
  			},
  			black: {
  				DEFAULT: '#000000',
  				light: '#2C2C2C'
  			},
  			green: {
  				'500': '#38C172'
  			},
  			orange: {
  				'500': '#FFA500'
  			},
  			red: {
  				'500': '#E3342F'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			overlayShow: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			contentShow: {
  				from: {
  					opacity: '0',
  					transform: 'translate(-50%, -48%) scale(0.96)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translate(-50%, -50%) scale(1)'
  				}
  			}
  		},
  		animation: {
  			'overlay-show': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  			'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

