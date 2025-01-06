/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito",
      },
      colors: {
        primary: "#1595b6",
      },
      screens: {
        small: "940px",
      },
      boxShadow: {
        custom: "0 5px 10px rgba(0, 0, 0, 0.5)",
      },
      // transitionTimingFunction: {
      //   custom: "cubic-bezier(0.68,-0.55,0.265,1.55)",
      // },
      zIndex: {
        9999: "9999",
      },
    },
  },
  plugins: [],
};
