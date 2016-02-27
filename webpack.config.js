
module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  entry: {
    'main': './index.ts', 
    'main.test': './index.test.ts'
  },
  output: {
    filename: '[name].js',
    path: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', 'x']
  },
  module: {
    loaders: [
    {
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      loader: 'ts-loader'
    },
    {
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
  },
  ts: {
    compilerOptions: {
      target: "es5",
      "sourceMap": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
    }
  }
};
