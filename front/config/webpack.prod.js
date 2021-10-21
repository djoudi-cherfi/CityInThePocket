const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const workbox = require('./pwa/workbox');

const manifest = require('./pwa/manifest');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

const sass = require('sass');

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
            loader: MiniCssExtractPlugin.loader,
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

module.exports = merge(common, manifest, workbox, prod);
