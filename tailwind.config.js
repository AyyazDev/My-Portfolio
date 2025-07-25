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
  spinSlow: 'spin 2s linear infinite', // ✅ matches `animate-spinSlow`
},
fontFamily: {
        redhat: ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        green: {
          500: "#00b894",
          600: "#019874",
        },
         greyCustom: {
        100: "#DCDCDC",
        },
      },
    },
  },
  plugins: [],
};
