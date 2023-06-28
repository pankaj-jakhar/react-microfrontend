const { ModuleFederationPlugin } = require('webpack').container;

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          FIRST_APP: "FIRST_APP@http://localhost:8080/remoteEntry.js",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
