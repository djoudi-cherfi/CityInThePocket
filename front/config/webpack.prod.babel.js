import { merge } from 'webpack-merge';

import common from './webpack.common';

import workbox from './pwa/workbox';

import manifest from './pwa/manifest';

import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

import TerserJSPlugin from 'terser-webpack-plugin';

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { BundleStatsWebpackPlugin } from 'bundle-stats-webpack-plugin';

import sass from 'sass';

const prod = {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // Stats bundle
    new BundleStatsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(s?css)$/i,
        use: [
          {
            loader: _loader,
            options: { publicPath: '../' },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 3 },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  stats: {
    assets: true,
    entrypoints: true,
    chunks: true,
    modules: true,
    builtAt: true,
    hash: true,
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default merge(common, manifest, workbox, prod);
