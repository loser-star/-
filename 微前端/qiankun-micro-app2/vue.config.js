const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 20000,

    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changOrigin: true, //开启代理
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `micro-app2`,
      libraryTarget: "umd",
    },
  },
  // 编写resolveLoader

  chainWebpack: (config) => {
    config.module
      .rule("my-style-loader")
      .test(/\.css$/)
      .use("my-style-loader")
      .loader(path.resolve(__dirname, "./src/utils/my-style-loader.js"))
      .end();
  },
});
