const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appEntryFile = 'index.jsx';
const appIndexFile = 'index.html';

const pathSrc = path.resolve(__dirname, 'src');
const pathDist = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    app: `${pathSrc}/${appEntryFile}`,
  },
  output: {
    path: pathDist,
    filename: '[name].min.js',
  },
  bail: true,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': pathSrc,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: `${pathSrc}/${appIndexFile}` })],
  devServer: {
    contentBase: pathDist,
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    overlay: true,
  },
};
