/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'deco': ['"Space Grotesk"', 'monospace'],
				'primary': ['"Rubik"', 'sans-serif'],
			  },
			  colors: {
				customAccent: '#F2CC4C',
				customPrimary: '#D4D4D4',
				customDark: '#14180C',
				customHeading: '#252525',
				customText: '#414141',
			},
		},
		keyframes: {
			'spin-anticlockwise': {
			  '0%': { transform: 'rotate(0deg)' },
			  '100%': { transform: 'rotate(-360deg)' },
			},
		  },
		  animation: {
			'spin-anticlockwise': 'spin-anticlockwise 6s linear infinite',
		  },
	},
	plugins: [],
}
