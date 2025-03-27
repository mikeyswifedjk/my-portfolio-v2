/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#7D4F50", // Soft muted mauve for text
        background: "#FFE4E1", // Light pastel pink background
        primary: "#FFB6C1", // Soft pink primary
        secondary: "#E5A4CB", // Light orchid secondary
        accent: "#FADADD", // Blush rose accent
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
