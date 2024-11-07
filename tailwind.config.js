/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rambla: ["Rambla", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        custom: "0 1px 2px 0 rgba(169, 169, 169, 0.5)", // Define your custom shadow here
      },
      transitionProperty: {
        shadow: "box-shadow", // Add transition property for box-shadow
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [],
};
