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

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.css$/, loader: "style!css?module!postcss" }
    ]
  },

  postcss: function () {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-nested")(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ];
  }
};

module.exports = config;
