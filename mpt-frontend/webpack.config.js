const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appEntryFile = 'index.jsx';
const appIndexFile = 'index.html';

const pathSrc = path.resolve(__dirname, 'src');
const pathDist = path.resolve(__dirname, 'public');

const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: `${pathSrc}/${appEntryFile}`,
  },
  output: {
    path: pathDist,
    publicPath: '/',
    filename: '[name].[hash].min.js',
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

      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: `${pathSrc}/globalStyles/variables.scss`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({ template: `${pathSrc}/${appIndexFile}` }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: pathDist,
    compress: true,
    port: 8585,
    hot: true,
    open: true,
    overlay: true,
    historyApiFallback: true,
  },
};
