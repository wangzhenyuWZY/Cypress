const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('../../webpack/config')

module.exports = (on, config) => {
  on('cypress:run', async (options) =>
    startDevServer({ options, webpackConfig }),
  )
  return config
}