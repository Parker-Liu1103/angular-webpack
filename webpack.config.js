const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const glob = require('glob'); 
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    module: glob.sync('./app/**/*.module.js'),
    configuration: glob.sync('./app/*.config.js'),
    controller: glob.sync('./app/**/*.controller.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};