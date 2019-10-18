const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

// webpack

const dist_dir = 'dist_dev'

module.exports = merge(WebpackBaseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, dist_dir)
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})
