const path = require('path')
const webpack = require('webpack')
const externalPlugins = new webpack.ExternalsPlugin('commonjs', [
    'auto-updater'
])

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'app', 'renderer', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'app', 'out'),
    filename: '[name].js'
  },
  devtool: 'eval-cheap-module-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-react']],
          plugins: []
        }
      }
    ]
  }
}