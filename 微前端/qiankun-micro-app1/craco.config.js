// module.exports = {
//   webpack: (config) => {
//     config.output.library = `micro-app1`;
//     config.output.libraryTarget = "umd";
//     // config.output.publicPath = '//localhost:3000/';

//     return config;
//   },
//   devServer: (config) => {
//     config.headers = {
//       "Access-Control-Allow-Origin": "*",
//     };
//     return config;
//   },
// };

const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: "less-loader",
      options: {
        modifyVars: {
          "@ant-prefix": "yourPrefix",
        },
        javascriptEnabled: true,
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
    // 配置微前端qinakun的打包umd
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.library = `micro-app1`;
      webpackConfig.output.libraryTarget = "umd";
      return webpackConfig;
    },
  },
};
