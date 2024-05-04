/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
				'sans': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'heading' : ['selimaregular', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'spl' : ['tajur_puncakregular', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'spl_heading' : ['barlow', 'ui-sans-serif', 'system-ui', '-apple-system']

			},
			extend: {
				maxHeight: {
					'1/4': '25%',
					'1/2': '50%',
					'3/4': '75%',
					'half': '50vh',
					'quarter': '25vh',
					'3fourth': '75vh'
				},
				minHeight: {
					'1/4': '25%',
					'1/2': '50%',
					'3/4': '75%',
					'half': '50vh',
					'quarter': '25vh',
					'3fourth': '75vh'
				},
				backgroundSize: {
					'50': '50%',
					'25rem': '25rem'
				},
				colors: {
					transparent: 'transparent',
					current: 'currentColor',
					black: colors.black,
					white: colors.white,
					gray: colors.coolGray,
					red: colors.red,
					yellow: colors.amber,
					green: colors.emerald,
					blue: colors.blue,
					indigo: colors.indigo,
					purple: colors.violet,
					pink: colors.pink,
					'light': '#F3F7FC',
					'dark': '#1e2755',
					'secondary': '#2F2E38',
					'primary': '#0930CC',
					'huddle': '#C70000',
				},
				zIndex: {
					'-10': '-10',
				}
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
