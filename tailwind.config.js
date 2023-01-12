/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		listStyleType: {
			none: 'none',

			square: 'square',
			roman: 'upper-roman',
		},
	},
	plugins: [],
};
