const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.pug'),
      filetype: 'pug'
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new UglifyJsPlugin({
      test: /\.(js|jsx)$/i,
      uglifyOptions: {
        compress: {
          warnings: false,
          ie8: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }
    }),
    new webpack.ProvidePlugin({
      fetch:
        'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    })
  ],
  devServer: {
    contentBase: paths.SRC
  }
};
