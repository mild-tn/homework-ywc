module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  theme: {
    extend: {
      fontFamily: {
        IMB: ['IBM Plex Sans Thai Normal', 'IBM Plex Sans Thai Bold'],
        body: ['IBM Plex Sans Thai Normal']
      },
      colors: {
        primary: "#27397c"
      },
      fontSize: {
        'heading5': '24px'
      },
    },
  },
  variants: {},
  plugins: [],
}
