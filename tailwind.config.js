export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // this already covers Footer.jsx
  ],
  darkMode: 'class',
  theme: {
     extend: {
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
