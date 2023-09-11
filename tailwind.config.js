/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/posts/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/mdx/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Source Serif Pro"', 'Georgia', 'serif'],
        'source-sans': ['"Source Sans Pro"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}