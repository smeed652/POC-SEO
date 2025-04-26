module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", 'sans-serif'],
        sans: ["'Plus Jakarta Sans'", 'sans-serif'], // Make 'sans' the default for global usage
      },
    },
  },
  plugins: [],
}
