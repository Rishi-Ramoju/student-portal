/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // Adjust to match your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // Custom primary color
        secondary: "var(--secondary)", // Custom secondary color
      },
    },
  },
};
