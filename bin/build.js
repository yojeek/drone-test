/* eslint-disable no-console */
import webpack from 'webpack'
import * as config from '../config/webpack/build'

webpack(config).run((error, stats) => {
  if (stats.hasErrors()) {
    console.log(stats.toString({ chunks: false }))

    throw new Error('Build error')
  } else if (error) {
    throw error
  }
})
