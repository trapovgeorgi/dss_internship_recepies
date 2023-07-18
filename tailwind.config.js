/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palette1: "#563232",
        palette2: "#e7cfb4",
        palette3: "#ffc18c",
      },
      boxShadow: {
        "3xl": "5px 5px 9px 5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
