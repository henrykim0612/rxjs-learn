const path = require('path');
const fs = require('fs');
const dataBuffer = fs.readFileSync(path.join(__dirname, 'babel.config.json'));
const babelConfig = dataBuffer.toString();

module.exports = {
  mode: 'development', // or 'production' or 'none'
  devtool: 'eval', // production -> 'hidden-source-map'
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  plugins: [],
};
