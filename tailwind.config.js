export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // IMPORTANT!
  theme: {
    extend: {
      colors: {
        green: {
          500: "#00b894",
          600: "#019874",
        },
      },
    },
  },
  plugins: [],
};
