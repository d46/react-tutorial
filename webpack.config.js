const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./src/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          "stylus-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/src/public"),
    port: 9000
  },
  mode: "development",
  devtool: "eval-source-map"
};
