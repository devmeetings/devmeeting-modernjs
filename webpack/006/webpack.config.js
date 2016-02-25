var webpack           = require("webpack");
var path              = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: [
    path.resolve("src/app.js"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.js"
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
      filename: "../index.html"
    }),
  ],

  //5/ Używaj loaderów do transofmacji plików podczas ich ładowania
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
    ]
  }
};

module.exports = config;
