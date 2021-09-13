module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {
      colors: {},
      animation: {
        slideDownFade: 'slideDown 0.5s forwards',
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, 'margin-top': '-10px' },
          '100%': { opacity: 1 },
        },
      },
    },
    fontFamily: {
      sans: ['Poppins, Inter'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
