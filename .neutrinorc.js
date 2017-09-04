module.exports = {
  use: [
    'neutrino-preset-react',
    neutrino => neutrino.config.module.rule('style').use('css').options({ modules: true, sourceMap: true }),
  ]
}
