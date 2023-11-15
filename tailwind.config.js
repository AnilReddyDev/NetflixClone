/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        h10:"10%",
        h90:"90%",
        h75:"75%"
      },
      width:{
        w10:"10%"
      },
      colors:{
        netflixRed:"#E50914",
        inputbg:"#333"
      },
       backgroundImage:{
        netflixbgimage: "url('/src/assets/LoginPageBackgroundImg.jpg')",
       },
       top: {
        "t10": '40rem',
      },
    },
  },
  plugins: [],
}