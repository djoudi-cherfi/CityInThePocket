import { merge } from 'webpack-merge';

import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

import sass from 'sass';
import common from './webpack.common.babel';

import { build_path } from './paths';

const smp = new SpeedMeasurePlugin();

const port = process.env.PORT || 8080;

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
    static: build_path,
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

export default smp.wrap(merge(common, dev));
