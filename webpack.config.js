
module.exports = {
  // Nasz główny plik
  entry: ['./index.js'],
  //4/ Całośc będziemy budować do podkatalogu build
  output: {
    filename: '[name].js',
    path: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/,
      loaders: ['file-loader?name=[path][name].[ext]']
    }]
  }
};
