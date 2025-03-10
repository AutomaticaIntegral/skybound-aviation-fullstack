
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				skyblue: {
					light: '#33C3F0',
					DEFAULT: '#1EAEDB',
					dark: '#0FA0CE',
				},
				charcoal: {
					light: '#555555',
					DEFAULT: '#333333',
					dark: '#222222',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'subtle-float': {
					'0%': { transform: 'translateY(0px) scale(1.02)' },
					'50%': { transform: 'translateY(-10px) scale(1.03)' },
					'100%': { transform: 'translateY(0px) scale(1.02)' }
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 5px 0 rgba(51, 195, 240, 0.5)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(51, 195, 240, 0.7)' },
					'100%': { boxShadow: '0 0 5px 0 rgba(51, 195, 240, 0.5)' }
				},
				'pulse-slow': {
					'0%': { opacity: '0.4' },
					'50%': { opacity: '0.7' },
					'100%': { opacity: '0.4' }
				},
				'pulse-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'gradientMove': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-delay-1': 'fade-in 0.5s ease-out 0.2s forwards',
				'fade-in-delay-2': 'fade-in 0.5s ease-out 0.4s forwards',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'scale-up': 'scale-up 0.5s ease-out',
				'subtle-float': 'subtle-float 20s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'pulse-gradient': 'gradientMove 8s ease-in-out infinite',
			},
			boxShadow: {
				'service': '0 10px 25px -5px rgba(30, 174, 219, 0.1), 0 8px 10px -6px rgba(30, 174, 219, 0.1)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
				'neon': '0 0 5px rgba(51, 195, 240, 0.5), 0 0 20px rgba(51, 195, 240, 0.3)',
				'card-hover': '0 10px 40px -10px rgba(30, 174, 219, 0.3)',
				'inner-light': 'inset 0 0 15px rgba(255, 255, 255, 0.07)',
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
