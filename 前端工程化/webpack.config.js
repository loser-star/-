module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: "./",
    },
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 从右向左解析
      },
    ],
  },
};
