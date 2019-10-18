const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const dist_dir = 'dist'

module.exports = merge(WebpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, dist_dir)
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})
