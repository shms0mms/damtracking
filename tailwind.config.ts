import type { Config } from "tailwindcss"

export const colors = {
	purple: "#985ACE",
	"dark-purple": "#7c1fce",
	light: "#F8F1FF",
	main: "#403A4B",
	green: "#013220",
	red: "#FF0000",
	"transparent-black": "rgb(0, 0, 0, 0.7)",
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
			gridTemplateColumns: {
				template: "repeat(auto-fill, minmax(290px, 1fr))",
			},
		},
	},
}
export default config
