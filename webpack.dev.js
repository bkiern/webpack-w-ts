const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
       {
        test: /\.scss?$/,
        use: [
          'style-loader', // 3) injects styles into DOM
          'css-loader', // 2) turns css into commonjs
          'sass-loader' // 1) turn sass into css
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
});