module.exports = {
	mode: "jit",
	darkMode: "class",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/util/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat"],
				inter: ["Inter"],
			},
			colors: {
				dank: {
					100: "#F4FCFC",
					200: "#E7F0EA", // Invite Box Outline
					300: "#D7EAEA", // Dank Mmeer Tag Footer
					400: "#727878",
					500: "#939D9D", // User
				},
				dark: {
					100: "#C1CBCF", // User Profile BG
					200: "#939D9D", // Header
					300: "#121212", // Backgroubd Body
					400: "#121313", // Footer Body
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["even"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
