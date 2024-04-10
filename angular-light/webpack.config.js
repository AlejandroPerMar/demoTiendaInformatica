const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "core.kiwixpro.com": "https://core.kiwixpro.com/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: false }),
  },

});
