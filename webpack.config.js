const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/example.js',
  output: {
    filename: 'example.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
