/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'khmer-brand': ['Moul', 'serif'],
        'khmer-body': ['"Kantumruy Pro"', 'sans-serif'], // Must have double quotes inside single quotes
        'sans': ['Inter', 'sans-serif']
      },
      letterSpacing: {
        tighter: '-0.05em',
      }
    },
  },
  plugins: [],
}
