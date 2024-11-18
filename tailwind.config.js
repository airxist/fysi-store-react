/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        ma_bold: ["ma_bold"],
        ma_med: ["ma_med"],
        ma_regular: ["ma_regular"],
        ma_smbold: ["ma_smbold"],
        DMSansBold: ["DMSansBold"],
        DMSansMedium: ["DMSansMedium"],
        DMSansRegular: ["DMSansRegular"],
        DMSansSemiBold: ["DMSansSemiBold"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest_green: {
          50: "#E6ECE9",
          100: "#B0C3BA",
          200: "#8AA698",
          300: "#547E6A",
          400: "#33654D",
          500: "#003E20",
          600: "#00381D",
          700: "#002C17",
          800: "#002212",
          900: "#001A0D",
        },
        grey: {
          50: "#FEFFFF",
          100: "#FDFDFE",
          200: "#FCFDFD",
          300: "#FBFCFC",
          400: "#FAFBFC",
          500: "#F9FAFB",
          600: "#E3E4E4",
          700: "#B1B2B2",
          800: "#898A8A",
          900: "#696969",
        },
      },
    },
  },
  plugins: [],
};
