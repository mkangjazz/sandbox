const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    about: './dist/about',
    contact: './dist/contact',
//    about: './src/index.js',
  },
  output: {
//    filename: 'main.js',
//    path: path.resolve(__dirname, 'dist'),
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.m?js$/,
        exclude: [
          /(node_modules|bower_components)/,
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};
