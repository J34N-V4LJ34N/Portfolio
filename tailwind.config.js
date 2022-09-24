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
        "selected-text-2": "#CAE2B1",
        "selected-text-3": "#D9BBF9",
        "selected-text-4": "#F3D2DE",
        "selected-text-5": "#FFD2B2",
        theme: "#3F3FFF",
        nav: "#1C254177",
        "nav-heading": "#1C2541d6",
        secondary: "#9191A4",
        button: "#84CAE7",
        "button-text": "#041B15",
        input: "#2A2A35",
        card: "#136F63",
      },
      width: {
        persona: "700px",
        desk: "500px",
        mob: "300px",
      },
      height: {
        desk: "281px",
        mob: "169px",
        prototype: "800px",
      },
    },
  },
  plugins: [],
};
