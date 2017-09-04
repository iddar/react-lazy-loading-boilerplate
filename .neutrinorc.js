const conf = require('./package.json')

module.exports = {
  use: [
    ['neutrino-preset-react', {
      html: {
        title: conf.name || 'React'
      }
    }],
    neutrino => neutrino.config
     .entry('vendor')
       .add('react')
       .add('react-dom')
       .add('prop-types'),
    neutrino => neutrino.config.module.rule('style').use('css').options({ modules: true, sourceMap: true }),
  ],
  env: {
    NODE_ENV: {
      production: {
        use: ['neutrino-middleware-extractstyles']
      }
    }
  }
}
