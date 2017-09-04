const conf = require('./package.json')

module.exports = {
  use: [
    ['neutrino-preset-react', {
      html: {
        title: conf.name || 'React'
      }
    }],
    neutrino => neutrino.config.module.rule('style').use('css').options({ modules: true, sourceMap: true }),
  ]
}
