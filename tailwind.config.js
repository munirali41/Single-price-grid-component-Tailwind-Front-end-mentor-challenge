/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0xBDCFED",
      },
      textColor: {
        skin: {
          head: "var(--color-text-head)",
          span: "var(--color-text-span)",
          butn: "var(--color-text-btn)",
        },
      }
    
      ,
      backgroundColor:{
        body:{
             bg:""  
        }

      }
    },
  },
  plugins: [],
};
