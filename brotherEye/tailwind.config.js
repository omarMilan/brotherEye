/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["'Inconsolata'", "monospace"], // Add Inconsolata with a fallback
      },
      colors: {
        backgroundColor: "#1A202C",
        containerColor: "#2D3748",
        textColor: "#32FF7E",
      },
    },
  },
  plugins: [],
};
