/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "skin-plum": "#6f0936", // Deep plum
        "skin-rose": "#f4c7d3", // Soft rose
        "skin-teal": "#4db6ac", // Soothing teal
        "skin-cream": "#fdf6f0", // Warm cream
      },
    },
  },
  plugins: [],
};