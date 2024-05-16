/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      
      'white': '#ffffff',
      'purple': '#110808',
      'grey': '#d9d9d9',
      'red': '#920606',
      'tahiti': '#FCE2BB',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#dcae53',
      
    },
    extend: { backgroundImage: {

      custom: "url('../../public/chair.png')",
      youth: "url('../../public/youthworship.png')",
      teen: "url('../../public/IMG_9731.png')",
      family: "url('../../public/family.png')",


    
    },
  
      }
    
  },
  plugins: [],
};
