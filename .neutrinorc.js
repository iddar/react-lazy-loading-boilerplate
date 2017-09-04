module.exports = {
  use: [
    'neutrino-preset-react',
    ['neutrino-middleware-styles-loader', {
      cssModules: true,
      extractCSS: false,
      sourceMap: true
    }]
  ]
}
