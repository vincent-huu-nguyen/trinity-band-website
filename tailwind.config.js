/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trinity-primary': '#1a1a1a',
        'trinity-primary-light': '#2a2a2a',
        'trinity-primary-lighter': '#999999',
        'trinity-primary-dark': '#0f0f0f',
        'trinity-primary-darker': '#000000',
        'trinity-secondary': '#8b0000',
        'trinity-secondary-light': '#a52a2a',
        'trinity-secondary-dark': '#660000',
        'trinity-gray': '#2a2a2a',
        'trinity-gray-dark': '#1a1a1a',
        'trinity-gray-light': '#666666',
        'trinity-accent': '#4a4a4a',
        'trinity-text-light': '#e0e0e0',
        'trinity-text-lighter': '#f5f5f5',
      },
    },
  },
  plugins: [],
}

