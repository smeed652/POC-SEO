module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./packages/ui/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
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
