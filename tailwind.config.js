/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // custom UserList columns
        userList: "repeat(auto-fit, minmax(390px, 1fr))",
      },
      animation: {
        occurrence: "occurrence 1s ease-in-out",
        show: "show 3.5s ease-in-out",
        hidePopup: "hidePopup 0.3s ease-in-out",
      },
      keyframes: {
        occurrence: {
          "0%,40%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        show: {
          "0%,40%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        hidePopup: {
          "0%": { transform: "translateY(-250px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
