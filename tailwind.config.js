export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // this already covers Footer.jsx
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slowSpin: 'spin 2s linear infinite',
      },
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
