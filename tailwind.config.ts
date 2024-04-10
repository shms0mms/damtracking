import type { Config } from "tailwindcss"

export const colors = {
	purple: "#985ACE",
	"dark-purple": "#7c1fce",
	light: "#F8F1FF",
	main: "#403A4B",
	green: "#013220",
}
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors,
		},
	},
}
export default config
