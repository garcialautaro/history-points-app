/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c93448',
        secondary: '#2d3748',
        tertiary: '#faf9f6',
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a1a',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(201, 52, 72, 0.5)',
        'glow-primary-lg': '0 0 40px rgba(201, 52, 72, 0.4)',
      },
    },
  },
  plugins: [],
}
