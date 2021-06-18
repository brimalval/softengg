const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './private/javascripts/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/javascripts'),
  },
};