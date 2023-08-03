import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'darkModeBackground': "#181C23",
        'darkerBlue': "#12161B",
        'nexGreen': '#8EFFD1',
        'nexRed': '#FF4D4D',
        'darkModeBoxBackground': "#1C2732",
        'darkModeAccordionBackground':"#2B3B4C",
        'nexTextDarklue': '#181C23',
        "darkModeTextWhite": '#DBDBDB',
        "darkModeTextBlack": '#020202'
      }
    },
  },
  
  plugins: [],
  
} satisfies Config;
