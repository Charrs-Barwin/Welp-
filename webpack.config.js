const path = require('path');

module.exports = {
  entry: './frontend/welp.jsx',
  output: './app/assets/javascripts',
//   {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: 'bundle.js'
//   },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};