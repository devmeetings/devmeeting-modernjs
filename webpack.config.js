var webpack           = require("webpack");
var path              = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

//23/ Konfiguracja webpaka przypomina Gruntfile.js,
/// ale API nie zależy tak bardzo od pluginów/loaderów
var config = {
  //3/ Plik wejściowy
  entry: [
    path.resolve("src/app.js"),
  ],

  //4/ Ustawienia dla plików wyjściowych
  output: {
    path: path.resolve("build"),
    filename: "app.js"
  },

  //8/ Konfiguracja pluginów
  plugins: [
    //5/ Minifikuj index.html
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
      filename: "index.html"
    }),
  ]
};

module.exports = config;
