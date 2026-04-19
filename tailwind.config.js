/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "667px",
        lg: "960px",
        xl: "1280px",
      },
      fontFamily: {
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        title: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      colors: {
        sky: "#38bdf8",
        primary: "#e2e8f0",
        semidark: "#94a3b8",
        dark: "#64748b",
      },
    },
  },
  plugins: [],
};
