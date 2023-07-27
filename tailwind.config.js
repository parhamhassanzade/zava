module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "2xs": ".5rem",
      "xs": ".75rem",
      "sm": ".875rem",
      "tiny": ".8125rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "1xl": "1.313rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      "mainbg": "#E7E7DB",
      "dark-brown": "#695442",
      "blur-light-orange": "#EOB394"

    },
    extend: {
      fontFamily: {

      },
      boxShadow: {

      },
      letterSpacing: {
        widest: ".4em",
      },
    },
    screens: {
      "2xs": { min: "375px" },
      "xs": { min: "425px" },
      545: { min: "545px" },
      "sm": { min: "576px" },
      "md": { min: "768px" },
      "2md": { min: "850px" },
      "lg": { min: "975px" },
      "xl": { min: "1080px" },
    },

  },
};
