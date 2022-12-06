/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui : {
    themes : [
    
    {
      doctorThemes: {
      
primary: "#0FCFEC",
     
secondary: "#19D3AE",
     
neutral: "#3A4256",
      
"base-100": "#F2F2F2",
      
      },
    },
  ]
  },
  plugins: [require("daisyui")],
}