/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#e4316f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        prociono: ["Prociono", "sans-serif"],
        NotoNaskhArabic: ["NotoNaskhArabic", "Calibri"],
      }
    },
  },
  plugins: [],
}
)
