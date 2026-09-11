/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540",
          50: "#E6EBF0",
          100: "#B3C4D4",
          200: "#809DB8",
          300: "#4D769C",
          400: "#1A4F80",
          500: "#0A2540",
          600: "#091F37",
          700: "#07192E",
          800: "#051225",
          900: "#030C1C",
        },
        secondary: {
          DEFAULT: "#00D4FF",
          50: "#E0F9FF",
          100: "#B3F0FF",
          200: "#80E7FF",
          300: "#4DDEFF",
          400: "#1AD5FF",
          500: "#00D4FF",
          600: "#00B8DB",
          700: "#009CB7",
          800: "#008093",
          900: "#00646F",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        arabic: ["Cairo", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
