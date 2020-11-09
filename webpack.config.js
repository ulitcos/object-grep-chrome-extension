const path = require('path');

module.exports = {
  entry: './src/lib.js',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'lib.js'
  }
};
