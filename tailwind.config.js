module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "theme-shadow": "2px 2px 6px 2px rgba(186,186,186,0.2)",
      },
      fontFamily: {
        theme: ["Redressed", "cursive"],
      },
      colors: {
        theme: "#970747",
        "theme-bg": "rgba(232, 114, 166, 0.5)",
      },
    },
  },
  plugins: [],
};
