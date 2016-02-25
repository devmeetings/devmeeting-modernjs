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
    //5/ Minifikuj index.html
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
      filename: "../index.html"
    }),
  ]
};

module.exports = config;
