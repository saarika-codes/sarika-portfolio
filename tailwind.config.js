/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FB",
        surface: "#FFFFFF",
        surfacealt: "#EEF2F7",
        ink: "#171B26",
        muted: "#626B7A",
        line: "#E3E7EE",
        teal: {
          DEFAULT: "#0EA89E",
          dark: "#0B8781",
          light: "#E3F7F5",
        },
        coral: {
          DEFAULT: "#FF6A55",
          dark: "#E5503C",
          light: "#FFE9E5",
        },
        navy: {
          DEFAULT: "#12141F",
          soft: "#1B1E2B",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(23,27,38,0.12)",
        pop: "0 14px 40px -14px rgba(14,168,158,0.35)",
      },
      borderRadius: {
        xl2: "1.4rem",
      },
    },
  },
  plugins: [],
}
