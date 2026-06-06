/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aps-teal": "#0D7377",
        "aps-teal-light": "#14A8AD",
        "aps-orange": "#F4631E",
        "aps-dark": "#1A2E35",
        "aps-gray": "#3A5A60",
        "aps-bg": "#F7FAFA",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
