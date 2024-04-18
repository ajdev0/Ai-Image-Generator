/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1280",
      },
      backgroundImage: {
        "custom-bg": "url('./src/assets/bg.jpg')",
      },
      fontFamily: {
        jersey: ["Jersey 15", "sans-serif"],
      },
    },
  },
  plugins: [],
};
