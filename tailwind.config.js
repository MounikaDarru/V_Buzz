export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'custom-nav': '0 0 20px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        primary: "#1E5D9A",
        secondary: "#EA5C0C",
      },
    },
  },
  plugins: [],
};
