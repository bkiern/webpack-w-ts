const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
       {
        test: /\.scss?$/,
        use: [
          MiniCssExtractPlugin.loader, // 3) extract css into files
          'css-loader', // 2) turns css into commonjs
          'sass-loader' // 1) turn sass into css
        ]
      },
    ]
  }
});