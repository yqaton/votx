const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  entry: path.join(paths.JS, 'app.jsx'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  // Что делаем с каждый найденным модулем
  module: {
    rules: [
      // { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        // Проверяем тип файла и назначаем соотв. лоадеры
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Кроме нодмоудльс
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Автоматически резолвим js и jsx расширения,
  // чтоб писать include './App'
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    port: 9000
  }
};
