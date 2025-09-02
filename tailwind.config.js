/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trinity-primary': '#333333',
        'trinity-primary-light': '#4a4a4a',
        'trinity-primary-lighter': '#666666',
        'trinity-primary-dark': '#2a2a2a',
        'trinity-primary-darker': '#1a1a1a',
        'trinity-secondary': '#ec2028',
        'trinity-secondary-light': '#f04a51',
        'trinity-secondary-dark': '#d41920',
        'trinity-gray': '#f5f5f5',
        'trinity-gray-dark': '#e0e0e0',
      },
    },
  },
  plugins: [],
}

