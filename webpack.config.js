const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const basePath = __dirname;
const distPath = "dist";

const indextInput = "./src/html/index.html";
const indexOutput = "index.html";

const webpackInitConfig = {
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
  entry: {
    app: ["@babel/polyfill", "./src/js/index.js"],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: "[chunkhash][name].js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
  ],
};

module.exports = webpackInitConfig;
