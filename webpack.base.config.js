const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[hash:6].js',
    // path: path.resolve(__dirname, dist_dir)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: ['style-loader', 'css-loader']
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        // loader: ['style-loader', 'css-loader', 'less-laoder']
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'DEV'
    }),
    new ExtractTextWebpackPlugin('style.css')
  ]
}
