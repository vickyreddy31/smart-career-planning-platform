/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#c084fc",
          DEFAULT: "#aa3bff",
          bg: "rgba(170, 59, 255, 0.08)",
          border: "rgba(170, 59, 255, 0.3)",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        'float-delayed-1': "float 6s ease-in-out infinite 2s",
        'float-delayed-2': "float 6s ease-in-out infinite 4s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        }
      }
    },
  },
  plugins: [],
}
