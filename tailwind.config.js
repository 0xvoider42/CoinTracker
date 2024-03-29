module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '2rem',
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
