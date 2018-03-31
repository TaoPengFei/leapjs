var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'LLEG.js',
    path: __dirname
  },
  module: {
    noParse: [/clone/],
    rules: [
      { test: /\.js$/, exclude: /node_modules/}
    ]
  }
};
