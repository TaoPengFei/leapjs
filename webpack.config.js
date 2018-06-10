var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'leap.js',
    path: __dirname + '/dist/'
  },
  module: {
    noParse: [/clone/],
    rules: [
      { test: /\.js$/, exclude: /node_modules/}
    ]
  }
};
