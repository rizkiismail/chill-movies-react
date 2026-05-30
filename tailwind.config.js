/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        // Pemetaan Token Warna dari Content (1).png
        brand: {
          primary: "#3254FF", // Main Primary Blue
          primaryHover: "#243FDB", // Info Hover Blue
          bgBody: "#22282A", // Body Background
          bgHeader: "#181A1C", // Page Header Background
          bgPaper: "#22282A", // Paper Background
          error: "#B71F1D", // Error Default Red (Top 10)
        },
        grey: {
          900: "#212121",
          800: "##424242",
          700: "#616161",
          600: "#757575",
          400: "#BDBDBD",
          100: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
