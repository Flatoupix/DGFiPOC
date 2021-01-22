
module.exports = {
  configureWebpack: {
    transpileDependencies: ["vuetify"],
    filenameHashing: false,
    outputDir: "build",
    assetsDir: "static",
    publicPath: "",
    devServer: {
      disableHostCheck: true
    }
  }
};
