module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/are-scooters-in-new-york' : '',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
