const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index'
  },

  // module: {
  //   loaders: [
  //     { test: /\.css$/, loader: "style-loader!css-loader" },
  //     // ...
  //   ]
  // },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
