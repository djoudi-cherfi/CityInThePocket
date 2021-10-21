const { GenerateSW } = require('workbox-webpack-plugin');

const workbox = {
  plugins: [
    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      // cleanupOutdatedCaches: true,
      maximumFileSizeToCacheInBytes: 15728640,
    }),
  ],
};

module.exports = workbox;
