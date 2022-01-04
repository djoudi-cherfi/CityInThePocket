import { merge } from 'webpack-merge';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import CopyWebpackPlugin from 'copy-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import environment from './environment';

import {
  src_path, build_path, static_path, assets_path,
} from './paths';

const common = {
  entry: [
    // SCSS
    `${src_path}/styles/index.scss`,
    // JS
    `${src_path}/index.js`,
  ],
  output: {
    filename: 'js/[name].[contenthash].js',
    path: build_path,
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    alias: {
      src: src_path,
      app: src_path,
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: static_path,
          to: '',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${assets_path}/index.html`,
      favicon: `${assets_path}/favicon.ico`,
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

export default merge(environment, common);
