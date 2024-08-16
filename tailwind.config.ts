import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',  // Включаем поддержку классов для темной темы
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#090b0e',
        secondary: '#1b1c21',
        textColor: '#646464',
        primaryLight: '#3172f4',
        secondaryLight: '#5488f1',
        textColorLight: '#0c0b0b',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;

