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
      },
      extend: {
        fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
        }
      },
      color: {
        'whitesmoke': 'whitesmoke'  // Replace with your desired color value
      },
    },

  },

  plugins: [],
}