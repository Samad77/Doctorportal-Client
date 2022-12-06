/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui : {
    themes : ["light", 
    
    {
      mytheme: {
      
primary: "#8C0327",
     
secondary: "#D75050",
     
accent: "#D59B6C",
     
neutral: "#836B5D",
      
"base-100": "#F2F2F2",
      
      },
    },
  ]
  },
  plugins: [require("daisyui")],
}
