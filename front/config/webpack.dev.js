const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const port = process.env.PORT || 8080;

const sass = require('sass');

const paths = require('./paths');

const dev = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      // Styles
      {
        test: /\.(s?css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  stats: 'minimal',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: paths.build,
    historyApiFallback: {
      disableDotRule: true,
    },
    open: false,
    compress: true,
    hot: true,
    liveReload: false,
    port,
  },
};

module.exports = smp.wrap(merge(common, dev));
