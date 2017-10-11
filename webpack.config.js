const webpack = require('webpack');
const resolve = require('path').resolve;
const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src],
        exclude: /node_modules/,
        query: {
          presets: ['stage-0']
        }
      },
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
}