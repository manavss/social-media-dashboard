/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBg: " hsl(230, 17%, 14%)",
        darkBgCard: " hsl(228, 28%, 20%)",
        textColor: "hsl(228, 34%, 66%)",
        cardHover: "hsl(215, 28%, 20%)",
      },
    },
  },
  plugins: [],
};
