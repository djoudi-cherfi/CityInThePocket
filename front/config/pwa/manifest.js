import WebpackPwaManifest from 'webpack-pwa-manifest';

import { assets } from '../paths';

const manifest = {
  plugins: [
    new WebpackPwaManifest({
      name: 'CityInThePocket', // default value
      short_name: 'CityInThePocket',
      description: 'local e-commerce website',
      orientation: 'portrait', // default value
      display: 'standalone', // default value
      start_url: '.', // default value
      theme_color: '#95e6c4',
      background_color: '#95e6c4',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous

      // default values, plugin config
      inject: true,
      fingerprints: true,
      // ios: false,
      publicPath: null,
      includeDirectory: true,

      icons: [
        // Renders to 'windows'
        {
          src: `${assets}/icons/default_512x512.png`,
          sizes: ['512x512'],
          type: 'image/png',
          platform: 'windows',
        },
        // Favicon
        // {
        //   src: `${paths.assets}/favicons/favicon.ico`,
        //   sizes: ['256x256'],
        //   type: 'image/ico',
        //   filename: '[name]_[size].[hash][ext]', // optional
        //   destination: '/favicons', // optional, default value is iconDestination in pluginOptions
        // },
        {
          src: `${assets}/favicons/favicon_small.png`,
          sizes: [16, 32, 48, 64],
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: '/favicons', // optional, default value is iconDestination in pluginOptions
        },
        {
          src: `${assets}/favicons/favicon_large.png`,
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: '/favicons', // optional, default value is iconDestination in pluginOptions
        },
        {
          src: `${assets}/favicons/favicon_default.png`,
          size: '1024x1024', // you can also use the specifications pattern
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: '/favicons', // optional, default value is iconDestination in pluginOptions
        },

        // Renders to 'play'
        {
          src: `${assets}/icons/default.png`,
          sizes: [120, 152, 167, 180, 1024],
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: 'icons/default', // optional, default value is iconDestination in pluginOptions
          platform: 'play', // optional
          density: 1.0, // optional
        },

        // Renders to 'android'
        {
          src: `${assets}/icons/android-icon.png`,
          sizes: [36, 48, 72, 96, 144, 192, 512],
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: 'icons/android',
        },

        // Renders to 'mask-icon'
        {
          src: `${assets}/icons/maskable.png`,
          size: '1024x1024',
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: 'icons/ios',
          purpose: 'maskable',
        },

        // Renders to 'apple-touch-icons'
        {
          src: `${assets}/icons/ios-icon.png`,
          sizes: [120, 152, 167, 180, 1024],
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: 'icons/ios',
          ios: true,
        },

        // Renders to 'apple-touch-startup-image'
        {
          src: `${assets}/icons/ios-startup.png`,
          size: 1024,
          type: 'image/png',
          filename: '[name]_[size].[hash][ext]', // optional
          destination: 'icons/ios',
          ios: 'startup',
        },
      ],

      ios: {
        // true/false. true as default. renders to 'apple-mobile-web-app-capable'
        'apple-mobile-web-app-capable': 'yes',

        // default value. renders to 'apple-mobile-web-app-title'
        ' apple-mobile-web-app-title ': ' AppTitle ',

        // default value. renders to 'apple-mobile-web-app-status-bar-style'
        ' apple-mobile-web-app-status-bar-style ': ' noir ',
      },
    }),
  ],
};

export default manifest;
