/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        grayishBlue: "hsla(220, 9%, 45%, 1)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        blackbox: "hsla(0,0%,0%, 0.75)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        orange: "hsl(26, 100%, 55%)",
        dark: "hsla(220, 14%, 13%, 1)",
        paleOrange: "hsl(26, 100%, 94%)",
        grayBlue: "hsl(220, 14%, 75%)",
        lightGray: "hsla(220, 59%, 98%, 1)",
        transparentBlack: "hsla(0, 0%,0%, 0.5)",
      },
      animation: {
        scale: "scale 5s cubic-bezier(0, 0, 0.5, 0.1)  2",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(150%)",
          },
          "50%": {
            transform: "scale(80%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
