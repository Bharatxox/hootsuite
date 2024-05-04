/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#18315B",
        secondary: "#2B873D",
      },
    },
  },
  plugins: [],
};
