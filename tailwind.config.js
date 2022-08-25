/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./About/**/*.html",
    "./Projects/**/*.html",
    "./Resume/**/*.html",
    "./Contact/**/*.html",
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      fontSize: {
        intro: "25.5vw",
      },
      screens: {
        po: "830px",
        co: "930px",
      },
      colors: {
        body: "#0B132B",
        "selected-text": "#EFF1C5",
        theme: "#3F3FFF",
        nav: "#1C254177",
        secondary: "#9191A4",
        button: "#84CAE7",
        "button-text": "#041B15",
        input: "#2A2A35",
      },
    },
  },
  plugins: [],
};
