const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const environment = require('./environment');

const paths = require('./paths');

const common = {
  entry: [
    // SCSS
    `${paths.src}/styles/index.scss`,
    // JS
    `${paths.src}/index.js`,
  ],
  output: {
    filename: 'js/[name].[contenthash].js',
    path: paths.build,
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: '',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${paths.assets}/index.html`,
      favicon: `${paths.assets}/favicon.ico`,
    }),
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext][query]',
        },
      },

      // Images
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
};

module.exports = merge(environment, common);
