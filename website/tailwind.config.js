/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#FEF7EA',
        lightblue: '#3B7585',
        darkblue: '#042037', 
        red: '#BA3B1C',
        beige: '#FCD89B',
        hover: '#094678',
      },
      fontFamily: {
      heading: ['Intel One Mono', 'sans-serif'],
      body: ['Intel One Mono', 'sans-serif'],
    },
    fontFamily: {
      mono: ['Intel One Mono', 'monospace'],
    },
    },
  },
  plugins: [],
}
