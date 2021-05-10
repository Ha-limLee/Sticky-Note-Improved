const path = require('path')
const webpack = require('webpack')
const externalPlugins = new webpack.ExternalsPlugin('commonjs', [
    'auto-updater'
])

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, 'app', 'renderer', 'index.js'),
    path.join(__dirname, 'app', 'sass', 'main.scss')
  ],
  output: {
    path: path.join(__dirname, 'app', 'out'),
    filename: 'bundle.js'
  },
  devtool: 'eval-cheap-module-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-react']],
          plugins: []
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}