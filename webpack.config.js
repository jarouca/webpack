module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: __dirname+'/build',
    filename: 'bundle.js'
  },
  module: {
    rules: {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true
  }
};
