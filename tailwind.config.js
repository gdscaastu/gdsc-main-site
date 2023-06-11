/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      "7xl": "5rem", // 80px
      "8px": "0.5rem", // 8px
      "9px": "0.70rem", // 9px
    },
    extend: {
      boxShadow: {
        "right-bottom": "7px 7px 3px 2px rgba(214, 214, 214, 1)",
        right: "8px 0px 10px 1px rgba(214, 214, 214, 1)",
        "right-bottom-blur": "7px 7px 3px 2px rgb(75,75,75) ",
      },
    },
  },
  plugins: [require("daisyui")],
};
