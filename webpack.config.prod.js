var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'leap.min.v1.3.1.js',
    path: __dirname + '/dist/'
  },
  module: {
    noParse: [/clone/],
    rules: [
      { test: /\.js$/, exclude: /node_modules/}
    ]
  }
};
