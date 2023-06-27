const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { override, addWebpackPlugin } = require('customize-cra');
module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        FIRST_APP: process.env.FIRST_APP_PATH,
      },
    })
  )
);
