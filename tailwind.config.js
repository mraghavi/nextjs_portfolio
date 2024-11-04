/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}", // Ensure styles are included
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#ffffff', // Pure white
          text: '#000000', // Black
          primary: '#9b5de5', // Light purple
          secondary: '#f15bb5', // Light pink
          accent: '#00bbf9', // Light coral
        },
        // Dark mode colors
        dark: {
          bg: '#0c1208', // Dark green
          text: '#fafbf4', // Light cream
          textMuted: '#737b81', // Muted text for less prominence
          primary: '#bdb2ff', // Gray
          secondary: '#899f7a', // Dark olive green
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
