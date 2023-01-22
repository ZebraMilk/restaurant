const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  //loaders
  module: {
    rules: [
      // css loader, order is important here
      {test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  },


  //plugins
  plugins: [
    new htmlWebpackPlugin({
      title: "The Listing Lich",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),

    })
  ],
}