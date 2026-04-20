/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0A0A0A",
          secondary: "#1A1A1A",
          tertiary: "#2A2A2A",
        },
        orange: {
          primary: "#FF6B35",
          dark: "#E85D2F",
        },
        grey: {
          light: "#CCCCCC",
          medium: "#888888",
          dark: "#4A4A4A",
        },
        blue: {
          accent: "#2563EB",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "fade-in-up": "fadeInUp 1s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        counter: "counter 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
