/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#002C69",
        lightBlue: "#5098FC",
        bg: "#F8FAFC",
        sectionBg: "#F1F1F1",
        placeholder: "#696969",
      },
      screens:{
        full:'1000px',
        laptop:'750px',
        tablet:'490px'
      }
    },
  },
  plugins: [],
};
