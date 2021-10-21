const { merge } = require('webpack-merge');

const environment = require('./environment');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // Use 'generator' to output unique name (based on webpack pattern e.g. [name], [ext], etc.)
        generator: {
          filename: 'font/[name][ext][query]',
        },
      },

      // Images
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        type: 'asset',
        // Use 'generator' to output unique name (based on webpack pattern e.g. [name], [ext], etc.)
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
};

module.exports = merge(environment, common);
