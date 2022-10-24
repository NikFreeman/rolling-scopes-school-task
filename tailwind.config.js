module.exports = {
  content: ["./gem-puzzle/src/*.html", "./gem-puzzle/src/js/**/*.js"],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ll: "320px",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
