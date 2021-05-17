const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: [
      path.join(__dirname, 'app', 'renderer', 'index.js'),
      path.join(__dirname, 'app', 'sass', 'main.scss')],
    note: [
      path.join(__dirname, 'app', 'renderer', 'noteWindow.js'),
      path.join(__dirname, 'app', 'sass', 'main.scss')
    ]
  },
  output: {
    path: path.join(__dirname, 'app', 'out'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-cheap-module-source-map',
  target: 'node',
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])
  ],
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
  }
}
