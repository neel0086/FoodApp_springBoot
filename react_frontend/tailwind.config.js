/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif', "arial", "Audiowide"],
        righteous: ['Righteous', 'cursive']
      },
    },
    extend: {
      invert: {
        0.1: '0.1',
        0.2: '0.2',
        0.3: '0.3',
        0.4: '0.4',
        0.5: '0.5',
        0.7: '0.7',
        0.8: '0.8',
        0.9: '0.9'
      }
    },
    extend: {
      colors: {
        'whitesmoke': 'whitesmoke',  // Replace with your desired color value
      },
    },

  },
  plugins: [],
}