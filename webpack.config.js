const webpack = require("webpack")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  devtool: "source-map",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "./build"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          process.env.WEBPACK_SERVE ? "style-loader" : MiniCssExtractPlugin.loader,
          { 
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          "sass-loader",
        ],
      },
    ],
  },
  serve: {
    port: process.env.PORT,
    content: "./dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new MiniCssExtractPlugin({
        filename: "bundle.css"
    }),
    new CopyWebpackPlugin(["./dist/index.html"])
  ]
}