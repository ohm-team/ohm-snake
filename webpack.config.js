const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "[name].[contenthash].js"
  },
  externals: {
    "three": "THREE"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Emotional Snake'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*.*']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          "postcss-loader"
        ],
      },
    ]
  }
};
