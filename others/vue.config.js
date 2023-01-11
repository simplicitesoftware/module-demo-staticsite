module.exports = {
  publicPath: './',
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    allowedHosts: 'all'
  }
};
