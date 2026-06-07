/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode surfaces
        light: {
          primary: "#FFFFFF",
          secondary: "#F4F7FB",
          tertiary: "#E8EEF7",
        },
        // Dark mode surfaces
        dark: {
          primary: "#0B1120",
          secondary: "#111827",
          tertiary: "#1E293B",
        },
        // Blue accent palette (replaces orange)
        blue: {
          primary: "#1D56C7",
          dark: "#1645A8",
          light: "#3B76E8",
          accent: "#0EA5E9",
          muted: "#DBEAFE",
        },
        grey: {
          light: "#CCCCCC",
          medium: "#64748B",
          dark: "#4A4A4A",
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
